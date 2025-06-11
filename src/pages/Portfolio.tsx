import React from 'react';
import { Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { portfolioProjects } from '@/data/projects';

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
      {/* Projetos Principais */}
      <section>
        <SectionTitle 
          title="Projetos" 
          subtitle="Portfolio completo com projetos desenvolvidos" 
          icon={<Layers className="w-5 h-5" />}
          level={2}
        />
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {portfolioProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio; 