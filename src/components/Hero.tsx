
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="opacity-0 animate-fade-in animate-delay-200">
            <p className="text-sm text-muted uppercase tracking-wider">COMPUTER SCIENCE STUDENT</p>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-400">
            <p className="text-sm text-muted uppercase tracking-wider">BASED IN COLOMBO, LK</p>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-600">
            <p className="text-sm text-muted uppercase tracking-wider">
              PASSIONATE UI/UX AND GRAPHIC DESIGNER CRAFTING SEAMLESS EXPERIENCES SINCE 2017, 
              WITH A STRONG FOUNDATION IN BRANDING AND VISUAL STORYTELLING. I BLEND CREATIVITY AND 
              STRATEGY TO BRING DESIGNS TO LIFE.
            </p>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extralight leading-tight mb-2 tracking-tight opacity-0 animate-slide-up">
          IMETH SASVIN
        </h1>
        
        <div className="relative pl-[232px]">
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-medium leading-tight tracking-tight opacity-0 animate-slide-up animate-delay-200">
            UI / UX DESIGNER
          </h2>
          <div className="absolute -bottom-1 left-[232px] w-40 h-[2px] bg-[#4682B4] opacity-0 animate-slide-right animate-delay-600"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
