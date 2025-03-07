
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("relative w-10 h-10", className)}>
      <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M20 6C13.373 6 8 11.373 8 18C8 24.627 13.373 30 20 30C26.627 30 32 24.627 32 18C32 16.158 31.586 14.415 30.85 12.841"
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
        <path 
          d="M20 6C17.048 6 14.314 7.161 12.343 9.172C12.343 9.172 19.798 10.594 24.863 17.63C29.929 24.666 29.2 34 29.2 34" 
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
        <circle cx="32" cy="8" r="2" fill="white" />
      </svg>
    </div>
  );
};

export default Logo;
