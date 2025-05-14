# 🏋️‍♀️ FitPilot AI

**FitPilot** is a personalized AI fitness and diet assistant built with Next.js, Vapi (voice AI), and Gemini (text-based AI) that helps users generate custom health plans based on their physical parameters and lifestyle needs — all through a natural voice conversation.

## 🌐 [Check out the live FitPilot app](https://fit-pilot.vercel.app)

## 🎯 Project Purpose

This app was developed as a learning project to:

- Explore building modern web apps with **Next.js**
- Practice integrating **AI services** (voice + text)
- Learn database and user management with **Convex** and **Clerk**
- Improve UI/UX skills using **Tailwind CSS** and **shadcn/ui**

---

## 🧠 How It Works

1. **Voice Assistant** powered by **Vapi** starts a conversation with the user to collect:

   - Age, height, weight
   - Dietary restrictions or injuries
   - Fitness goals and preferences

2. Collected data is passed to **Gemini** AI to generate:

   - A personalized **workout plan**
   - A tailored **diet plan**

3. The final program is saved to the database and shown in the user profile.

---

## 🔧 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Voice AI**: [Vapi](https://vapi.ai/) – real-time voice conversations
- **Text AI**: [Gemini](https://deepmind.google/discover/blog/gemini) – smart prompt-based responses
- **Database**: [Convex](https://www.convex.dev/)
- **Auth**: [Clerk](https://clerk.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)

---

## 🛠 Features

- 🎙️ Natural voice chat to collect user input
- 🧠 AI-generated workout & diet plans
- 📱 Fully responsive UI
- 👤 Authenticated user accounts
- 🔄 Dynamic user profiles with saved programs

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/KrisChe8/FitPilot
cd fitpilot
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a .env.local file and include:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_VAPI_WORKFLOW_ID=
NEXT_PUBLIC_VAPI_API_KEY=

CONVEX_DEPLOYMENT=

NEXT_PUBLIC_CONVEX_URL=

### 4. Run the app

```bash
npm run dev
```

## 📌 Notes

You’ll need accounts for Vapi, Gemini API (or OpenAI equivalent), Clerk, and Convex to make full use of the app.

This is an educational prototype, but it showcases how to build real-world AI-powered voice interfaces in a web app.
