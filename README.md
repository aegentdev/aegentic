# Aegent/Dev Website
 
AI Agent Security platform website with waitlist functionality and email integration!

## 🚀 Quick Start

### Frontend (Already Running)
The React frontend should be running on `http://localhost:3000`

### Backend (For Waitlist Emails)
To enable real email functionality for the waitlist:

**Option 1: Quick Start (Recommended)**
```bash
cd backend
chmod +x start-backend.sh  # On Mac/Linux
./start-backend.sh         # On Mac/Linux
# OR
start-backend.bat          # On Windows
```

**Option 2: Manual Setup**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your email settings
npm run dev
```

## ✨ Features

- 🎨 **Modern Design** - Clean, professional website with brown color scheme
- 📧 **Real Email Functionality** - Automatic confirmation emails for waitlist signups
- 📊 **Admin Dashboard** - View and export waitlist signups at `/admin`
- 📱 **Responsive Design** - Works on all devices
- 🔒 **Email Validation** - Prevents duplicate signups and validates formats

## 📧 Email Setup (Gmail Example)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**: 
   - Go to Google Account → Security → App passwords
   - Generate password for "Mail"
3. **Update .env file**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-digit-app-password
   ADMIN_EMAIL=admin@aegentdev.com
   ```

## 🛠️ Development

### Frontend
```bash
npm start                 # Start React development server
npm run build            # Build for production
```

### Backend
```bash
cd backend
npm run dev              # Start with auto-reload
npm run build            # Build TypeScript
npm start                # Start production server
```

## 📱 Pages

- **Home** (`/`) - Main landing page with waitlist signup
- **Waitlist** (`/waitlist`) - Dedicated waitlist signup page
- **Admin** (`/admin`) - View all waitlist signups (CSV export available)
- **Blog** (`/blog`) - Company blog
- **About** (`/about`) - About the company
- **Contact** (`/contact`) - Contact information

## 🔧 API Endpoints

- `POST /waitlist-signup` - Join the waitlist
- `GET /waitlist-signups` - Get all signups (admin)
- `POST /send-email` - Send custom emails

## 📦 File Structure

```
/src
  /components
    Waitlist.tsx         # Waitlist signup form
    Navbar.tsx           # Navigation with all links
  /pages
    Home.tsx             # Landing page
    Admin.tsx            # Admin dashboard
    Waitlist.tsx         # Waitlist page wrapper
/backend
  index.ts               # Express server with email functionality
  package.json           # Backend dependencies
  .env.example           # Environment template
```

## 🚨 Troubleshooting

**"Network Error" when submitting waitlist:**
1. Make sure backend is running (`cd backend && npm run dev`)
2. Check that .env file is configured with email settings
3. Verify port 5000 is available

**Emails not sending:**
1. Check SMTP settings in .env
2. For Gmail: Use app password, not regular password
3. Check firewall/antivirus settings

**Backend won't start:**
1. Run `npm install` in backend directory
2. Check Node.js version (requires 16+)
3. Ensure port 5000 is not in use

## 📝 Notes

- Waitlist data is stored in `backend/waitlist-signups.json`
- Frontend will fallback gracefully if backend is not available
- Multiple API endpoint fallbacks for flexibility
- All emails use professional templates with branding

## 🔐 Security

- Email validation and duplicate prevention
- CORS configured for frontend integration
- Environment variables for sensitive data
- Consider adding authentication for admin endpoints in production
