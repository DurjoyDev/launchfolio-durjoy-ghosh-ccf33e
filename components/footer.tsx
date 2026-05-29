"use client";

import { Github, Linkedin, Twitter, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 text-center border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <p className="text-2xl font-bold text-white mb-4">Durjoy<span style={{ color: "var(--color-primary)" }}>.</span></p>
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          <a href="https://x.com/Durjoy_22" target="_blank" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"><Twitter className="w-4 h-4" /><span>Twitter</span></a>
        </div>
        <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-600 mb-6">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-xs text-gray-700">© 2026 Durjoy Ghosh. Built with LaunchFolio.</p>
      </div>
    </footer>
  );
}