"use client";

import ScrollReveal from "./ScrollReveal";

export default function MusicCTA() {
  return (
    <section className="py-24 md:py-32 px-4 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <div className="space-y-8 md:space-y-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              A spiritual need made for{" "}
              <span className="bg-gradient-to-r from-lavender via-indigo to-sky bg-clip-text text-transparent">
                you
              </span>
            </h2>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-white/70 font-medium leading-relaxed max-w-3xl mx-auto">
              Your own spiritual journey. Not like anything that currently exists.
            </p>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
              Personalized. Deep. Made just for how you feel right now.
            </p>
            
            <div className="pt-6 md:pt-8">
              <a
                href="#waitlist"
                className="group inline-block relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-lavender via-indigo to-sky rounded-full blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="relative px-10 md:px-14 py-4 md:py-6 bg-gradient-to-r from-lavender via-indigo to-sky text-white text-lg md:text-xl font-bold rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo/70 active:scale-95 overflow-hidden">
                  <span className="relative z-10">Begin Your Journey</span>
                  <div className="absolute inset-0 shimmer"></div>
                </div>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
