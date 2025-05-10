import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import LinkCard from '@/components/LinkCard';
import { Briefcase, ExternalLink } from 'lucide-react';

const Projetos = () => {
  const projetosList = [
    {
      title: "Projeto FIAP - Solução IoT para Sustentabilidade",
      description: "Desenvolvimento de uma plataforma de monitoramento ambiental utilizando sensores IoT e dashboard em tempo real.",
      url: "#",
      icon: <ExternalLink size={20} />
    },
    {
      title: "Aplicativo de Planejamento Financeiro",
      description: "Aplicativo React Native para controle de gastos e planejamento financeiro pessoal com visualização de dados.",
      url: "#",
      icon: <ExternalLink size={20} />
    },
    {
      title: "Projeto Open Source - Contribuição para TailwindCSS",
      description: "Contribuições para componentes da comunidade TailwindCSS, focando em melhorias de acessibilidade.",
      url: "#",
      icon: <ExternalLink size={20} />
    }
  ];

  return (
    <>
      <SectionTitle 
        title="Outros Projetos" 
        subtitle="Projetos pessoais, acadêmicos e contribuições open source" 
        icon={<Briefcase className="w-5 h-5" />}
      />
      <div className="space-y-4">
        {projetosList.map((project, index) => (
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

export default Projetos; 