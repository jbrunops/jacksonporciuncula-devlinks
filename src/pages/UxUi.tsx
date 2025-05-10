import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import CaseStudyCard from '@/components/CaseStudyCard';
import { useMediumArticles } from '@/hooks/useMediumArticles';
import { FileText, Loader2 } from 'lucide-react';

const UxUi = () => {
  // Usar o hook para buscar os artigos do Medium (atualiza a cada 1 hora = 3600000ms)
  const { articles, isLoading, error } = useMediumArticles({
    username: 'jacksonporciuncula',
    refreshInterval: 3600000
  });

  return (
    <>
      <SectionTitle 
        title="UX/UI Case Studies" 
        subtitle="Estudos de caso e artigos sobre design e experiência do usuário"
        icon={<FileText className="w-5 h-5" />}
      />
      
      <div className="space-y-6">
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-10 h-10 text-tech-blue animate-spin" />
            <span className="ml-3 text-gray-400">Carregando artigos...</span>
          </div>
        )}
        
        {error && (
          <div className="text-center p-6 bg-red-500/10 rounded-xl">
            <p className="text-red-400">{error}</p>
            <p className="text-sm text-gray-400 mt-2">Tente novamente mais tarde.</p>
          </div>
        )}
        
        {!isLoading && !error && articles.length === 0 && (
          <div className="text-center p-6 bg-tech-gray/20 rounded-xl">
            <p className="text-gray-400">Nenhum artigo encontrado no Medium.</p>
          </div>
        )}
        
        {articles.map((article, index) => (
          <CaseStudyCard 
            key={index}
            title={article.title}
            description={article.description.replace(/<[^>]*>/g, '').slice(0, 150) + '...'}
            date={new Date(article.pubDate).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'short',
              year: 'numeric'
            })}
            readTime="Artigo no Medium"
            imageUrl={article.thumbnail}
            url={article.link}
          />
        ))}
      </div>
    </>
  );
};

export default UxUi; 