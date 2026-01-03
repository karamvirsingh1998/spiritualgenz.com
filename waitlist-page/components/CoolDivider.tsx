"use client";

export default function CoolDivider() {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-lavender/60 via-indigo/60 via-sky/60 to-transparent"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-lavender via-indigo to-sky animate-pulse-slow glow-blue"></div>
      </div>
    </div>
  );
}
