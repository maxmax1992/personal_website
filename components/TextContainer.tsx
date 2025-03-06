import React from 'react';
import { cn } from "@/lib/utils";

interface TextContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function TextContainer({ children, className }: TextContainerProps) {
  return (
    <div className={cn(
      "relative backdrop-blur-[4px] bg-background/5 rounded-[2rem] p-6 overflow-hidden",
      "shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)]",
      className
    )}>
      {/* Inner content with gradual edge blur */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Gradient edges for feathered blur effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top edge gradient */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-background/8 to-transparent"></div>
        {/* Bottom edge gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background/8 to-transparent"></div>
        {/* Left edge gradient */}
        <div className="absolute top-0 left-0 bottom-0 w-10 bg-gradient-to-r from-background/8 to-transparent"></div>
        {/* Right edge gradient */}
        <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-l from-background/8 to-transparent"></div>
        
        {/* Corner gradients for smoother transitions */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-radial from-background/8 to-transparent rounded-tl-[2rem]"></div>
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-radial from-background/8 to-transparent rounded-tr-[2rem]"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-radial from-background/8 to-transparent rounded-bl-[2rem]"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-radial from-background/8 to-transparent rounded-br-[2rem]"></div>
      </div>
    </div>
  );
} 