#!/bin/bash

# Exit on error and print commands as they are executed
set -ex

# Print Node.js and npm versions
node -v
npm -v

# Install dependencies
echo "Installing dependencies..."
npm ci --no-audit

# Check if Vite is installed
echo "Checking Vite installation..."
npx vite --version || echo "Vite not found, installing..."

# Run the build
echo "Running build..."
npm run build

# List the built files
echo "Build completed. Contents of dist/:"
ls -la dist/
