import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import CaseStudyCard from '@/components/CaseStudyCard';
import { useMediumArticles } from '@/hooks/useMediumArticles';
import { caseStudies } from '@/data/caseStudies';
import { FileText, Loader2, Palette, Search } from 'lucide-react';

const UxUi = () => {
  // Usar o hook para buscar os artigos do Medium (atualiza a cada 1 hora = 3600000ms)
  const { articles, isLoading, error } = useMediumArticles({
    username: 'jacksonporciuncula',
    refreshInterval: 3600000
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="space-y-12">
      {/* Case Studies */}
      <section>
        <SectionTitle 
          title="Case Studies" 
          subtitle="Projetos de UX/UI com processo detalhado e resultados"
          icon={<Palette className="w-5 h-5" />}
          level={2}
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {caseStudies
            .filter(study => study.featured)
            .map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CaseStudyCard 
                  title={study.title}
                  description={study.description}
                  date={`${study.duration} • ${study.role}`}
                  readTime={study.tags.slice(0, 2).join(', ')}
                  imageUrl={study.imageUrl}
                  url={study.url}
                />
              </motion.div>
            ))}
        </motion.div>
      </section>

      {/* Artigos do Medium */}
      <section>
        <SectionTitle 
          title="Artigos e Pesquisas" 
          subtitle="Artigos publicados sobre UX/UI e design thinking"
          icon={<Search className="w-5 h-5" />}
          level={2}
        />
        
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {isLoading && (
            <motion.div 
              className="flex items-center justify-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Loader2 className="w-10 h-10 text-tech-blue animate-spin" />
              <span className="ml-3 text-gray-400">Carregando artigos...</span>
            </motion.div>
          )}
          
          {error && (
            <motion.div 
              className="text-center p-6 bg-red-500/10 rounded-xl border border-red-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="text-red-400">{error}</p>
              <p className="text-sm text-gray-400 mt-2">Tente novamente mais tarde.</p>
            </motion.div>
          )}
          
          {!isLoading && !error && articles.length === 0 && (
            <motion.div 
              className="text-center p-6 bg-tech-gray/20 rounded-xl border border-tech-blue/10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="text-gray-400">Nenhum artigo encontrado no Medium.</p>
              <p className="text-sm text-gray-500 mt-2">Artigos serão carregados automaticamente quando disponíveis.</p>
            </motion.div>
          )}
          
          {articles.map((article, index) => (
            <motion.div
              key={`article-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CaseStudyCard 
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
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Outros Case Studies */}
      {caseStudies.filter(study => !study.featured).length > 0 && (
        <section>
          <SectionTitle 
            title="Outros Projetos" 
            subtitle="Pesquisas e experimentos em UX/UI"
            icon={<FileText className="w-5 h-5" />}
            level={2}
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {caseStudies
              .filter(study => !study.featured)
              .map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CaseStudyCard 
                    title={study.title}
                    description={study.description}
                    date={`${study.duration} • ${study.role}`}
                    readTime={study.tags.slice(0, 2).join(', ')}
                    imageUrl={study.imageUrl}
                    url={study.url}
                  />
                </motion.div>
              ))}
          </motion.div>
        </section>
      )}
    </div>
  );
};

export default UxUi; 