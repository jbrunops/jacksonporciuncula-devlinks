import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
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
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'archived': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Concluído';
      case 'in-progress': return 'Em Andamento';
      case 'archived': return 'Arquivado';
      default: return status;
    }
  };

  return (
    <motion.article
      ref={elementRef}
      className="group relative bg-tech-gray/40 backdrop-blur-sm border border-tech-blue/20 rounded-xl p-6 transition-all duration-300 hover:border-tech-blue/40 hover:shadow-lg hover:shadow-tech-blue/10 overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      whileHover={{ y: -5 }}
      role="article"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 to-tech-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4">
          <Badge className="bg-tech-blue/20 text-tech-blue border-tech-blue/30">
            Destaque
          </Badge>
        </div>
      )}

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 
              id={`project-title-${project.id}`}
              className="text-lg font-semibold text-white mb-2 group-hover:text-tech-blue transition-colors"
            >
              {project.title}
            </h3>
            
            {/* Status and Date */}
            <div className="flex items-center gap-2 mb-3">
              <Badge 
                variant="outline" 
                className={`text-xs px-2 py-1 ${getStatusColor(project.status)}`}
              >
                {getStatusLabel(project.status)}
              </Badge>
              <div className="flex items-center gap-1 text-gray-400 text-xs">
                <Calendar className="w-3 h-3" />
                <span>{formatDate(project.updatedAt)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex items-center gap-1 mb-2">
            <Tag className="w-3 h-3 text-gray-400" />
            <span className="text-xs text-gray-400 font-medium">Tecnologias:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="secondary"
                className="text-xs bg-tech-purple/20 text-tech-purple border-tech-purple/30 hover:bg-tech-purple/30 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-2 text-tech-blue border-tech-blue/30 hover:bg-tech-blue/10"
              asChild
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver projeto ${project.title} ao vivo`}
              >
                <ExternalLink className="w-3 h-3" />
                <span>Ver Live</span>
              </a>
            </Button>
          )}
          
          {project.githubUrl && (
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-2 text-gray-300 border-gray-600 hover:bg-gray-800"
              asChild
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver código do projeto ${project.title} no GitHub`}
              >
                <Github className="w-3 h-3" />
                <span>Código</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard; 