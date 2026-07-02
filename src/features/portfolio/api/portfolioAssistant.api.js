import { portfolioData } from "../data/portfolio.data";

const topicMap = [
  {
    keys: ["contact", "email", "phone", "call", "linkedin", "github", "hire", "available", "availability", "reach"],
    answer: () =>
      `${portfolioData.hero.availability} Email: mujtabanaveed13@gmail.com. Phone: +92 317 0428715. GitHub: https://github.com/Mujtabawebdev. LinkedIn: https://linkedin.com/in/muhammad-mujtaba-dev.`,
  },
  {
    keys: [
      "service",
      "services",
      "website",
      "websites",
      "offer",
      "provide",
      "create",
      "develop",
      "business site",
      "portfolio site",
      "dashboard",
      "dashboards",
      "api",
      "apis",
      "rest",
      "authentication",
      "auth",
      "upload",
      "uploads",
      "responsive",
      "ecommerce",
      "fullstack",
      "full stack",
    ],
    answer: () =>
      `Mujtaba is a MERN and PERN stack developer. He can build responsive websites, React frontend interfaces, full-stack web apps, admin dashboards, REST APIs, authentication systems, database workflows, file upload features, realtime features, and production-ready portfolio or business websites. His services include ${portfolioData.services
        .map((service) => `${service.title}: ${service.description}`)
        .join(" ")}`,
  },
  {
    keys: ["project", "projects", "work", "portfolio", "built", "apps", "app", "application", "case study"],
    answer: () =>
      `Mujtaba's main projects are ${portfolioData.projects
        .map((project) => `${project.title}: ${project.description}`)
        .join(" ")}`,
  },
  {
    keys: ["pets", "veta", "pet", "doctor", "vet", "marketplace", "booking", "appointment"],
    answer: () => {
      const project = portfolioData.projects.find((item) => item.title === "Pets Veta");
      return `${project.title} is ${project.description} Stack: ${project.tags.join(", ")}.`;
    },
  },
  {
    keys: ["instagram", "social", "clone", "realtime", "socket", "notification", "notifications"],
    answer: () => {
      const project = portfolioData.projects.find((item) => item.title === "Instagram Clone");
      return `${project.title} is ${project.description} Stack: ${project.tags.join(", ")}.${project.repoUrl ? ` Repo: ${project.repoUrl}.` : ""}`;
    },
  },
  {
    keys: ["student", "teacher", "school", "academic", "management", "portal"],
    answer: () => {
      const project = portfolioData.projects.find((item) => item.title === "Student & Teacher Management");
      return `${project.title} is ${project.description} Stack: ${project.tags.join(", ")}.`;
    },
  },
  {
    keys: ["skill", "skills", "stack", "technology", "technologies", "frontend", "backend", "database", "mern", "pern", "tool", "tools"],
    answer: () => {
      const frontend = portfolioData.skills.find((group) => group.title === "Frontend");
      const backend = portfolioData.skills.find((group) => group.title === "Backend");
      const tools = portfolioData.skills.find((group) => group.title === "Tools");

      return [
        "Mujtaba works with both MERN and PERN stack.",
        "MERN means MongoDB, Express.js, React.js, and Node.js.",
        "PERN means PostgreSQL, Express.js, React.js, and Node.js.",
        `Frontend technologies: ${frontend.items.map((item) => item.name).join(", ")}.`,
        `Backend technologies: ${backend.items.map((item) => item.name).join(", ")}.`,
        "Databases: MongoDB, PostgreSQL, Mongoose, Prisma ORM, and Redis basics.",
        `Tools and integrations: ${tools.items.map((item) => item.name).join(", ")}.`,
      ].join(" ");
    },
  },
  {
    keys: ["experience", "job", "intern", "company", "qalam", "techwizard", "career", "role"],
    answer: () =>
      portfolioData.experience
        .map((item) => `${item.role} at ${item.company} (${item.period}): ${item.description}`)
        .join(" "),
  },
  {
    keys: ["education", "degree", "university", "cgpa", "study", "qualification", "courses"],
    answer: () =>
      portfolioData.education
        .map((item) => `${item.degree}, ${item.institution} (${item.period})${item.meta ? `, ${item.meta}` : ""}. ${item.description}`)
        .join(" "),
  },
];

