
import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  gradient?: boolean;
  staggered?: boolean;
  duration?: string;
}

const AnimatedText = ({ 
  text, 
  className = "", 
  delay = 0.05, 
  gradient = false,
  staggered = true,
  duration = "1s"
}: AnimatedTextProps) => {
  if (!staggered) {
    return (
      <span 
        className={`${className} ${gradient ? 'bg-gradient-to-r from-ma-teal to-ma-dark-teal text-transparent bg-clip-text' : ''} animate-fade-in`}
        style={{ animationDuration: duration }}
      >
        {text}
      </span>
    );
  }
  
  return (
    <span className={`${className} ${gradient ? 'bg-gradient-to-r from-ma-teal to-ma-dark-teal text-transparent bg-clip-text' : ''}`}>
      {text.split('').map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="inline-block animate-fade-in"
          style={{ 
            animationDelay: `${delay * index}s`,
            animationDuration: duration,
            opacity: 0,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;
