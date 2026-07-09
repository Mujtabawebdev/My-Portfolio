import petsVetaPreview from "../../../assets/portfolio/pets-veta-preview.svg";
import pearlyxPreview from "../../../assets/portfolio/pearlyx-preview.svg";
import studentTeacherPreview from "../../../assets/portfolio/student-teacher-preview.svg";

export const portfolioData = {
  navItems: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Full Stack Developer",
    title: "Muhammad Mujtaba",
    subtitle: "MERN & PERN Stack Developer",
    description:
      "I craft modern, high-performance web applications with clean code, secure APIs, and exceptional user experience. Specialized in building scalable solutions with React.js, Node.js, Express.js, MongoDB, PostgreSQL, and Prisma.",
    availability: "Available for Associate Software Engineer, full-stack roles, and freelance projects.",
    primaryAction: { label: "View Projects", href: "#projects" },
    secondaryAction: { label: "Download CV", href: "/docs/Mujtaba_Cv.pdf" },
  },
  stats: [
    { value: "2+", label: "Years of hands-on development experience" },
    { value: "4", label: "User workflows in Pets Veta" },
    { value: "10+", label: "Core technologies" },
    { value: "AI", label: "Assisted product development" },
  ],
  services: [
    {
      icon: "UI",
      title: "Frontend Development",
      description:
        "Responsive React apps with readable layouts, reusable components, routing, forms, and polished interaction states.",
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
        "Socket.io notifications, Cloudinary media uploads, Nodemailer alerts, and AI-assisted features where they help the product.",
    },
  ],
  projects: [
    {
      title: "Pets Veta",
      initials: "PV",
      meta: "Full-stack pet care platform",
      subtitle: "Marketplace - Appointments - Stripe Checkout",
      description:
        "Pet care marketplace with e-commerce, vet appointment scheduling, secure Stripe checkout for marketplace orders and appointment bookings, admin analytics, role-based access, PostgreSQL, Prisma, JWT, and Cloudinary uploads.",
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
      ],
      visualClass: "pets-gradient",
      image: petsVetaPreview,
      imageAlt: "Pets Veta homepage preview",
      featured: true,
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
      ],
    },
  ],
  experience: [
    {
      period: "Aug 2025 - Present",
      role: "Web Development Intern",
      company: "Qalam Training Program",
      description:
        "Built responsive static and React interfaces, developed secure REST APIs with Node.js and Express.js, implemented CRUD workflows, and managed MongoDB/PostgreSQL databases with Prisma ORM. Worked on AI chatbot features with RAG, authentication flows, API integrations, Git/GitHub collaboration, and CI/CD-based deployment workflows.",
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
      meta: "CGPA: 3.28 / 4.00",
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

