"use client";

import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
}

export default function AnimatedText({ 
  text, 
  className = "", 
  delay = 0,
  wordDelay = 50 
}: AnimatedTextProps) {
  const [visibleWords, setVisibleWords] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => {
      words.forEach((_, index) => {
        setTimeout(() => {
          setVisibleWords(index + 1);
        }, index * wordDelay);
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, wordDelay, words.length]);

  return (
    <h1 className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block mr-2 ${
            index < visibleWords
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          } transition-all duration-500 ease-out`}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}
