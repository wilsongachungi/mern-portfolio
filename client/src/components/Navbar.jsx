import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

const links = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Teaching", href: "/teaching" },
  { label: "Contact", href: "#contact" },
];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-mono text-sm text-accent font-medium">
            Wilson Gachungi
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors">
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 border border-border rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-muted">Available for work</span>
            </div>
          </div>

          <button className="md:hidden text-text z-50" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <div className={`w-6 h-px bg-text mb-1.5 transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`w-6 h-px bg-text transition-transform ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
          </button>
        </div>
      </nav>

      <div className={`fixed top-0 right-0 h-full w-64 bg-surface border-l border-border z-40 transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col gap-6 px-8 pt-24">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="font-mono text-sm uppercase tracking-widest text-muted hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 border border-border rounded-full px-3 py-1.5 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-muted">Available for work</span>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}

export default Navbar;