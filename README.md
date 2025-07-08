# Aegentic - AI Agent Security Platform

A comprehensive platform for evaluating and securing multi-agent AI systems.

## Contact Form Setup

The contact form is now configured to send emails via Vercel serverless functions. To set up email functionality:

### Environment Variables

Add these environment variables to your Vercel project:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Gmail Setup (Recommended)

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. Use the generated password as `SMTP_PASS`

### Alternative Email Services

You can also use:
- **SendGrid**: Use their SMTP settings
- **Mailgun**: Use their SMTP settings
- **AWS SES**: Use their SMTP settings

## Development

```bash
npm install
npm run dev
```

## Deployment

Deploy to Vercel:

```bash
vercel
```

## Things to add
- [ ] Calendly on website
- [ ] Fix benchmark page
- [ ] Change title to Aegent
