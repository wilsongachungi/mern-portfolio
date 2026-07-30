import { useState } from "react";
import { sendMessage } from "../services/api";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendMessage(formData);
      setStatus("sent");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <div className="mb-5">
        <label className="block font-mono text-xs text-muted uppercase tracking-widest mb-2">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors" />
      </div>

      <div className="mb-5">
        <label className="block font-mono text-xs text-muted uppercase tracking-widest mb-2">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors" />
      </div>

      <div className="mb-5">
        <label className="block font-mono text-xs text-muted uppercase tracking-widest mb-2">Phone (optional)</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors" />
      </div>

      <div className="mb-6">
        <label className="block font-mono text-xs text-muted uppercase tracking-widest mb-2">Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors resize-none" />
      </div>

      <button type="submit" disabled={status === "sending"} className="bg-accent text-bg font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50">
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "sent" && <p className="font-mono text-sm text-accent mt-4">Message sent. I'll get back to you soon.</p>}
      {status === "error" && <p className="font-mono text-sm text-red-400 mt-4">Something went wrong. Please try again.</p>}
    </form>
  );
}

export default ContactForm;