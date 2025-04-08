import { useEffect, useState, useRef } from "react";

interface TypingEffectProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  startDelay?: number;
}

export function TypingEffect({
  text,
  className = "",
  typingSpeed = 150,
  startDelay = 500,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsTyping(true);
    }, startDelay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsTyping(false);
    };
  }, [text, startDelay]);

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, isTyping, typingSpeed]);

  return (
    <span className={className}>
      {displayText}
      {isTyping && displayText.length < text.length && (
        <span className="animate-blink">|</span>
      )}
    </span>
  );
}
