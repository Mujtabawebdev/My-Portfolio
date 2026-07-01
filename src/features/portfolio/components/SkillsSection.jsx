import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  SiAxios,
  SiBootstrap,
  SiClaude,
  SiCloudinary,
  SiCursor,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiOpenaigym,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiRedis,
  SiRedux,
  SiSocketdotio,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FiLock, FiMail, FiTool, FiUploadCloud } from "react-icons/fi";

const filters = ["All", "Frontend", "Backend", "Database", "Tools"];
const databaseSkills = new Set(["MongoDB", "Mongoose", "PostgreSQL", "Prisma ORM", "Redis"]);

const iconMap = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  "React.js": SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "Redux Toolkit": SiRedux,
  "TanStack Query": SiReactquery,
  "React Router": SiReactrouter,
  Bootstrap: SiBootstrap,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "REST APIs": SiSwagger,
  JWT: SiJsonwebtokens,
  Bcrypt: FiLock,
  Multer: FiUploadCloud,
  Nodemailer: FiMail,
  "Socket.io": SiSocketdotio,
  MongoDB: SiMongodb,
  Mongoose: SiMongoose,
  PostgreSQL: SiPostgresql,
  "Prisma ORM": SiPrisma,
  Redis: SiRedis,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  "VS Code": VscVscode,
  Axios: SiAxios,
  Cloudinary: SiCloudinary,
  pgAdmin: SiPostgresql,
  "MongoDB Compass": SiMongodb,
  ChatGPT: SiOpenaigym,
  Claude: SiClaude,
  "GitHub Copilot": SiGithubcopilot,
  Cursor: SiCursor,
};

const colorMap = {
  HTML5: "#e34f26",
  CSS3: "#663399",
  "React.js": "#61dafb",
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  "Tailwind CSS": "#06b6d4",
  "Redux Toolkit": "#764abc",
  "TanStack Query": "#ff4154",
  "React Router": "#ca4245",
  Bootstrap: "#7952b3",
  "Node.js": "#5fa04e",
  "Express.js": "#f7f7fb",
  "REST APIs": "#85ea2d",
  JWT: "#d63aff",
  Bcrypt: "#f7f7fb",
  Multer: "#4f8cff",
  Nodemailer: "#22c55e",
  "Socket.io": "#f7f7fb",
  MongoDB: "#47a248",
  Mongoose: "#880000",
  PostgreSQL: "#4169e1",
  "Prisma ORM": "#ffffff",
  Redis: "#ff4438",
  Git: "#f05032",
  GitHub: "#ffffff",
  Postman: "#ff6c37",
  "VS Code": "#007acc",
  Axios: "#5a29e4",
  Cloudinary: "#3448c5",
  pgAdmin: "#4169e1",
  "MongoDB Compass": "#47a248",
  ChatGPT: "#10a37f",
  Claude: "#d97757",
  "GitHub Copilot": "#ffffff",
  Cursor: "#ffffff",
};

export function SkillsSection({ skills }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const skillGroups = useMemo(() => {
    const frontend = skills.find((group) => group.title === "Frontend")?.items || [];
    const backendItems = skills.find((group) => group.title === "Backend")?.items || [];
    const tools = skills.find((group) => group.title === "Tools")?.items || [];
    const backend = backendItems.filter((skill) => !databaseSkills.has(skill.name));
    const database = backendItems.filter((skill) => databaseSkills.has(skill.name));

    return {
      Frontend: frontend.map((skill) => ({ ...skill, category: "Frontend" })),
      Backend: backend.map((skill) => ({ ...skill, category: "Backend" })),
      Database: database.map((skill) => ({ ...skill, category: "Database" })),
      Tools: tools.map((skill) => ({ ...skill, category: "Tools" })),
    };
  }, [skills]);

  const visibleSkills =
    activeFilter === "All"
      ? [...skillGroups.Frontend, ...skillGroups.Backend, ...skillGroups.Database, ...skillGroups.Tools]
      : skillGroups[activeFilter];

  return (
    <section className="section-pad skills-section" id="skills">
      <div className="skills-bg" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="skills-heading">
        <p className="eyebrow">Tech Stack</p>
        <h2>Skills & Technologies</h2>
      </div>

      <div className="skill-filters" aria-label="Filter skills by category">
        {filters.map((filter) => (
          <button
            className={`skill-filter${activeFilter === filter ? " active" : ""}`}
            type="button"
            key={filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div className="tech-grid" layout>
        {visibleSkills.map((skill, index) => {
          const Icon = iconMap[skill.name] || FiTool;

          return (
            <motion.article
              className="tech-card"
              key={`${skill.category}-${skill.name}`}
              layout
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.34, delay: Math.min(index * 0.018, 0.18) }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{ "--skill-color": colorMap[skill.name] || "var(--primary)" }}
            >
              <Icon aria-hidden="true" />
              <span>{skill.name}</span>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
