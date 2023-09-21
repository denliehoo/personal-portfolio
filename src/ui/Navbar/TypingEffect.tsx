import React, { useState, useEffect, useRef } from "react";

const TypingEffect: React.FC = () => {
  const phrases: string[] = [
    "Full-Stack Developer               ",
    "Blockchain Developer               ",
    "Software Engineer               ",
  ];

  const [text, setText] = useState<string>("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const currentPhrase: string = phrases[currentPhraseIndex];
    let currentIndex: number = text.length;

    const speed = 15;

    const type = () => {
      if (isTyping) {
        if (currentIndex <= currentPhrase.length) {
          setText(currentPhrase.substring(0, currentIndex));
          currentIndex++;
          timeoutRef.current = window.setTimeout(type, speed * 3); // Typing speed (adjust as needed)
        } else {
          setIsTyping(false);
          timeoutRef.current = window.setTimeout(
            () => setIsTyping(true),
            speed
          ); // Pause before backspacing
        }
      } else {
        if (currentIndex >= 0) {
          setText(currentPhrase.substring(0, currentIndex));
          currentIndex--;
          timeoutRef.current = window.setTimeout(type, speed); // Backspace speed (adjust as needed)
        } else {
          setCurrentPhraseIndex(
            (prevIndex) => (prevIndex + 1) % phrases.length
          );
          setIsTyping(true);
        }
      }
    };

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(type, isTyping ? 0 : speed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, currentPhraseIndex, isTyping]);

  return <>{text}</>;
};

export default TypingEffect;
