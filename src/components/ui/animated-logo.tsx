
import React, { useState, useEffect } from 'react';
import { Code, Paintbrush, ShoppingBag, Layers } from 'lucide-react';

const AnimatedLogo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const icons = [
    { icon: Code, color: 'text-ma-teal' },
    { icon: Paintbrush, color: 'text-ma-gold' },
    { icon: ShoppingBag, color: 'text-ma-teal' },
    { icon: Layers, color: 'text-ma-gold' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-24 w-24 mb-6">
      <div className="absolute inset-0 bg-muted/30 rounded-full flex items-center justify-center">
        {icons.map((item, index) => {
          const Icon = item.icon;
          return (
            <Icon 
              key={index}
              size={40} 
              className={`absolute transition-all duration-500 ${item.color} ${
                index === activeIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-75'
              }`}
            />
          );
        })}
      </div>
      <div className="absolute inset-0 rounded-full border-4 border-ma-teal/20 animate-[spin_8s_linear_infinite]"></div>
    </div>
  );
};

export default AnimatedLogo;
