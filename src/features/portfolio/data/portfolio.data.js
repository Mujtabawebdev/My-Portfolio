import petsVetaPreview from "../../../assets/portfolio/pets-veta-preview.svg";
import pearlyxPreview from "../../../assets/portfolio/pearlyx-preview.svg";
import studentTeacherPreview from "../../../assets/portfolio/student-teacher-preview.svg";
import medEdgePreview from "../../../assets/portfolio/med-edge-preview.png";
import leadScraperPreview from "../../../assets/portfolio/lead-scraper-preview.png";

export const portfolioData = {
  navItems: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Certificates", href: "#certifications" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Full Stack Developer · Lahore, Pakistan",
    title: "Muhammad Mujtaba Naveed",
    subtitle: "",
    description:
      "I build and ship production-ready web applications with React, Next.js, Node.js, MongoDB, and PostgreSQL—plus RAG-powered AI experiences with LangChain and Google Gemini.",
    availability: "Open to product-focused full-stack engineering opportunities.",
    primaryAction: { label: "View Projects", href: "#projects" },
    secondaryAction: { label: "Download CV", href: "/docs/Mujtaba_Cv.pdf" },
  },
  stats: [
    { value: "1+", label: "Years of professional full-stack experience" },
    { value: "4", label: "User workflows in Pets Veta" },
    { value: "25+", label: "Technologies across the stack" },
    { value: "RAG", label: "AI engineering experience" },
  ],
  services: [
    {
      icon: "UI",
      title: "Frontend Development",
      description:
        "Responsive React and Next.js products with reusable components, accessible interactions, and polished user journeys.",
    },
    {
      icon: "API",
      title: "Backend & REST APIs",
      description:
        "Node.js and Express backends with authentication, middleware, validation, file uploads, and production-minded structure.",
    },
    {
      icon: "DB",
      title: "Database Workflows",
      description:
        "MongoDB, PostgreSQL, Prisma, and Mongoose data models that support real marketplace, booking, and dashboard features.",
    },
    {
      icon: "RT",
      title: "Realtime & Integrations",
      description:
        "RAG pipelines, LangChain, Gemini, vector search, Socket.io, Cloudinary, Stripe, and other purposeful integrations.",
    },
  ],
  projects: [
    {
      title: "Pets Veta",
      initials: "PV",
      meta: "Full-stack pet care platform",
      subtitle: "Marketplace - Appointments - Stripe Checkout",
      description:
        "A four-role pet care platform combining e-commerce, vet bookings, Stripe payments, admin analytics, and a RAG-powered pet assistant built with LangChain, pgvector, Hugging Face embeddings, and Gemini.",
      tags: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "TanStack Query",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma ORM",
        "JWT Authentication",
        "Stripe",
        "Cloudinary",
        "LangChain",
        "Gemini",
        "pgvector",
      ],
      visualClass: "pets-gradient",
      image: petsVetaPreview,
      imageAlt: "Pets Veta homepage preview",
      featured: true,
    },
    {
      title: "Lead Scraper",
      initials: "LS",
      meta: "B2B lead discovery platform",
      subtitle: "Search - Verify - Export",
      description:
        "A TypeScript-powered lead discovery dashboard for finding targeted business prospects, filtering company and contact data, tracking scraping jobs, verifying email availability, and organizing export-ready lead lists.",
      tags: [
        "TypeScript",
        "React.js",
        "REST APIs",
        "Data Extraction",
        "Advanced Filters",
        "Email Verification",
        "CSV Export",
        "Dashboard Analytics",
      ],
      visualClass: "lead-scraper-gradient",
      image: leadScraperPreview,
      imageAlt: "Lead Scraper prospect discovery dashboard preview",
    },
    {
      title: "Med Edge",
      initials: "ME",
      meta: "Hospital management system",
      subtitle: "Patients - Appointments - Clinical Operations",
      description:
        "A centralized hospital management platform for coordinating patients, doctors, appointments, rooms, billing, pharmacy workflows, and clinical records through role-focused dashboards and real-time operational insights.",
      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "JWT Authentication",
        "Role-based Access",
        "Dashboard Analytics",
      ],
      visualClass: "med-edge-gradient",
      image: medEdgePreview,
      imageAlt: "Med Edge hospital management dashboard preview",
    },
    {
      title: "Instagram Clone",
      initials: "IC",
      meta: "Social media app",
      subtitle: "Social - Realtime",
      description:
        "A full-stack social platform with secure JWT authentication, password hashing, post creation, likes, comments, follow flows, realtime Socket.io notifications, and Cloudinary media uploads through Multer.",
      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "Bcrypt",
        "Socket.io",
        "Multer",
        "Cloudinary",
      ],
      visualClass: "social-gradient",
      image: pearlyxPreview,
      imageAlt: "PearlyX Instagram clone dashboard preview",
      repoUrl: "https://github.com/Mujtabawebdev/Instagram-Clone",
    },
    {
      title: "Student & Teacher Management",
      initials: "ST",
      meta: "Academic management",
      subtitle: "Records - Alerts",
      description:
        "A role-focused academic portal for managing students, teachers, and subjects with secure login, Bcrypt password hashing, centralized records, Nodemailer alerts, and realtime Socket.io updates.",
      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "Bcrypt",
        "Nodemailer",
        "Socket.io",
      ],
      visualClass: "academy-gradient",
      image: studentTeacherPreview,
      imageAlt: "Student Teacher Portal dashboard preview",
    },
  ],
  skills: [
    {
      title: "Frontend",
      items: [
        { name: "HTML5", level: 88 },
        { name: "CSS3", level: 86 },
        { name: "React.js", level: 88 },
        { name: "Next.js", level: 80 },
        { name: "TypeScript", level: 78 },
        { name: "JavaScript", level: 88 },
        { name: "Tailwind CSS", level: 86 },
        { name: "Redux Toolkit", level: 74 },
        { name: "TanStack Query", level: 72 },
        { name: "React Router", level: 82 },
        { name: "Bootstrap", level: 80 },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", level: 86 },
        { name: "Express.js", level: 86 },
        { name: "REST APIs", level: 88 },
        { name: "JWT", level: 82 },
        { name: "Bcrypt", level: 82 },
        { name: "Multer", level: 78 },
        { name: "Nodemailer", level: 76 },
        { name: "Socket.io", level: 72 },
        { name: "MongoDB", level: 84 },
        { name: "Mongoose", level: 82 },
        { name: "PostgreSQL", level: 80 },
        { name: "Prisma ORM", level: 80 },
        { name: "Redis", level: 68 },
        { name: "MySQL", level: 72 },
      ],
    },
    {
      title: "AI / LLM",
      items: [
        { name: "RAG", level: 78 },
        { name: "LangChain", level: 76 },
        { name: "Google Gemini", level: 76 },
        { name: "Hugging Face", level: 72 },
        { name: "Vector Embeddings", level: 74 },
        { name: "Semantic Search", level: 74 },
        { name: "pgvector", level: 72 },
        { name: "Prompt Engineering", level: 80 },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", level: 86 },
        { name: "GitHub", level: 86 },
        { name: "Postman", level: 84 },
        { name: "VS Code", level: 90 },
        { name: "Axios", level: 84 },
        { name: "Cloudinary", level: 78 },
        { name: "Socket.io", level: 72 },
        { name: "pgAdmin", level: 74 },
        { name: "MongoDB Compass", level: 78 },
        { name: "ChatGPT", level: 86 },
        { name: "Claude", level: 76 },
        { name: "GitHub Copilot", level: 80 },
        { name: "Cursor", level: 82 },
        { name: "Docker", level: 72 },
        { name: "CI/CD", level: 74 },
        { name: "Vercel", level: 82 },
      ],
    },
  ],
  experience: [
    {
      period: "Aug 2026 - Present",
      role: "Full Stack Developer",
      company: "Arzen Inc.",
      description:
        "Develop and maintain client-facing applications with React, Next.js, Node.js, and Express. Translate requirements into production features, integrate authentication and third-party services, and collaborate with clients and senior engineers through reviews and scheduled releases.",
    },
    {
      period: "Aug 2025 - Aug 2026",
      role: "Full Stack Developer Intern",
      company: "Seebiz Pvt Ltd",
      description:
        "Built and tested production-grade REST APIs across 3+ projects, delivered responsive React interfaces, implemented JWT authentication, and optimized MongoDB and PostgreSQL schemas. Also explored RAG, LangChain, and prompt engineering for context-aware features.",
    },
    {
      period: "Aug 2023 - Sep 2024",
      role: "Junior Frontend Developer",
      company: "Techwizard",
      description:
        "Developed the frontend for an e-commerce website using HTML, CSS, JavaScript, and React, focusing on responsive layouts, product listing interfaces, clean UI structure, and smooth user navigation across desktop and mobile screens.",
    },
  ],
  education: [
    {
      degree: "Post ADP - Computer Science",
      period: "2025 - 2027",
      institution: "University of Education",
      meta: "In progress",
      description:
        "Relevant Courses: Web Development, Advanced Database Systems, Operating Systems, OOP Analysis and Design.",
    },
    {
      degree: "ADP - Computer Science",
      period: "2023 - 2025",
      institution: "University of the Punjab",
      meta: "",
      description:
        "Relevant Courses: Programming Fundamentals, OOP, Data Structures & Algorithms.",
    },
  ],
  certifications: [
    {
      title: "Web Development Certification",
      issuer: "Bano Qabil, Lahore",
      year: "2025",
    },
    {
      title: "Web Development Trainee",
      issuer: "Qalam Training Program",
      year: "Professional training",
    },
  ],
  contact: {
    title: "Let's build something useful and production-ready.",
    description:
      "Available for full-stack work where clean UI, strong API design, and reliable delivery matter.",
    actions: [
      {
        label: "Email Me",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=mujtabanaveed13@gmail.com&su=Portfolio%20Inquiry",
        variant: "primary",
        external: true,
      },
      { label: "Call", href: "tel:+923170428715", variant: "ghost" },
      { label: "GitHub", href: "https://github.com/Mujtabawebdev", variant: "ghost", external: true },
      { label: "LinkedIn", href: "https://linkedin.com/in/muhammad-mujtaba-dev", variant: "ghost", external: true },
    ],
  },
};

