# Muhammed HuzaiFa - Personal Portfolio Website

A modern, responsive, and dynamic personal portfolio website engineered with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion** animations. Designed dark-mode-first with a high-tech obsidian/navy palette and emerald-cyan accents.

---

## 🌟 Highlights & Features

- **⚡ Next.js 14 (App Router)**: Blazing fast server-side rendering, routing, and SEO optimization.
- **🎨 Dark-Mode-First UI**: Crafted with deep navy blues (`#050811`, `#0A0F1E`), glassmorphism cards, and emerald-cyan neon glow effects.
- **✨ Framer Motion Animations**: Smooth section reveals, floating background glow effects, and interactive terminal window.
- **📱 Fully Responsive**: 100% mobile-friendly with an animated slide-down navigation menu and responsive grids.
- **💼 CV-Driven Architecture**:
  - **Hero Section**: Dynamic developer config card, status indicators, and CV download trigger.
  - **About Me**: Professional summary, key engineering pillars, and contact metadata.
  - **Tech Skills**: Modern badge cards grouped into Frontend, Backend, Databases, and Tools (no progress bars).
  - **Featured Project**: Showcasing the *Full-Stack Perfume E-commerce Store* with live Vercel demo and GitHub links.
  - **Education**: Vertical timeline layout highlighting Pre-Engineering at Ziauddin University and Matriculation.
  - **Contact Section**: Interactive form with validation, status notifications, and one-click clipboard copy for email/phone.

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
Run the following in the project root:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```text
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Contact form submission API endpoint
│   ├── globals.css              # Custom scrollbars, glassmorphism, utilities
│   ├── layout.tsx               # Root layout, Google Inter font, Metadata
│   └── page.tsx                 # Main landing page assembling sections
├── components/
│   ├── About.tsx                # About section with summary and pillars
│   ├── BackgroundGlow.tsx       # Animated ambient gradient background
│   ├── Contact.tsx              # Interactive contact form & quick-copy cards
│   ├── Education.tsx            # Vertical timeline milestone component
│   ├── Footer.tsx               # Footer with social links & back-to-top
│   ├── Hero.tsx                 # Hero section with interactive terminal
│   ├── Navbar.tsx               # Glassmorphic navbar with active section spy
│   ├── Projects.tsx             # Featured project showcase & live links
│   └── Skills.tsx               # Categorized skill badges without progress bars
├── data/
│   └── portfolioData.ts         # Central typed source of truth for all CV data
├── public/
│   ├── Muhammed_HuzaiFa_CV.pdf  # Downloadable CV file
│   └── resume.pdf               # Mirror CV link
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.mjs
```

---

## 📬 Contact Form Configuration

The form in `components/Contact.tsx` is pre-wired to:
1. Call the built-in Next.js route at `/api/contact`.
2. Easily integrate with third-party form services like **Formspree** or **EmailJS**:
   - For **Formspree**: Replace the fetch endpoint in `Contact.tsx` with:
     ```ts
     const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(formData),
     });
     ```
   - For **Resend / Nodemailer**: Add your secret key in `app/api/contact/route.ts`.

---

## 🚀 Deploying to Vercel

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio Website"
   git branch -M main
   git remote add origin https://github.com/HuzaiFa773/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Import the repository and click **Deploy**. Next.js will build and deploy automatically!
