@echo off
echo 🚀 Starting Aegent/Dev Backend...

REM Check if node_modules exists
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

REM Check if .env exists
if not exist ".env" (
    echo ⚙️  Creating .env file from template...
    copy .env.example .env
    echo ✏️  Please edit .env file with your email settings!
    echo 📧 For Gmail: Enable 2FA and create an app password
    echo 📖 See README.md for detailed setup instructions
    
    REM Try to open .env in notepad
    start notepad .env
    
    echo Press any key to continue once you've configured .env...
    pause > nul
)

echo 🏃 Starting development server...
npm run dev