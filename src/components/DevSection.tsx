import React from 'react';
import { Code } from 'lucide-react';
import SectionTitle from './SectionTitle';
import LinkCard from './LinkCard';
import { devProjects } from '@/data/projects';

const DevSection = () => {
  return (
    <section className="section-fade w-full mb-12" style={{ '--delay': 1 } as React.CSSProperties}>
      <SectionTitle 
        title="Desenvolvimento Front-end" 
        subtitle="Principais projetos e trabalhos em desenvolvimento web" 
        icon={<Code className="w-5 h-5" />}
      />
      <div className="space-y-4">
        {devProjects.map((project, index) => (
          <LinkCard 
            key={index}
            title={project.title}
            description={project.description}
            icon={project.icon}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
};

export default DevSection;
