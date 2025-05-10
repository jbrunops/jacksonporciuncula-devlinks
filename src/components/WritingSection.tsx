
import React from 'react';
import SectionTitle from './SectionTitle';
import CaseStudyCard from './CaseStudyCard';
import { FileText } from 'lucide-react';

const WritingSection = () => {
  return (
    <section className="section-fade w-full mb-8" style={{ '--delay': 3 } as React.CSSProperties}>
      <SectionTitle 
        title="UX/UI Case Studies" 
        subtitle="Estudos de caso e artigos sobre design e experiência do usuário"
        icon={<FileText className="w-5 h-5" />}
      />
      <div className="space-y-6">
        <CaseStudyCard 
          title="Estudo de Caso: App Doação de Ferro"
          description="Um estudo de caso detalhado sobre o desenvolvimento de um aplicativo para doação de ferro, abordando problemas e soluções na experiência do usuário."
          date="Jun 20, 2023"
          readTime="8 min de leitura"
          imageUrl="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*CAGSa2ysI0G_To-9s_JS0g.jpeg"
          url="https://medium.com/@jacksonporciuncula/estudo-de-caso-app-doa%C3%A7%C3%A3o-de-ferro-833c86663438"
        />
        <CaseStudyCard 
          title="Itaú Você: Um projeto para reaproximar antigos clientes ao banco Itaú"
          description="Como desenvolvi um projeto para reconectar clientes antigos ao banco Itaú, focando em experiência personalizada e engajamento."
          date="Mar 15, 2023"
          readTime="10 min de leitura"
          imageUrl="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lPGXL9LBpf2kBCI2vthSWg.jpeg"
          url="https://medium.com/@jacksonporciuncula/ita%C3%BA-voc%C3%AA-um-projeto-para-reaproximar-antigos-clientes-ao-banco-ita%C3%BA-c7ca4391722f"
        />
        <CaseStudyCard 
          title="A Guerra dos Cem Mil: A Lore da História Principal"
          description="Uma análise narrativa aprofundada sobre a história principal do universo ficcional 'A Guerra dos Cem Mil'."
          date="Jan 22, 2023"
          readTime="12 min de leitura"
          imageUrl="https://miro.medium.com/v2/resize:fit:720/format:webp/1*mPY9gUm3zw8BkeFmcGAgWA.jpeg"
          url="https://medium.com/@jacksonporciuncula/a-guerra-dos-cem-mil-a-lore-da-hist%C3%B3ria-principal-f0e61270f701"
        />
      </div>
    </section>
  );
};

export default WritingSection;
