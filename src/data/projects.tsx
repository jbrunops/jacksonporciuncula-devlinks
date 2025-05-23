import React from 'react';
import { ExternalLink, Gamepad2 } from 'lucide-react';

export const devProjects = [
  {
    title: "JackMine",
    description: "Plataforma completa para servidor de Minecraft com sistema de pagamentos, integração automática e gerenciamento de jogadores",
    url: "https://jackmine.vercel.app/",
    icon: <Gamepad2 size={20} />
  },
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