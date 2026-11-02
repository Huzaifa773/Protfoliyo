export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  accent: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  detailedPoints: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
  category: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: 'In Progress' | 'Completed';
  expectedYear?: string;
  description: string;
  highlights: string[];
}

export const portfolioData = {
  personal: {
    name: "Muhammed HuzaiFa",
    shortName: "HuzaiFa",
    title: "Junior Full-Stack Developer",
    tagline: "Building scalable, responsive, and database-driven web applications from storefront to backend.",
    status: "Available for Junior Roles & Opportunities",
    phone: "+92 311 2485852",
    email: "huzaifamuhammed597@gmail.com",
    location: "Karachi, Pakistan",
    github: "https://github.com/HuzaiFa773",
    resumeUrl: "/Muhammed_HuzaiFa_CV.pdf",
    yearsOfExperience: "1+ Year Hands-on",
  },

  about: {
    summary:
      "Motivated Junior Full-Stack Developer focused on building responsive, user-centric web applications with Next.js, React.js, and TypeScript, backed by Node.js, PHP, and ASP.NET/C# by MySQL and MongoDB databases. Built a database-driven e-commerce application from storefront to admin tools and deployed it live on Vercel. Currently pursuing Intermediate Pre-Engineering and seeking a junior role where I can contribute to real-world products.",
    highlights: [
      {
        title: "Modern Frontend Mastery",
        description: "Crafting fluid, high-performance user interfaces using Next.js (App Router), React, and Tailwind CSS.",
      },
      {
        title: "Robust Full-Stack Backends",
        description: "Architecting REST APIs and database logic with Node.js, PHP, ASP.NET/C#, and Prisma ORM.",
      },
      {
        title: "Relational & Document DBs",
        description: "Experienced with MySQL, MongoDB, and SQL Server data modeling, schema design, and query optimization.",
      },
      {
        title: "Production Deployment",
        description: "Deploying end-to-end full-stack applications with CI/CD and production environments on Vercel.",
      },
    ],
    stats: [
      { label: "Production Project", value: "Live on Vercel" },
      { label: "Tech Stack", value: "Next.js & Prisma" },
      { label: "Core Focus", value: "Full-Stack Dev" },
      { label: "Work Availability", value: "Immediate" },
    ],
  },

  skillCategories: [
    {
      title: "Frontend Development",
      description: "Interactive, accessible, and ultra-responsive user interfaces with cutting-edge tools.",
      icon: "Layout",
      accent: "from-emerald-500 to-teal-400",
      skills: [
        { name: "React.js" },
        { name: "Next.js (App Router)" },
        { name: "TypeScript" },
        { name: "JavaScript (ES6+)" },
        { name: "HTML5 / CSS3" },
        { name: "Bootstrap" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      title: "Backend Development",
      description: "Server-side logic, secure RESTful endpoints, and backend architectures.",
      icon: "Server",
      accent: "from-cyan-500 to-blue-500",
      skills: [
        { name: "Node.js" },
        { name: "PHP" },
        { name: "ASP.NET" },
        { name: "C#" },
        { name: "Express / REST APIs" },
      ],
    },
    {
      title: "Databases & Storage",
      description: "Structured relational models and flexible document data stores.",
      icon: "Database",
      accent: "from-emerald-400 to-cyan-500",
      skills: [
        { name: "MySQL" },
        { name: "MongoDB" },
        { name: "SQL Server" },
        { name: "Database Schema Design" },
      ],
    },
    {
      title: "Tools & Deployment",
      description: "Version control, automated pipelines, ORMs, and hosting platforms.",
      icon: "Wrench",
      accent: "from-teal-400 to-emerald-500",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Prisma ORM" },
        { name: "REST APIs" },
        { name: "Vercel Platform" },
        { name: "VS Code" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      title: "Full-Stack Perfume E-commerce Store",
      subtitle: "Database-Driven Storefront & Administrative Management System",
      description:
        "Built a full-stack e-commerce store with Next.js, featuring a product-focused storefront and shopping experience. Implemented database-backed features for products and orders using Prisma with MySQL. Developed an admin-side product management functionality. Deployed the application to Vercel.",
      detailedPoints: [
        "Modern, responsive storefront optimized for conversions with interactive perfume catalogs and category filters.",
        "Database-backed ordering, inventory, and product tracking managed via Prisma ORM connected with a live MySQL instance.",
        "Dedicated Admin Portal enabling real-time product additions, edits, inventory adjustments, and status tracking.",
        "Production-tested CI/CD pipeline and seamless deployment on Vercel with near-zero latency.",
      ],
      techStack: ["Next.js", "Prisma ORM", "MySQL", "Tailwind CSS", "TypeScript", "Vercel"],
      liveUrl: "https://golden-perfume-five.vercel.app/",
      githubUrl: "https://github.com/HuzaiFa773/Golden-perfume",
      category: "Full-Stack Web App",
      featured: true,
      metrics: [
        { label: "Deployment", value: "Vercel Live" },
        { label: "Architecture", value: "Next.js App Router" },
        { label: "Database", value: "MySQL + Prisma" },
      ],
    },
  ] as Project[],

  education: [
    {
      degree: "Intermediate - Pre-Engineering",
      institution: "Ziauddin University",
      period: "2024 - 2026",
      status: "In Progress",
      expectedYear: "Expected 2026",
      description:
        "Rigorous foundation in mathematics, analytical problem solving, and engineering principles, complementing self-driven software engineering practice.",
      highlights: [
        "Advanced Mathematics and Physical Sciences curriculum",
        "Active self-study in Full-Stack Development and modern frameworks",
        "Focus on algorithmic thinking and data modeling",
      ],
    },
    {
      degree: "Matriculation (Science / Computer)",
      institution: "Shahi Pakistan Education School",
      period: "2023 - 2025",
      status: "Completed",
      expectedYear: "2025",
      description:
        "Completed secondary education with strong focus in Computer Science, fundamental programming concepts, and mathematics.",
      highlights: [
        "Graduated with distinction in Science and Computer fundamentals",
        "Initiated hands-on programming with web development basics (HTML, CSS, JS)",
      ],
    },
  ] as EducationItem[],

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/HuzaiFa773",
      icon: "Github",
    },
    {
      name: "Email",
      url: "mailto:huzaifamuhammed597@gmail.com",
      icon: "Mail",
    },
    {
      name: "Phone",
      url: "tel:+923112485852",
      icon: "Phone",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/923112485852",
      icon: "MessageCircle",
    },
  ],
};
