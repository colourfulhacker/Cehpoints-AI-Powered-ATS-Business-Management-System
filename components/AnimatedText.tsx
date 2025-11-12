import { useState, useEffect } from 'react';

interface AnimatedTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export default function AnimatedText({ texts, interval = 3000, className = '' }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  if (!mounted) {
    return <span className={`inline-block ${className}`}>{texts[0]}</span>;
  }

  return (
    <span
      className={`inline-block transition-all duration-500 ${className} ${
        isAnimating ? 'opacity-0 transform -translate-y-2' : 'opacity-100 transform translate-y-0'
      }`}
    >
      {texts[currentIndex]}
    </span>
  );
}
