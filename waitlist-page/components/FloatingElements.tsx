"use client";

export default function FloatingElements() {
  const elements = [
    { emoji: "✨", delay: 0, duration: 6 },
    { emoji: "🎵", delay: 1, duration: 7 },
    { emoji: "💫", delay: 2, duration: 8 },
    { emoji: "🌟", delay: 1.5, duration: 6.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el, i) => (
        <div
          key={i}
          className="absolute text-4xl opacity-20 animate-float"
          style={{
            left: `${20 + i * 25}%`,
            top: `${30 + i * 15}%`,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
          }}
        >
          {el.emoji}
        </div>
      ))}
    </div>
  );
}
