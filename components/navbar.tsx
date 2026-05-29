"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-8 py-3 rounded-2xl border border-white/10 backdrop-blur-xl" style={{ background: "var(--color-nav-bg)" }}>
      <div className="flex items-center gap-8">
        <a href="#" className="flex items-center gap-2">
          
      <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm" style={{ background: "#6b7280" }}>D</div>
      <span className="font-semibold text-white">Durjoy</span>
    
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
        </div>
        <a href="#contact" className="hidden md:inline-flex px-4 py-1.5 rounded-full text-sm font-medium btn-primary transition-colors">
          Let's Talk
        </a>
      </div>
    </nav>
  );
}