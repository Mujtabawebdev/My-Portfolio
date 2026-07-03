import { portfolioData } from "../data/portfolio.data";

const topicMap = [
  {
    keys: ["contact", "email", "phone", "call", "linkedin", "github", "hire", "available", "availability", "reach"],
    answer: () =>
      `${portfolioData.hero.availability} Email: mujtabanaveed13@gmail.com. Phone: +92 317 0428715.`,
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
      "responsive",
      "ecommerce",
      "fullstack",
      "full stack",
    ],
    answer: () =>
      "I build scalable MERN/PERN full-stack web apps, business websites, dashboards, APIs, auth, uploads, and databases.",
  },
  {
    keys: ["project", "projects", "work", "portfolio", "built", "apps", "app", "application", "case study"],
    answer: () =>
      `Main projects: ${portfolioData.projects.map((project) => project.title).join(", ")}.`,
  },
  {
    keys: ["pets", "veta", "pet", "doctor", "vet", "marketplace", "booking", "appointment"],
    answer: () => {
      const project = portfolioData.projects.find((item) => item.title === "Pets Veta");
      return `${project.title}: ${project.description}`;
    },
  },
  {
    keys: ["instagram", "social", "clone", "realtime", "socket", "notification", "notifications"],
    answer: () => {
      const project = portfolioData.projects.find((item) => item.title === "Instagram Clone");
      return `${project.title}: ${project.description}`;
    },
  },
  {
    keys: ["student", "teacher", "school", "academic", "management", "portal"],
    answer: () => {
      const project = portfolioData.projects.find((item) => item.title === "Student & Teacher Management");
      return `${project.title}: ${project.description}`;
    },
  },
  {
    keys: ["database", "databases", "mongodb", "mongoose", "postgresql", "prisma", "redis"],
    answer: () => "MongoDB, Mongoose, PostgreSQL, Prisma ORM, Redis.",
  },
  {
    keys: ["rest api", "rest apis", "api", "apis", "routes", "controllers", "models"],
    answer: () =>
      "Yes, he can build REST APIs using Node.js and Express.js, including routes, controllers, models, authentication, and database integration.",
  },
  {
    keys: ["skill", "skills", "stack", "technology", "technologies", "frontend", "backend", "mern", "pern", "tool", "tools"],
    answer: () => {
      return "MERN/PERN full-stack web apps. Frontend: HTML5, CSS3, React.js, TypeScript, JavaScript, Tailwind CSS, Redux Toolkit, TanStack Query, React Router, Bootstrap. Backend: Node.js, Express.js, REST APIs, JWT, Bcrypt, Multer, Nodemailer, Socket.io, MongoDB, Mongoose, PostgreSQL, Prisma ORM, Redis.";
    },
  },
  {
    keys: ["experience", "job", "intern", "company", "qalam", "techwizard", "career", "role"],
    answer: () =>
      portfolioData.experience
        .map((item) => `${item.role} at ${item.company} (${item.period})`)
        .join(" "),
  },
  {
    keys: ["education", "degree", "university", "cgpa", "study", "qualification", "courses"],
    answer: () =>
      "Post ADP - Computer Science, University of Education, CGPA: 3.28 / 4.00. ADP - Computer Science, University of the Punjab.",
  },
];

const defaultSuggestions = ["What services do you provide?", "Tell me about Pets Veta", "How can I contact him?"];
const casualReplies = {
  hello: "Hi! Ask me about Mujtaba.",
  hi: "Hi! Ask me about Mujtaba.",
  hey: "Hey! Ask me about Mujtaba.",
  ok: "Okay.",
  okay: "Okay.",
  nice: "Nice!",
  good: "Good!",
  thanks: "You're welcome.",
  thank: "You're welcome.",
  bye: "Bye!",
  yes: "Yes.",
  no: "Okay.",
};

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

  if (word === keyword) {
    return true;
  }

  if (word.length >= 4 && keyword.length >= 4 && word.includes(keyword)) {
    return true;
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

function getCasualReply(message) {
  const words = getWords(message);

  if (words.length > 3) {
    return "";
  }

  const matchedWord = words.find((word) => casualReplies[word]);
  return matchedWord ? casualReplies[matchedWord] : "";
}

function getPortfolioRelatedReply() {
  const featuredProjects = portfolioData.projects.map((project) => project.title).join(", ");

  return `${portfolioData.hero.title} is a ${portfolioData.hero.subtitle}. Main projects: ${featuredProjects}. Ask about services, stack, contact, or experience.`;
}

function getPriorityReply(message) {
  if (message.includes("rest api") || message.includes("rest apis") || getWords(message).includes("apis")) {
    return "Yes, he can build REST APIs using Node.js and Express.js, including routes, controllers, models, authentication, and database integration.";
  }

  return "";
}

export async function askPortfolioAssistant(message) {
  const normalizedMessage = cleanMessage(message);

  if (!normalizedMessage) {
    return {
      reply: "Ask me about Mujtaba.",
      suggestions: defaultSuggestions,
    };
  }

  const casualReply = getCasualReply(normalizedMessage);

  if (casualReply) {
    return {
      reply: casualReply,
      suggestions: defaultSuggestions,
    };
  }

  const priorityReply = getPriorityReply(normalizedMessage);

  if (priorityReply) {
    return {
      reply: priorityReply,
      suggestions: ["Which stack does he use?", "What databases does he use?", "How can I contact him?"],
    };
  }

  const matches = getMatchedTopics(normalizedMessage);

  if (matches.length > 0) {
    return {
      reply: matches[0].answer(),
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
    reply: "Please ask something about Mujtaba's work.",
    suggestions: defaultSuggestions,
  };
}
