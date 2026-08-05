import Course from "../models/Course.js";

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({ isPublished: true }).sort({ createdAt: -1 });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};