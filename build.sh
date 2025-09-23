#!/bin/bash

# Exit on error
set -e

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the project
echo "Building the project..."
npm run build

echo "Build completed successfully!"
