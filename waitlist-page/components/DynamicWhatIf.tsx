"use client";

import { useEffect, useState } from "react";

const whatIfQuestions = [
  "What if music could understand how you feel right now?",
  "What if ancient stories knew what you're going through?",
  "What if you didn't have to explain yourself?",
  "What if someone actually got it?",
  "What if you could just feel, without words?",
];

export default function DynamicWhatIf() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % whatIfQuestions.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[200px] flex items-center justify-center">
      <h1
        className={`text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-white text-center transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {whatIfQuestions[currentIndex]}
      </h1>
    </div>
  );
}
