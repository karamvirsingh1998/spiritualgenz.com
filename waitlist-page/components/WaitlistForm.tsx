"use client";

import { useState } from "react";
import { submitWaitlist } from "@/app/actions";
import ScrollReveal from "./ScrollReveal";

export default function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setError(null);

    const result = await submitWaitlist(formData);

    if (result.error) {
      setError(result.error);
      setIsSubmitting(false);
    } else {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lavender/20 via-indigo/20 to-sky/20"></div>
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center py-20 relative z-10">
            <div className="space-y-6 animate-fade-in-up">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-lavender via-indigo to-sky flex items-center justify-center animate-breathe glow-purple">
                <span className="text-4xl">✨</span>
              </div>
              <p className="text-3xl md:text-4xl font-bold gradient-text-vibrant">
                You're in! 🎉
              </p>
              <p className="text-xl font-medium text-white/70">
                Early access + lifetime perks coming your way
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-40 px-4 relative overflow-hidden">
      <div className="max-w-lg mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6 text-white">
              Join Us
            </h2>
            <p className="text-white/60 text-lg">
              Get early access when we launch
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <form action={handleSubmit} className="space-y-6">
            <div className="group relative">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full px-6 py-5 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-indigo focus:ring-4 focus:ring-indigo/30 transition-all duration-300 shadow-2xl hover:shadow-indigo/20 hover:bg-white/15"
              />
            </div>
            <div className="group relative">
              <label htmlFor="note" className="sr-only">
                What are you seeking right now?
              </label>
              <textarea
                id="note"
                name="note"
                placeholder="What's on your mind? (totally optional)"
                rows={4}
                className="w-full px-6 py-5 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-indigo focus:ring-4 focus:ring-indigo/30 transition-all duration-300 resize-none shadow-2xl hover:shadow-indigo/20 hover:bg-white/15"
              />
            </div>
            {error && (
              <div className="animate-fade-in p-4 bg-rose/20 backdrop-blur-md border border-rose/40 rounded-xl">
                <p className="text-sm text-white/90">{error}</p>
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-lavender via-indigo to-sky rounded-2xl blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-500 animate-pulse-slow"></div>
              <div className="relative px-8 py-6 bg-gradient-to-r from-lavender via-indigo to-sky text-white text-xl font-bold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo/70 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 rounded-2xl">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin text-2xl">⏳</span>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Join the waitlist</span>
                      <span className="text-2xl animate-bounce-gentle">🚀</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 shimmer"></div>
              </div>
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
