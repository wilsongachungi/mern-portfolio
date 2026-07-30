import express from "express";
import { createMessage, getMessages } from "../controllers/messageController.js";
import { replyToMessage } from "../controllers/replyController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", createMessage);
router.get("/", protect, getMessages);
router.post("/:id/reply", protect, replyToMessage);

export default router;