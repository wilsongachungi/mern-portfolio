import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.js";
import Course from "./models/Course.js";

dotenv.config();

const sampleProjects = [
  {
    title: "MojaStock",
    description:
      "A stock and sales management app for pubs and liquor stores, with owner/staff roles, daily stock reconciliation, and a per-sale ordering system.",
    techStack: ["React", "Supabase", "PostgreSQL", "TypeScript"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
  },
  {
    title: "Yah — WhatsApp OTP Integration",
    description:
      "Implemented WhatsApp Business Cloud API authentication for a social platform, including OTP generation, hashed storage, rate limiting, and delivery-status webhooks.",
    techStack: ["Supabase Edge Functions", "Deno", "WhatsApp Cloud API"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
  },
  {
    title: "Yah",
    description:
      "A social platform for connecting, live streaming, shopping, job discovery, and sending gifts across countries — with an integrated matching and community system.",
    techStack: [],
    githubUrl: "",
    liveUrl: "https://yah.social",
    featured: true,
  },
  {
    title: "AI-Powered School Management System",
    description:
      "A school management system with AI-assisted features for administration, records, and academic tracking — built to simplify day-to-day school operations.",
    techStack: [],
    githubUrl: "",
    liveUrl: "",
    featured: false,
  },
  {
    title: "Airline.ke",
    description:
      "A booking platform for flight tickets, hotels, and holiday packages — bringing travel, stays, and getaways together in one place.",
    techStack: [],
    githubUrl: "",
    liveUrl: "https://airline.ke",
    featured: false,
  },
  {
    title: "Zion Valley CBO",
    description:
      "An organization website for Zion Valley CBO, featuring a portfolio of their work alongside an integrated donation system to support their community initiatives.",
    techStack: [],
    githubUrl: "",
    liveUrl: "https://zionvalleycbo.org",
    featured: false,
  },
  {
    title: "Ridezfiti",
    description:
      "An online showroom and shop for vehicles, built to showcase listings and support browsing and purchasing in one platform.",
    techStack: [],
    githubUrl: "",
    liveUrl: "https://ridezfiti.com",
    featured: false,
  },
  {
    title: "This Portfolio",
    description:
      "The very site you're looking at — a full-stack MERN portfolio built from scratch, covering backend API design, MongoDB data modeling, and a custom terminal-inspired UI.",
    techStack: [],
    githubUrl: "",
    liveUrl: "",
    featured: false,
  },
];

const sampleCourses = [
  {
    title: "JavaScript Foundations",
    description:
      "Master core JavaScript before touching any framework — variables, functions, DOM manipulation, async/await, and how the browser actually works. The foundation every framework assumes you already have.",
    price: 8000,
    currency: "KES",
    duration: "3 weeks",
    level: "Beginner",
    topics: ["JavaScript", "DOM", "ES6+", "Async/Await"],
    audience: ["Junior", "College & University", "Working Class"],
    deliveryMode: ["Online", "Physical"],
    category: "Foundations",
  },
  {
    title: "Version Control with Git & GitHub",
    description:
      "Learn to track changes, collaborate without overwriting each other's work, and host your projects properly — the skill every employer assumes you already have but almost no one teaches from scratch.",
    price: 4000,
    currency: "KES",
    duration: "1 week",
    level: "Beginner",
    topics: ["Git", "GitHub", "Branching", "Pull Requests"],
    audience: ["Junior", "Senior", "College & University", "Working Class"],
    deliveryMode: ["Online", "Physical"],
    category: "Foundations",
  },
  {
    title: "Full-Stack Development with MERN",
    description:
      "Build real, production-ready applications from scratch — MongoDB, Express, React, and Node.js. From your first API endpoint to a deployed, working product, the same path used to build every project in my portfolio.",
    price: 20000,
    currency: "KES",
    duration: "8 weeks",
    level: "Intermediate",
    topics: ["React", "Node.js", "Express", "MongoDB"],
    audience: ["Senior", "College & University", "Working Class"],
    deliveryMode: ["Online", "Physical"],
    category: "Full Program",
  },
  {
    title: "Backend Development with PHP & Laravel",
    description:
      "A practical, project-driven path into PHP and Laravel — routing, Eloquent ORM, authentication, and building real APIs. For developers who want to work confidently across both JavaScript and PHP ecosystems.",
    price: 18000,
    currency: "KES",
    duration: "7 weeks",
    level: "Intermediate",
    topics: ["PHP", "Laravel", "MySQL", "REST APIs"],
    audience: ["Senior", "College & University", "Working Class"],
    deliveryMode: ["Online", "Physical"],
    category: "Backend",
  },
  {
    title: "Frontend Development with Vue.js",
    description:
      "Component-based frontend development with Vue — reactivity, the composition API, routing, and state management. A strong alternative path into modern frontend work for those who prefer Vue's approach over React.",
    price: 14000,
    currency: "KES",
    duration: "5 weeks",
    level: "Intermediate",
    topics: ["Vue.js", "Composition API", "Vue Router", "Pinia"],
    audience: ["Senior", "College & University", "Working Class"],
    deliveryMode: ["Online", "Physical"],
    category: "Frontend",
  },
  {
    title: "Vibecoding: Building with AI Tools",
    description:
      "Learn to build real, working software using AI-assisted tools like Lovable, Claude, and Cursor — not as a shortcut around learning to code, but as a genuine modern workflow. How to prompt effectively, debug AI-generated code, and know when to take the wheel yourself.",
    price: 10000,
    currency: "KES",
    duration: "3 weeks",
    level: "Beginner",
    topics: ["AI-Assisted Development", "Prompt Engineering", "Debugging", "Deployment"],
    audience: ["Junior", "Senior", "College & University", "Working Class"],
    deliveryMode: ["Online", "Physical"],
    category: "Foundations",
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected for seeding");

    await Project.deleteMany();
    await Project.insertMany(sampleProjects);
    console.log("Sample projects inserted");

    await Course.deleteMany();
    await Course.insertMany(sampleCourses);
    console.log("Sample courses inserted");

    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedData();