"use client";

import { Github, Linkedin, Twitter, Mail, Phone, FileText, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="p-8 md:p-12 rounded-3xl border border-white/10 text-center backdrop-blur-xl" style={{ background: "var(--color-card-bg)" }}>
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-8">Have a project in mind or want to discuss tech? Reach out!</p>
          <div className="flex flex-col items-center gap-4">
            <a href="mailto:200120.cse@student.just.edu.bd" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold btn-primary transition-all hover:scale-105">
              <Mail className="w-5 h-5" /> 200120.cse@student.just.edu.bd
            </a>
            <p className="flex items-center gap-2 text-gray-400">
              <Phone className="w-5 h-5" /> +8801859093806
            </p>
            <a href="https://res.cloudinary.com/des0whrgl/raw/upload/v1780061868/launchfolio/resumes/x7rxg0s1bx9lkysxmkrj" target="_blank" download className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white border border-white/20 hover:border-white/40 transition-colors mt-2">
              <FileText className="w-5 h-5" /> Download Resume
            </a>
          </div>
          <div className="flex gap-4 justify-center mt-8 flex-wrap">
            <a href="https://x.com/Durjoy_22" target="_blank" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-gray-300 hover:border-white/30 transition-all hover:-translate-y-0.5"><Twitter className="w-4 h-4" /><span>Twitter</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}