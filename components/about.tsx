"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-semibold tracking-widest uppercase mb-4 block" style={{ color: "var(--color-primary)" }}>About Me</span>
            <h2 className="text-4xl font-bold text-white mb-6">About Durjoy</h2>
            <p className="text-gray-400 leading-relaxed mb-6">I am a teacher.....</p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">A passionate developer.</p>
            <div className="flex gap-4 flex-wrap">
              <a href="https://x.com/Durjoy_22" target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-white/10 text-gray-300 hover:border-white/30 transition-colors"><Twitter className="w-4 h-4" /><span>Twitter</span></a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
                <div className="w-80 h-80 rounded-3xl overflow-hidden">
                  <img src="https://res.cloudinary.com/des0whrgl/image/upload/v1780061932/launchfolio/user-pic/ih9b1ehxlwoauf1zgkro.png" alt="Durjoy Ghosh" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl" style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))", opacity: 0.6 }} />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}