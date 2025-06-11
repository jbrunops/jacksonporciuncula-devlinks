import React from 'react';
import { Code, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import LinkCard from '@/components/LinkCard';
import ProjectCard from '@/components/ProjectCard';
import { devProjects, portfolioProjects } from '@/data/projects';

const Portfolio = () => {
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
      {/* Projetos Destacados */}
      <section>
        <SectionTitle 
          title="Projetos Destacados" 
          subtitle="Portfolio completo com projetos desenvolvidos recentemente" 
          icon={<Layers className="w-5 h-5" />}
          level={2}
        />
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {portfolioProjects
            .filter(project => project.featured)
            .map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project}
                index={index}
              />
            ))}
        </motion.div>
      </section>

      {/* Links Rápidos */}
      <section>
        <SectionTitle 
          title="Links Rápidos" 
          subtitle="Acesso direto aos principais trabalhos em produção" 
          icon={<Code className="w-5 h-5" />}
          level={2}
        />
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {devProjects.map((project, index) => (
            <LinkCard 
              key={`${project.title}-${index}`}
              title={project.title}
              description={project.description}
              icon={project.icon}
              url={project.url}
            />
          ))}
        </motion.div>
      </section>

      {/* Todos os Projetos */}
      {portfolioProjects.length > portfolioProjects.filter(p => p.featured).length && (
        <section>
          <SectionTitle 
            title="Outros Projetos" 
            subtitle="Projetos adicionais e experimentos" 
            icon={<Code className="w-5 h-5" />}
            level={2}
          />
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {portfolioProjects
              .filter(project => !project.featured)
              .map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
          </motion.div>
        </section>
      )}
    </div>
  );
};

export default Portfolio; 