function ProjectCard({ project }) {
  return (
    <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-colors">
      {project.featured && (
        <span className="inline-block font-mono text-xs text-accent border border-accent/40 rounded-full px-2 py-0.5 mb-4">
          Featured
        </span>
      )}
      <h3 className="font-display font-bold text-xl text-text mb-2">{project.title}</h3>
      <p className="text-muted mb-4 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span key={tech} className="font-mono text-xs text-muted bg-bg border border-border px-2.5 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 font-mono text-sm">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub →</a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Live Demo →</a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;