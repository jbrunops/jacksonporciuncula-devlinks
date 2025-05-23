import React from 'react';
import { Code } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import LinkCard from '@/components/LinkCard';
import { devProjects } from '@/data/projects';

const Portfolio = () => {
  return (
    <>
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
    </>
  );
};

export default Portfolio; 