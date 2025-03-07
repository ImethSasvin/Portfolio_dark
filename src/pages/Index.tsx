
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import SocialLinks from '@/components/SocialLinks';

const Index: React.FC = () => {
  useEffect(() => {
    // This ensures smooth scrolling works with hash links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main>
        <Hero />
        
        <InfoSection 
          id="work"
          title="Selected Work"
          description="I've collaborated with startups, established companies, and creative agencies to create meaningful and impactful digital experiences. Each project is approached with a deep understanding of both user needs and business objectives."
        />
        
        <InfoSection 
          id="about"
          title="About Me"
          description="As a UI/UX designer with a background in computer science, I bridge the gap between design and technology. My process focuses on user-centered design principles, ensuring that every interface is not only aesthetically pleasing but also functionally intuitive."
        />
        
        <InfoSection 
          id="contact"
          title="Let's Connect"
          description="Whether you're looking for a design partner for your next project or just want to chat about design trends, I'm always open to new conversations and collaborations."
        />
      </main>
      
      <footer className="py-8">
        <SocialLinks />
        <div className="text-center text-xs text-muted mt-12 px-8">
          <p>&copy; {new Date().getFullYear()} Imeth Sasvin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
