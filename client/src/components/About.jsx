function About() {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "Laravel",
    "PHP",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Supabase",
    "M-Pesa Integration",
    "WhatsApp Business API",
    "System Design",
  ];

  return (
    <section id="about" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-accent mb-4">// about</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text mb-6">
            I build across the stack, not just inside one framework.
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-4">
            My work spans management systems for real businesses — stock and
            sales tracking, order workflows, staff permissions — alongside
            social platforms, organization websites, and integrations that
            connect apps to money and messaging: M-Pesa, bank APIs, and
            WhatsApp Business.
          </p>
          <p className="text-muted text-lg leading-relaxed mb-10">
            I work comfortably across MERN and Laravel/PHP, choosing whichever
            stack fits the problem rather than forcing every project into one
            framework.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-surface border border-border text-muted font-mono text-xs px-3 py-1.5 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;