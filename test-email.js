import 'dotenv/config';
import nodemailer from 'nodemailer';

// Test SMTP configuration
async function testEmail() {
  console.log('Testing SMTP configuration...');
  
  // Get environment variables
  const smtpConfig = {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  };

  console.log('SMTP Config:', {
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.secure,
    user: smtpConfig.auth.user,
    pass: smtpConfig.auth.pass ? '***' : 'NOT SET'
  });

  try {
    // Create transporter
    const transporter = nodemailer.createTransport(smtpConfig);
    
    // Verify connection
    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful!');
    
    // Send test email
    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: `"Test" <${smtpConfig.auth.user}>`,
      to: 'aegentdev@gmail.com',
      subject: 'Test Email from Contact Form',
      text: 'This is a test email to verify SMTP configuration.',
      html: '<h1>Test Email</h1><p>This is a test email to verify SMTP configuration.</p>',
    });
    
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    
  } catch (error) {
    console.error('❌ SMTP Error:', error.message);
    console.error('Full error:', error);
  }
}

// Run test
testEmail(); 