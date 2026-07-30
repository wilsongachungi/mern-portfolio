import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMessages, replyToMessage } from "../services/api";

function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [replyText, setReplyText] = useState({});
  const [replyStatus, setReplyStatus] = useState({});
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }
    getMessages(token)
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
      });
  }, [navigate, token]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const handleReply = async (id) => {
    setReplyStatus({ ...replyStatus, [id]: "sending" });
    try {
      await replyToMessage(id, replyText[id], token);
      setReplyStatus({ ...replyStatus, [id]: "sent" });
      setMessages(messages.map((m) => (m._id === id ? { ...m, replied: true } : m)));
    } catch (err) {
      setReplyStatus({ ...replyStatus, [id]: "error" });
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="font-mono text-sm text-accent mb-2">$ admin --dashboard</p>
            <h1 className="font-display font-bold text-3xl">Messages</h1>
          </div>
          <button onClick={handleLogout} className="font-mono text-xs text-muted hover:text-accent transition-colors border border-border rounded-lg px-4 py-2">
            Log out
          </button>
        </div>

        {loading ? (
          <p className="font-mono text-sm text-muted">loading...</p>
        ) : messages.length === 0 ? (
          <p className="font-mono text-sm text-muted">No messages yet.</p>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg._id} className="bg-surface border border-border rounded-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-display font-bold text-lg">{msg.name}</p>
                  <div className="flex items-center gap-3">
                    {msg.replied && <span className="font-mono text-xs text-accent">✓ replied</span>}
                    <p className="font-mono text-xs text-muted">{new Date(msg.createdAt).toLocaleString()}</p>
                  </div>
                </div>
                <p className="font-mono text-xs text-accent mb-1">{msg.email}</p>
                {msg.phone && <p className="font-mono text-xs text-muted mb-3">{msg.phone}</p>}
                <p className="text-muted leading-relaxed mb-4">{msg.message}</p>

                <textarea
                  placeholder="Type your reply..."
                  value={replyText[msg._id] || ""}
                  onChange={(e) => setReplyText({ ...replyText, [msg._id]: e.target.value })}
                  rows={3}
                  className="w-full bg-bg border border-border rounded-lg px-3 py-2 text-sm text-text mb-2 focus:outline-none focus:border-accent transition-colors resize-none"
                />
                <button
                  onClick={() => handleReply(msg._id)}
                  disabled={replyStatus[msg._id] === "sending" || !replyText[msg._id]}
                  className="bg-accent text-bg font-mono text-xs font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {replyStatus[msg._id] === "sending" ? "Sending..." : "Send Reply"}
                </button>
                {replyStatus[msg._id] === "sent" && <span className="font-mono text-xs text-accent ml-3">Sent ✓</span>}
                {replyStatus[msg._id] === "error" && <span className="font-mono text-xs text-red-400 ml-3">Failed</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;