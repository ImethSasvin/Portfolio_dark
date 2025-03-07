
import React from 'react';

interface InfoSectionProps {
  id: string;
  title: string;
  description: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ id, title, description }) => {
  return (
    <section id={id} className="py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-10">{title}</h2>
        <p className="text-muted max-w-2xl">{description}</p>
      </div>
    </section>
  );
};

export default InfoSection;
