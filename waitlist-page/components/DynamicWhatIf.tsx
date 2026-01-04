"use client";

import { useEffect, useState } from "react";

const whatIfQuestions = [
  { text: "What if you feel to be ", highlight: "loved", color: "text-lavender" },
  { text: "What if you feel to be ", highlight: "listened", color: "text-indigo" },
  { text: "What if you feel to be ", highlight: "understood", color: "text-sky" },
  { text: "What if you feel to be ", highlight: "motivated", color: "text-mint" },
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
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const currentQuestion = whatIfQuestions[currentIndex];

  return (
    <div className="min-h-[180px] md:min-h-[250px] flex items-center justify-center px-4">
      <h1
        className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-center transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="text-white">{currentQuestion.text}</span>
        <span className={`${currentQuestion.color} inline-block`}>
          {currentQuestion.highlight}
        </span>
        <span className="text-white">?</span>
      </h1>
    </div>
  );
}
