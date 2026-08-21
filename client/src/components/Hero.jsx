import { useEffect, useState } from "react";

const heroSlides = [
  {
    eyebrow: "$ who am i",
    headline: "Full-stack developer building the systems businesses run on.",
    description:
      "I design and ship management systems, social platforms, and organization websites with real integrations like M-Pesa, Card payments, WhatsApp Business API, and Supabase. React · Node.js · Laravel · MongoDB.",
    image: "/profile.jpeg",
    shape: "circle",
    primaryCta: { label: "View Projects", href: "#projects" },
    secondaryCta: { label: "Get in Touch", href: "#contact" },
  },
  {
    eyebrow: "$ what i teach",
    headline: "Practical programming, taught the way I actually build.",
    description:
      "MERN, Laravel, and Vue — junior and senior programmes, holiday tuition, online or in person. Learn from real project work, not recycled tutorials.",
    image: "/showcase/teaching.png",
    shape: "rectangle",
    primaryCta: { label: "See Courses", href: "/teaching" },
    secondaryCta: { label: "Enroll Now", href: "/teaching#courses" },
  },
  {
    eyebrow: "$ open for work",
    headline: "Available for freelance and long-term collaboration.",
    description:
      "From full-stack platforms to fintech integrations — I bring real, live products as proof, not just claims. Let's talk about what you're building.",
    image: "/showcase/projects.png",
    shape: "rectangle",
    primaryCta: { label: "Get in Touch", href: "#contact" },
    secondaryCta: {
      label: "View GitHub",
      href: "https://github.com/wilsongachungi",
    },
  },
];

function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {heroSlides.map((slide, i) => (
              <div key={i} className="min-w-full">
                <img
                  src={slide.image}
                  alt={slide.eyebrow}
                  className={
                    slide.shape === "circle"
                      ? "w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-accent mb-8"
                      : "w-full max-w-md h-48 md:h-56 rounded-lg object-cover border-2 border-accent mb-8"
                  }
                />
                <p className="font-mono text-sm text-accent mb-4">
                  {slide.eyebrow}
                </p>
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text leading-tight mb-6">
                  {slide.headline}
                </h1>
                <p className="text-muted text-lg mb-8 max-w-md">
                  {slide.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={slide.primaryCta.href}
                    className="bg-accent text-bg font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    {slide.primaryCta.label}
                  </a>
                  <a
                    href={slide.secondaryCta.href}
                    className="border border-border text-text px-6 py-3 rounded-lg hover:border-accent transition-colors"
                  >
                    {slide.secondaryCta.label}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-8">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-accent" : "w-1.5 bg-border"}`}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6 font-mono text-sm shadow-2xl">
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500/60"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/60"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/60"></span>
          </div>
          <p className="text-muted">
            <span className="text-accent">$</span> who am i
          </p>
          <p className="text-text mb-3">&gt; full-stack developer</p>
          <p className="text-muted">
            <span className="text-accent">$</span> stack --list
          </p>
          <p className="text-text mb-1">
            &gt; React · Node.js · Express · MongoDB
          </p>
          <p className="text-text mb-1">&gt; Laravel · PHP · MySQL</p>
          <p className="text-text mb-3">&gt; Supabase · PostgreSQL</p>
          <p className="text-muted">
            <span className="text-accent">$</span> projects --types
          </p>
          <p className="text-text mb-3">
            &gt; management systems · social platforms · fintech integrations
          </p>
          <p className="text-muted">
            <span className="text-accent">$</span> status
          </p>
          <p className="text-text">
            &gt; available for new projects{" "}
            <span className="text-accent">●</span>
          </p>
          <span className="inline-block w-2 h-4 bg-accent align-middle animate-blink ml-1"></span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
