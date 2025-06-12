import React from 'react';
import { Code } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { softwareProjects } from '@/data/projects';

const Softwares = () => {
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
      <section>
        <SectionTitle 
          title="Softwares" 
          subtitle="Aplicações e ferramentas desenvolvidas para resolver problemas específicos" 
          icon={<Code className="w-5 h-5" />}
          level={2}
        />
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {softwareProjects.map((project, index) => (
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

export default Softwares; 