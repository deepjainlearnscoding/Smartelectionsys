# Smart Election Guide

An **AI-powered election assistant** built with Next.js 14, Tailwind CSS, Firebase, and Google Gemini.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the template and fill in your keys:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local`:

**Firebase Setup:**
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Enable **Authentication → Email/Password**
4. Create a **Firestore** database (start in test mode)
5. Go to Project Settings → Add a Web App → copy the config

**Gemini API:**
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a free API key
3. Paste it as `GEMINI_API_KEY` in `.env.local`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
smart-election-guide/
├── app/                    # Next.js App Router pages
│   ├── (auth)/             # Login + Register pages
│   ├── api/                # Gemini API routes (chat, verify)
│   ├── assistant/          # AI Chat page
│   ├── dashboard/          # Protected user dashboard
│   ├── map/                # Polling booth info
│   ├── misinformation/     # Fact checker
│   ├── timeline/           # Election timeline
│   ├── globals.css         # Global styles + animations
│   ├── layout.tsx          # Root layout with Navbar
│   └── page.tsx            # Landing page
├── components/             # Reusable UI components
│   ├── ui/                 # Button, Card, Input, Badge, Loaders
│   └── Navbar.tsx          # Persistent navigation
├── context/
│   └── AuthContext.tsx     # Firebase Auth provider
├── lib/
│   ├── ai.ts               # Gemini client wrapper
│   ├── firebase.ts         # Firebase init
│   └── utils.ts            # cn() + helpers
├── middleware.ts            # Route protection
└── .env.local.example      # Environment variable template
```

---

## 🔥 Features

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Landing page with hero, features, how-it-works |
| Login | `/login` | Firebase email/password auth |
| Register | `/register` | Sign-up with age validation (18+) |
| Dashboard | `/dashboard` | Personalized user dashboard |
| AI Assistant | `/assistant` | ChatGPT-style election chatbot |
| Timeline | `/timeline` | Animated timeline with live countdown |
| Polling Info | `/map` | Booth search + document checklist |
| Fact Checker | `/misinformation` | AI-powered misinformation detector |

---

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + custom animations
- **Auth + DB**: Firebase Auth + Firestore
- **AI**: Google Gemini 1.5 Flash
- **Icons**: Lucide React
- **Fonts**: Inter + Outfit (Google Fonts)

---

## 🚀 Deploy

```bash
npm run build
npm start
```

Or deploy to Vercel: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)