const API_URL = "http://localhost:5000/api";

export const getProjects = async () => {
  const response = await fetch(`${API_URL}/projects`);
  if (!response.ok) throw new Error("Failed to fetch projects");
  return response.json();
};

export const sendMessage = async (data) => {
  const response = await fetch(`${API_URL}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to send message");
  return response.json();
};

export const login = async (credentials) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) throw new Error("Invalid credentials");
  return response.json();
};

export const getMessages = async (token) => {
  const response = await fetch(`${API_URL}/messages`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error("Failed to fetch messages");
  return response.json();
};

export const replyToMessage = async (id, replyText, token) => {
  const response = await fetch(`${API_URL}/messages/${id}/reply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ replyText }),
  });
  if (!response.ok) throw new Error("Failed to send reply");
  return response.json();
};