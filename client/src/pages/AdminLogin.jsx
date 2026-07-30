import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

function AdminLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await login(formData);
      localStorage.setItem("adminToken", data.token);
      navigate("/admin");
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-surface border border-border rounded-lg p-8">
        <p className="font-mono text-sm text-accent mb-2">$ admin --login</p>
        <h1 className="font-display font-bold text-2xl mb-6">Admin Login</h1>

        <div className="mb-4">
          <label className="block font-mono text-xs text-muted uppercase tracking-widest mb-2">Email</label>
          <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors" />
        </div>

        <div className="mb-6">
          <label className="block font-mono text-xs text-muted uppercase tracking-widest mb-2">Password</label>
          <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors" />
        </div>

        {error && <p className="font-mono text-sm text-red-400 mb-4">{error}</p>}

        <button type="submit" className="w-full bg-accent text-bg font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
          Log In
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;