import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import CaseStudyCard from '@/components/CaseStudyCard';
import { BookOpen } from 'lucide-react';

const Escrita = () => {
  return (
    <>
      <SectionTitle 
        title="Produções Literárias" 
        subtitle="Histórias, artigos e textos criativos"
        icon={<BookOpen className="w-5 h-5" />}
      />
      <div className="space-y-6">
        <CaseStudyCard 
          title="A Guerra dos Cem Mil: A Lore da História Principal"
          description="Uma análise narrativa aprofundada sobre a história principal do universo ficcional 'A Guerra dos Cem Mil'."
          date="Jan 22, 2023"
          readTime="12 min de leitura"
          imageUrl="https://miro.medium.com/v2/resize:fit:720/format:webp/1*mPY9gUm3zw8BkeFmcGAgWA.jpeg"
          url="https://medium.com/@jacksonporciuncula/a-guerra-dos-cem-mil-a-lore-da-hist%C3%B3ria-principal-f0e61270f701"
        />
        <CaseStudyCard 
          title="A Jornada do Herói em Histórias Modernas"
          description="Explorando como a estrutura clássica da Jornada do Herói se manifesta em narrativas contemporâneas."
          date="Nov 15, 2022"
          readTime="9 min de leitura"
          imageUrl=""
          url="#"
        />
      </div>
    </>
  );
};

export default Escrita; 