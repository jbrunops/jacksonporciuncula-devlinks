
import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';
import LinkCard from './LinkCard';

const DevSection = () => {
  const devProjects = [
    {
      title: "Casa dos Escritores",
      description: "Plataforma para escritores compartilharem e desenvolverem seus trabalhos",
      url: "https://www.casadosescritores.com.br",
      icon: <ExternalLink size={20} />
    },
    {
      title: "Quero Ser Católico",
      description: "Site educacional sobre catolicismo e formação religiosa",
      url: "https://www.querosercatolico.com.br",
      icon: <ExternalLink size={20} />
    }
  ];

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
