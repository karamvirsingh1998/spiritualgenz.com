"use client";

import { useEffect, useState } from "react";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-6">
          <AnimatedText
            text="What if ancient stories could understand how you feel right now?"
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1] text-white"
            delay={200}
            wordDelay={100}
          />
        </div>
        
        <p className="text-xl md:text-2xl text-white/70 font-medium max-w-4xl mx-auto animate-fade-in-delay-1 leading-relaxed">
          We're creating something new. A way to feel understood through music and stories that actually get you.
          <br className="hidden md:block mt-2" />
          <span className="gradient-text-vibrant font-bold"> Personalized. Meaningful. Just for you.</span>
        </p>
        
        <div className="pt-8 animate-fade-in-delay-2">
          <a
            href="#waitlist"
            className="group inline-block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-lavender via-indigo to-sky rounded-full blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-500 animate-pulse-slow"></div>
            <div className="relative px-16 py-6 bg-gradient-to-r from-lavender via-indigo to-sky text-white text-xl font-bold rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-indigo/70 active:scale-95 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                <span>Something cool is coming</span>
                <span className="text-3xl animate-bounce-gentle">✨</span>
              </span>
              <div className="absolute inset-0 shimmer"></div>
            </div>
          </a>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 text-base text-white/60 animate-fade-in-delay-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-lavender animate-pulse glow-purple"></span>
            <span>Join the waitlist</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-indigo animate-pulse glow-blue" style={{ animationDelay: '0.2s' }}></span>
            <span>Early access</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-sky animate-pulse" style={{ animationDelay: '0.4s' }}></span>
            <span>Lifetime perks</span>
          </div>
        </div>
      </div>
    </section>
  );
}
