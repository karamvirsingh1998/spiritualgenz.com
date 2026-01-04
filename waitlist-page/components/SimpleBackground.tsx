"use client";

export default function SimpleBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/98 to-charcoal"></div>
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lavender/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-sky/10 rounded-full blur-3xl"></div>
      
      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-spiritual opacity-30"></div>
    </div>
  );
}
