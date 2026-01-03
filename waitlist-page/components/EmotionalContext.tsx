"use client";

import ScrollReveal from "./ScrollReveal";

export default function EmotionalContext() {
  return (
    <section className="py-40 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        <ScrollReveal>
          <p className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-white">
            Sometimes you don't need advice. 
            <br className="hidden md:block" />
            <span className="gradient-text-vibrant">You just need to feel seen.</span>
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="flex items-center justify-center gap-3 text-xl md:text-2xl font-bold">
            <span className="text-3xl animate-bounce-gentle">✨</span>
            <p className="gradient-text-2">
              Ancient wisdom meets modern vibes
            </p>
            <span className="text-3xl animate-bounce-gentle" style={{ animationDelay: '0.3s' }}>✨</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
