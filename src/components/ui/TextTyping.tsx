import { useEffect, useState } from 'react';

interface TextTypingProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  duration?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
  showCursor?: boolean;
}

export default function TextTyping({
  text,
  typingSpeed = 100,
  deletingSpeed = 50,
  duration = 2000,
  pauseDuration = 1000,
  className = '',
  cursorClassName = '',
  showCursor = true,
}: TextTypingProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, duration);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, text, typingSpeed, deletingSpeed, duration, pauseDuration]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span className={`inline-block w-[2px] h-[1em] bg-current ml-1 animate-pulse ${cursorClassName}`} />
      )}
    </span>
  );
}
