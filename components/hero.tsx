"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 border border-white/5 rounded-full" />
      <div className="absolute bottom-40 right-40 w-32 h-32 border border-white/5 rounded-full" />
      <div className="absolute top-40 right-1/3 w-3 h-3 rounded-full" style={{ background: "var(--color-primary)" }} />
      <div className="absolute bottom-1/3 left-20 w-2 h-2 rounded-full" style={{ background: "var(--color-secondary)" }} />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 anim-fadeUp">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px" style={{ background: "var(--color-primary)" }} />
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "var(--color-primary)" }}>Teacher</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight">
            Durjoy
            <br />
            <span className="text-gray-600">Ghosh</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">I am a teacher.....</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#projects" className="group px-8 py-4 rounded-2xl font-semibold btn-primary transition-all hover:-translate-y-1">
              Explore My Projects ↗
            </a>
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <div className="w-80 h-80 rounded-3xl overflow-hidden border-4 flex-shrink-0" style={{ borderColor: "var(--color-primary)" }}>
          <img src="https://res.cloudinary.com/des0whrgl/image/upload/v1780061932/launchfolio/user-pic/ih9b1ehxlwoauf1zgkro.png" alt="Durjoy Ghosh" className="w-full h-full object-cover" />
        </div>
        </div>
      </div>
    </section>
  );
}