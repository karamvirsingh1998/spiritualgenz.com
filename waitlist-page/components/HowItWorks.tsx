"use client";

import ScrollReveal from "./ScrollReveal";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      text: "Share how you feel right now",
      emoji: "💭",
      color: "lavender",
    },
    {
      number: "2",
      text: "We find stories that understand you",
      emoji: "📖",
      color: "indigo",
    },
    {
      number: "3",
      text: "Get music made just for you",
      emoji: "🎵",
      color: "sky",
    },
  ];

  const colorClasses = {
    lavender: "from-lavender to-indigo",
    indigo: "from-indigo to-sky",
    sky: "from-sky to-mint",
  };

  return (
    <section className="py-40 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">
              How It Works
            </h2>
            <p className="text-white/60 text-xl">Simple. Personal. Meaningful.</p>
          </div>
        </ScrollReveal>
        <div className="space-y-20 md:space-y-24">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="group cursor-default">
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">
                  <div className="relative">
                    <div className={`text-7xl md:text-8xl font-black bg-gradient-to-br ${colorClasses[step.color as keyof typeof colorClasses]} bg-clip-text text-transparent transition-all duration-500 group-hover:scale-110 float`}>
                      {step.number}
                    </div>
                    <div className={`absolute inset-0 text-7xl md:text-8xl font-black bg-gradient-to-br ${colorClasses[step.color as keyof typeof colorClasses]} bg-clip-text text-transparent opacity-40 blur-2xl transition-all duration-500 group-hover:opacity-60`}></div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-4xl animate-bounce-gentle">{step.emoji}</span>
                      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white transition-all duration-500 group-hover:translate-x-2">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`ml-0 md:ml-20 mt-10 h-1 bg-gradient-to-r ${colorClasses[step.color as keyof typeof colorClasses]} rounded-full opacity-30`}></div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
