#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}Setting up QuoteLinker project...${NC}"

# Install dependencies
echo -e "${GREEN}Installing dependencies...${NC}"
npm install

# Create .env.local from example
if [ ! -f .env.local ]; then
    echo -e "${GREEN}Creating .env.local file...${NC}"
    cp .env.local.example .env.local
    echo -e "${BLUE}Please update .env.local with your actual API keys and credentials${NC}"
fi

# Create public directory if it doesn't exist
if [ ! -d public ]; then
    echo -e "${GREEN}Creating public directory...${NC}"
    mkdir public
fi

# Check for required images
echo -e "${GREEN}Checking for required images...${NC}"
required_images=("Q_L.jpeg" "auto-insurance.jpg" "term-life-insurance.jpg" "short-term-disability.jpg")
missing_images=()

for image in "${required_images[@]}"; do
    if [ ! -f "public/$image" ]; then
        missing_images+=("$image")
    fi
done

if [ ${#missing_images[@]} -ne 0 ]; then
    echo -e "${BLUE}The following images are missing from the public directory:${NC}"
    for image in "${missing_images[@]}"; do
        echo -e "- $image"
    done
    echo -e "${BLUE}Please add these images to the public directory${NC}"
fi

echo -e "${GREEN}Setup complete!${NC}"
echo -e "${BLUE}To start the development server, run:${NC}"
echo -e "npm run dev" 