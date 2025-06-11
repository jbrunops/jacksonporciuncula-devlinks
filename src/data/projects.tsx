import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import type { Project } from '@/types';

interface DevProject {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

export const devProjects: DevProject[] = [
  {
    title: "Casa dos Escritores",
    description: "Plataforma para escritores compartilharem e desenvolverem seus trabalhos",
    url: "https://www.casadosescritores.com.br",
    icon: <ExternalLink size={20} />
  },
  {
    title: "Quero Ser Católico",
    description: "Site educacional sobre catolicismo e formação religiosa",
    url: "https://www.querosercatolico.com.br",
    icon: <ExternalLink size={20} />
  }
];

export const portfolioProjects: Project[] = [
  {
    id: 'casa-dos-escritores',
    title: "Casa dos Escritores",
    description: "Plataforma completa para escritores compartilharem e desenvolverem seus trabalhos colaborativamente",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://www.casadosescritores.com.br",
    githubUrl: "https://github.com/jbrunops/casa-dos-escritores",
    featured: true,
    category: 'fullstack',
    status: 'completed',
    createdAt: new Date('2023-08-15'),
    updatedAt: new Date('2024-12-20'),
  },
  {
    id: 'quero-ser-catolico',
    title: "Quero Ser Católico",
    description: "Site educacional interativo sobre catolicismo e formação religiosa com conteúdo multimídia",
    technologies: ["React", "Next.js", "Sanity CMS", "TypeScript", "Styled Components"],
    liveUrl: "https://www.querosercatolico.com.br",
    featured: true,
    category: 'frontend',
    status: 'completed',
    createdAt: new Date('2023-06-10'),
    updatedAt: new Date('2024-11-15'),
  },

]; 