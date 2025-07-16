#!/bin/bash

echo "🚀 Starting Aegent/Dev Backend..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "⚙️  Creating .env file from template..."
    cp .env.example .env
    echo "✏️  Please edit .env file with your email settings!"
    echo "📧 For Gmail: Enable 2FA and create an app password"
    echo "📖 See README.md for detailed setup instructions"
    
    # Open .env in default editor if available
    if command -v code &> /dev/null; then
        code .env
    elif command -v nano &> /dev/null; then
        nano .env
    else
        echo "📝 Edit .env file with your favorite text editor"
    fi
    
    echo "Press any key to continue once you've configured .env..."
    read -n 1
fi

echo "🏃 Starting development server..."
npm run dev