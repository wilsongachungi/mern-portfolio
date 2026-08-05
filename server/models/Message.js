import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    message: { type: String, required: true },
    replied: { type: Boolean, default: false },
    replies: [
      {
        text: { type: String, required: true },
        sentAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;