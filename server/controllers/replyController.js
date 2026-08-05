import { Resend } from "resend";
import Message from "../models/Message.js";

export const replyToMessage = async (req, res) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { id } = req.params;
    const { replyText } = req.body;

    const originalMessage = await Message.findById(id);
    if (!originalMessage) {
      return res.status(404).json({ error: "Message not found" });
    }

    await resend.emails.send({
      from: "Wilson Gachungi <onboarding@resend.dev>",
      to: originalMessage.email,
      subject: "Re: your message to Wilson Gachungi",
      text: replyText,
    });

    originalMessage.replied = true;
    originalMessage.replies.push({ text: replyText });
    await originalMessage.save();

    res.json({ success: true, message: originalMessage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};