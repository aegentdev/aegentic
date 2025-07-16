# Aegent/Dev Backend

Backend API for the Aegent/Dev website with email functionality for waitlist signups.

## Features

- ✅ Waitlist signup with email validation
- ✅ Automatic confirmation emails to users  
- ✅ Admin notifications for new signups
- ✅ Admin dashboard to view all signups
- ✅ CSV export functionality
- ✅ JSON file storage for signups

## Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Configure environment:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your email settings:
   - For Gmail: Use an app password
   - For other providers: Check their SMTP settings

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## API Endpoints

### POST `/waitlist-signup`
Sign up for the waitlist.

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Corp", // optional
  "useCase": "AI security testing" // optional
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully joined waitlist",
  "signupCount": 42
}
```

### GET `/waitlist-signups`
Get all waitlist signups (admin only).

**Response:**
```json
{
  "success": true,
  "signups": [...],
  "count": 42
}
```

### POST `/send-email`
Send custom email (general purpose).

**Body:**
```json
{
  "to": "recipient@example.com",
  "subject": "Subject",
  "html": "<p>HTML content</p>"
}
```

## Email Configuration

### Gmail Setup
1. Enable 2-factor authentication
2. Generate an app password: Google Account > Security > App passwords
3. Use the app password in `SMTP_PASS`

### Other Email Providers
- **Outlook/Hotmail:** smtp.live.com:587
- **Yahoo:** smtp.mail.yahoo.com:587  
- **Custom SMTP:** Check your provider's documentation

## File Storage

Waitlist signups are stored in `waitlist-signups.json` in the backend directory. This file is created automatically when the first signup occurs.

## Frontend Integration

The frontend expects the backend to run on `http://localhost:5000`. Update the API URLs in the frontend if you change the port.

## Security Notes

- Store `.env` file securely and never commit it to version control
- Consider adding authentication for the admin endpoints in production
- Use HTTPS in production
- Regularly backup the `waitlist-signups.json` file