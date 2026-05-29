"use client";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase mb-4 block" style={{ color: "var(--color-primary)" }}>Education</span>
          <h2 className="text-4xl font-bold text-white">Academic Background</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          
        <div key={0} className="relative pl-8 pb-8 border-l-2 last:pb-0" style={{ borderColor: "var(--color-primary)" }}>
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full" style={{ background: "var(--color-primary)" }} />
          <div className="p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors" style={{ background: "var(--color-card-bg)" }}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold text-white">B.Sc in CSE</h3>
              <span className="text-sm px-3 py-1 rounded-full text-gray-400 whitespace-nowrap" style={{ background: "var(--color-primary)10" }}>
                2022 — 2026
              </span>
            </div>
            <p className="font-medium mb-2" style={{ color: "var(--color-primary)" }}>Jashore University of Science and Technology</p>
            
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}