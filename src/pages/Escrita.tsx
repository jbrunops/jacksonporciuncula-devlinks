import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import CaseStudyCard from '@/components/CaseStudyCard';
import SerieCard from '@/components/SerieCard';
import { BookOpen, BookText } from 'lucide-react';

const Escrita = () => {
  return (
    <>
      <SectionTitle 
        title="Produções Literárias" 
        subtitle="Histórias, séries e textos criativos"
        icon={<BookOpen className="w-5 h-5" />}
      />
      
      <div className="space-y-8">
        {/* Séries Publicadas */}
        <div>
          <div className="flex items-center mb-4">
            <BookText className="w-4 h-4 text-tech-purple mr-2" />
            <h3 className="text-base font-medium text-gray-300">Séries Publicadas</h3>
          </div>
          
          <SerieCard 
            title="Mundo dos Sonhos"
            description="Uma série fantástica sobre um mundo paralelo onde os sonhos se tornam realidade. Quando uma jovem descobre que pode acessar conscientemente este mundo, ela percebe que suas ações lá têm consequências no mundo real."
            publisher="Casa dos Escritores"
            episodeCount={3}
            url="https://casadosescritores.com.br/series/f1496058-e7e2-4ce4-998e-f907f0aa73a7"
            imageUrl="https://kkykesdoqdeagnuvlxao.supabase.co/storage/v1/object/public/covers/series_covers/series_6ca306d8-6ec3-4f9d-ba0c-20193cc46d11_1745443056675_jo83h56j5hj.jpg"
          />
        </div>
        
        {/* Conteúdo Futuro */}
        <div className="tech-card p-6 flex flex-col items-center text-center">
          <h3 className="text-lg font-medium text-gray-300 mb-2">Em Breve</h3>
          <p className="text-gray-400 mb-4">Novos trabalhos e projetos literários estão em desenvolvimento.</p>
          <div className="text-sm text-tech-blue">Fique ligado para atualizações!</div>
        </div>
      </div>
    </>
  );
};

export default Escrita; 