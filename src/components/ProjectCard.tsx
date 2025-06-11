import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: 'short'
    }).format(date);
  };

  return (
    <motion.div
      ref={elementRef}
      className="group relative bg-tech-gray/20 backdrop-blur-sm border border-tech-blue/10 rounded-lg p-6 transition-all duration-300 hover:border-tech-blue/30 hover:bg-tech-gray/30"
      variants={cardVariants}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      role="article"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Featured indicator */}
      {project.featured && (
        <div className="absolute top-3 right-3">
          <div className="w-3 h-3 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full"></div>
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        <h3 
          id={`project-title-${project.id}`}
          className="text-xl font-semibold text-white mb-2 group-hover:text-tech-blue transition-colors duration-200"
        >
          {project.title}
        </h3>
        
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(project.updatedAt)}</span>
          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
          <span className="text-green-400 text-xs font-medium">Concluído</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-tech-blue/10 text-tech-blue border border-tech-blue/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-tech-blue to-tech-purple text-white text-sm font-medium rounded-md hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-tech-blue focus:ring-offset-2 focus:ring-offset-tech-dark"
            aria-label={`Ver projeto ${project.title} ao vivo`}
          >
            <ExternalLink className="w-4 h-4" />
            Ver Live
          </a>
        )}
        
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-tech-gray/40 text-gray-300 text-sm font-medium rounded-md border border-gray-600 hover:bg-tech-gray/60 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-tech-dark"
            aria-label={`Ver código do projeto ${project.title} no GitHub`}
          >
            <Github className="w-4 h-4" />
            Código
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard; 