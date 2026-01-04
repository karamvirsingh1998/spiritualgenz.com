"use client";

import DynamicWhatIf from "./DynamicWhatIf";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center space-y-16 relative z-10">
        <DynamicWhatIf />
        
        <div className="space-y-8 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed">
            It's not regular music you listen. 
            <br className="hidden md:block" />
            <span className="gradient-text-vibrant font-bold">A music customized for you</span> taking you to a spiritual journey.
          </p>
          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
            See how our great warriors handled things. 
            <span className="font-medium">Only customized for you in Gen-Z style.</span>
          </p>
          <p className="text-xl md:text-2xl text-white/90 font-semibold mt-6">
            Are you excited for it?
          </p>
        </div>
        
        <div className="pt-8">
          <a
            href="#waitlist"
            className="group inline-block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-lavender via-indigo to-sky rounded-full blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
            <div className="relative px-12 py-5 bg-gradient-to-r from-lavender via-indigo to-sky text-white text-lg font-semibold rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo/70 active:scale-95 overflow-hidden">
              <span className="relative z-10">Join the waitlist</span>
              <div className="absolute inset-0 shimmer"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
