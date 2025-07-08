import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as nodemailer from 'nodemailer';
// Load .env variables in local development (ignored by Vercel in production)
import 'dotenv/config';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Debug: Log environment variables (without password)
  console.log('Environment check:', {
    SMTP_HOST: process.env.SMTP_HOST ? 'SET' : 'NOT SET',
    SMTP_PORT: process.env.SMTP_PORT ? 'SET' : 'NOT SET',
    SMTP_SECURE: process.env.SMTP_SECURE ? 'SET' : 'NOT SET',
    SMTP_USER: process.env.SMTP_USER ? 'SET' : 'NOT SET',
    SMTP_PASS: process.env.SMTP_PASS ? 'SET' : 'NOT SET',
  });

  const { to, subject, text, html } = req.body;

  if (!to || !subject || (!text && !html)) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Check if all required environment variables are set
  const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_SECURE', 'SMTP_USER', 'SMTP_PASS'];
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('Missing environment variables:', missingVars);
    return res.status(500).json({ 
      error: 'Server configuration error', 
      details: `Missing environment variables: ${missingVars.join(', ')}` 
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"My Website" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html,
    });

    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error: unknown) {
    console.error('Email error:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return res.status(500).json({ 
      error: 'Failed to send email', 
      details: errorMessage,
      timestamp: new Date().toISOString()
    });
  }
}
