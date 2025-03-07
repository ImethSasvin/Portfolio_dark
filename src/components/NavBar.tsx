
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { cn } from '@/lib/utils';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-6 transition-all duration-300",
        scrolled && "backdrop-blur-md bg-black/20 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo className="opacity-0 animate-fade-in" />
        
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            <a href="#work" className="nav-link opacity-0 animate-fade-in animate-delay-200 text-nav uppercase">Work</a>
            <a href="#about" className="nav-link opacity-0 animate-fade-in animate-delay-400 text-nav uppercase">About me</a>
          </nav>
          
          <a 
            href="#contact" 
            className="opacity-0 animate-fade-in animate-delay-600 px-6 py-2 text-nav text-white border border-white/20 rounded-[5px] transition-all duration-300 hover:bg-white/5"
          >
            Say Hello
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
