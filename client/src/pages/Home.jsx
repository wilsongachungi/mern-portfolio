import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectGrid from "../components/ProjectGrid";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <Hero />
      <About />
      <section id="projects" className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-sm text-accent mb-4">// projects</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-12">
            Things I've built
          </h2>
          <ProjectGrid />
        </div>
      </section>
      <section id="contact" className="py-24 px-6 border-t border-border">
  <div className="max-w-6xl mx-auto">
    <p className="font-mono text-sm text-accent mb-4">// contact</p>
    <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Let's build something.</h2>
    <p className="text-muted text-lg mb-6 max-w-xl">
      Have a project in mind, or just want to talk shop? Send a message and I'll respond soon.
    </p>

    <div className="flex flex-wrap gap-4 mb-10">
      <a href="tel:+254791193343" className="flex items-center gap-2 font-mono text-sm text-muted hover:text-accent transition-colors border border-border rounded-lg px-4 py-2">
        📞 +254 791 193 343
      </a>
      <a href="https://wa.me/254791193343" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-sm text-muted hover:text-accent transition-colors border border-border rounded-lg px-4 py-2">
        💬 WhatsApp
      </a>
    </div>

    <ContactForm />
  </div>
</section>
    </div>
  );
}

export default Home;