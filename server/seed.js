import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.js";

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

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected for seeding");

    await Project.deleteMany();
    await Project.insertMany(sampleProjects);

    console.log("Sample projects inserted");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedData();