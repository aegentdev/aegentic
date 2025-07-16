import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Define a type for the email request body
interface EmailRequestBody {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

// Define a type for waitlist signup
interface WaitlistSignup {
  name: string;
  email: string;
  company?: string;
  useCase?: string;
  timestamp: string;
}

// File path for storing waitlist signups
const WAITLIST_FILE = path.join(__dirname, 'waitlist-signups.json');

// Helper function to load waitlist signups
const loadWaitlistSignups = (): WaitlistSignup[] => {
  try {
    if (fs.existsSync(WAITLIST_FILE)) {
      const data = fs.readFileSync(WAITLIST_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading waitlist signups:', error);
  }
  return [];
};

// Helper function to save waitlist signups
const saveWaitlistSignups = (signups: WaitlistSignup[]): void => {
  try {
    fs.writeFileSync(WAITLIST_FILE, JSON.stringify(signups, null, 2));
  } catch (error) {
    console.error('Error saving waitlist signups:', error);
  }
};

app.post("/send-email", async (req: Request<{}, {}, EmailRequestBody>, res: Response) => {
  const { to, subject, text, html } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"My Website" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error: any) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Waitlist signup endpoint
app.post("/waitlist-signup", async (req: Request<{}, {}, Omit<WaitlistSignup, 'timestamp'>>, res: Response) => {
  const { name, email, company, useCase } = req.body;

  // Validate required fields
  if (!name || !email) {
    return res.status(400).json({ success: false, error: "Name and email are required" });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: "Invalid email format" });
  }

  try {
    // Load existing signups
    const signups = loadWaitlistSignups();
    
    // Check if email already exists
    const existingSignup = signups.find(signup => signup.email.toLowerCase() === email.toLowerCase());
    if (existingSignup) {
      return res.status(409).json({ success: false, error: "Email already registered for waitlist" });
    }

    // Create new signup
    const newSignup: WaitlistSignup = {
      name,
      email,
      company,
      useCase,
      timestamp: new Date().toISOString()
    };

    // Add to signups and save
    signups.push(newSignup);
    saveWaitlistSignups(signups);

    // Send confirmation email to user
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const userEmailHTML = `
      <h2>Welcome to the Aegent/Dev Waitlist!</h2>
      <p>Hi ${name},</p>
      <p>Thank you for joining our waitlist for early access to the Aegent/Dev AI agent security platform.</p>
      
      <h3>What's Next?</h3>
      <ul>
        <li>🔐 Early access to our security platform</li>
        <li>🆓 Free security assessment for your agents</li>
        <li>⭐ Priority customer support</li>
        <li>📬 Exclusive updates on new features</li>
      </ul>
      
      <p>We'll notify you as soon as our platform is ready for early access (expected in 2-4 weeks).</p>
      
      <p>Best regards,<br>The Aegent/Dev Team</p>
      
      <hr>
      <p style="color: #666; font-size: 12px;">
        You're receiving this email because you signed up for the Aegent/Dev waitlist at https://aegentdev.com
      </p>
    `;

    await transporter.sendMail({
      from: `"Aegent/Dev" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Welcome to the Aegent/Dev Waitlist! 🎉",
      html: userEmailHTML,
    });

    // Send notification email to admin
    const adminEmailHTML = `
      <h2>New Waitlist Signup</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Use Case:</strong> ${useCase || 'Not provided'}</p>
      <p><strong>Timestamp:</strong> ${newSignup.timestamp}</p>
      
      <p>Total signups: ${signups.length}</p>
    `;

    await transporter.sendMail({
      from: `"Aegent/Dev Notifications" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `New Waitlist Signup: ${name}`,
      html: adminEmailHTML,
    });

    console.log(`New waitlist signup: ${email} (Total: ${signups.length})`);
    res.status(200).json({ 
      success: true, 
      message: "Successfully joined waitlist",
      signupCount: signups.length
    });

  } catch (error: any) {
    console.error("Error processing waitlist signup:", error);
    res.status(500).json({ success: false, error: "Failed to process signup" });
  }
});

// Get waitlist signups (admin endpoint)
app.get("/waitlist-signups", (req: Request, res: Response) => {
  try {
    const signups = loadWaitlistSignups();
    res.status(200).json({ 
      success: true, 
      signups: signups,
      count: signups.length 
    });
  } catch (error: any) {
    console.error("Error fetching waitlist signups:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
