
import React from 'react';

const SocialLinks: React.FC = () => {
  return (
    <div className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex flex-wrap items-center justify-center gap-12">
          <a href="#" className="social-link">Dribbble</a>
          <a href="#" className="social-link">Behance</a>
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">Github</a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
