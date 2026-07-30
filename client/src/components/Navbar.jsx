import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["About", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-sm text-text">
          {"{ "}
          <span className="text-accent">Wilson Gachungi</span>
          {" }"}
        </a> 

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors">
              {link}
            </a>
          ))}
          <div className="flex items-center gap-2 border border-border rounded-full px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-muted">Available for work</span>
          </div>
        </div>

        <button className="md:hidden text-text" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div className="w-6 h-px bg-text mb-1.5" />
          <div className="w-6 h-px bg-text" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 border-b border-border">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;