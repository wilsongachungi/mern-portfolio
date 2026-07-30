function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="/profile.jpeg" alt="Wilson Gachungi" className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-accent mb-8" />
          <p className="font-mono text-sm text-accent mb-4">$ who am i</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text leading-tight mb-6">
            Full-stack developer building the systems businesses run on.
          </h1>
          <p className="text-muted text-lg mb-8 max-w-md">
            I design and ship management systems, social platforms, and organization websites — with real integrations like M-Pesa, WhatsApp Business API, and Supabase. React · Node.js · Laravel · MongoDB.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-accent text-bg font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">View Projects</a>
            <a href="#contact" className="border border-border text-text px-6 py-3 rounded-lg hover:border-accent transition-colors">Get in Touch</a>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6 font-mono text-sm shadow-2xl">
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500/60"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/60"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/60"></span>
          </div>
          <p className="text-muted"><span className="text-accent">$</span> who am i</p>
          <p className="text-text mb-3">&gt; full-stack developer</p>
          <p className="text-muted"><span className="text-accent">$</span> stack --list</p>
          <p className="text-text mb-1">&gt; React · Node.js · Express · MongoDB</p>
          <p className="text-text mb-1">&gt; Laravel · PHP · MySQL</p>
          <p className="text-text mb-3">&gt; Supabase · PostgreSQL</p>
          <p className="text-muted"><span className="text-accent">$</span> projects --types</p>
          <p className="text-text mb-3">&gt; management systems · social platforms · fintech integrations</p>
          <p className="text-muted"><span className="text-accent">$</span> status</p>
          <p className="text-text">&gt; available for new projects <span className="text-accent">●</span></p>
          <span className="inline-block w-2 h-4 bg-accent align-middle animate-blink ml-1"></span>
        </div>
      </div>
    </section>
  );
}

export default Hero;