const defaultSuggestions = ["What services do you provide?", "Tell me about Pets Veta", "How can I contact him?"];

const portfolioRelatedKeywords = [
  "portfolio",
  "work",
  "project",
  "service",
  "website",
  "web",
  "frontend",
  "backend",
  "stack",
  "mern",
  "pern",
  "react",
  "node",
  "express",
  "database",
  "mongodb",
  "postgresql",
  "prisma",
  "api",
  "dashboard",
  "auth",
  "upload",
  "responsive",
  "experience",
  "education",
  "contact",
  "hire",
  "developer",
  "mujtaba",
];

function cleanMessage(message) {
  return String(message || "")
    .toLowerCase()
    .replace(/[^a-z0-9+#.\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getWords(message) {
  return message.split(" ").filter(Boolean);
}

function getEditDistance(left, right) {
  if (Math.abs(left.length - right.length) > 2) {
    return 3;
  }

  const previous = Array.from({ length: right.length + 1 }, (_, index) => index);
  const current = Array(right.length + 1).fill(0);

  for (let leftIndex = 1; leftIndex <= left.length; leftIndex += 1) {
    current[0] = leftIndex;

    for (let rightIndex = 1; rightIndex <= right.length; rightIndex += 1) {
      const cost = left[leftIndex - 1] === right[rightIndex - 1] ? 0 : 1;
      current[rightIndex] = Math.min(
        current[rightIndex - 1] + 1,
        previous[rightIndex] + 1,
        previous[rightIndex - 1] + cost,
      );
    }

    previous.splice(0, previous.length, ...current);
  }

  return previous[right.length];
}

function isSimilarWord(word, keyword) {
  if (keyword.includes(" ")) {
    return false;
  }

  if (word === keyword || word.includes(keyword) || keyword.includes(word)) {
    return word.length >= 3 || keyword.length >= 3;
  }

  if (word.length < 4 || keyword.length < 4) {
    return false;
  }

  return getEditDistance(word, keyword) <= (keyword.length > 6 ? 2 : 1);
}

function hasSimilarKeyword(message, keyword) {
  if (keyword.includes(" ")) {
    return message.includes(keyword);
  }

  return getWords(message).some((word) => isSimilarWord(word, keyword));
}

function getMatchedTopics(message) {
  return topicMap.filter((topic) => topic.keys.some((key) => hasSimilarKeyword(message, key)));
}

function isPortfolioRelated(message) {
  return portfolioRelatedKeywords.some((keyword) => hasSimilarKeyword(message, keyword));
}

function getPortfolioRelatedReply() {
  const featuredProjects = portfolioData.projects.map((project) => project.title).join(", ");

  return `${portfolioData.hero.title} is a ${portfolioData.hero.subtitle}. He builds portfolio and business websites, React frontends, MERN/PERN full-stack apps, dashboards, REST APIs, authentication, uploads, database workflows, and realtime features. His main projects are ${featuredProjects}. Ask about services, stack, projects, experience, education, or contact details for a more specific answer.`;
}

export async function askPortfolioAssistant(message) {
  const normalizedMessage = cleanMessage(message);

  if (!normalizedMessage) {
    return {
      reply: "Ask me about Mujtaba's projects, skills, experience, education, or contact details.",
      suggestions: defaultSuggestions,
    };
  }

  const matches = getMatchedTopics(normalizedMessage);

  if (matches.length > 0) {
    return {
      reply: matches
        .slice(0, 2)
        .map((match) => match.answer())
        .join(" "),
      suggestions: ["What websites can you build?", "Which stack does he use?", "How can I contact him?"],
    };
  }

  if (isPortfolioRelated(normalizedMessage)) {
    return {
      reply: getPortfolioRelatedReply(),
      suggestions: ["What services do you provide?", "Which stack does he use?", "Tell me about his projects"],
    };
  }

  return {
    reply: "I can answer questions about Mujtaba's portfolio, services, projects, stack, experience, education, and contact details. Please ask something related to his work.",
    suggestions: defaultSuggestions,
  };
}
