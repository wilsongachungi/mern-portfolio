import { useEffect, useState } from "react";
import { getProjects } from "../services/api";
import ProjectCard from "./ProjectCard";

function ProjectGrid() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="font-mono text-sm text-muted">loading projects...</p>;
  }

  if (error) {
    return <p className="font-mono text-sm text-red-400">error: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}

export default ProjectGrid;