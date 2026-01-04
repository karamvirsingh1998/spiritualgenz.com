"use client";

import ScrollReveal from "./ScrollReveal";

export default function EmotionalContext() {
  return (
    <section className="py-40 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        <ScrollReveal>
          <p className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.2] text-white">
            Stories from the past. 
            <br className="hidden md:block" />
            <span className="gradient-text-vibrant">Music that understands you today.</span>
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="flex items-center justify-center gap-3 text-lg md:text-xl font-medium text-white/60 mt-6">
            <span className="text-2xl animate-bounce-gentle">🌙</span>
            <p>
              Every feeling has a story. Every story becomes music just for you.
            </p>
            <span className="text-2xl animate-bounce-gentle" style={{ animationDelay: '0.3s' }}>✨</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
