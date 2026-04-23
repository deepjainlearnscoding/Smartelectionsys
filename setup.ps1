# Smart Election Guide — Setup Script
# Run this once in the project root

Write-Host "🚀 Scaffolding Smart Election Guide..." -ForegroundColor Cyan

# Step 1: Create Next.js App
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes

# Step 2: Install extra dependencies
npm install firebase @google/generative-ai lucide-react framer-motion clsx tailwind-merge

Write-Host "✅ Setup complete! Fill in .env.local then run: npm run dev" -ForegroundColor Green
