import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, default: "KES" },
    duration: { type: String },
    level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], default: "Beginner" },
    topics: { type: [String], default: [] },
    audience: { type: [String], default: [] },
    deliveryMode: { type: [String], default: [] },
    category: { type: String, enum: ["Foundations", "Frontend", "Backend", "Full Program"], default: "Foundations" },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;