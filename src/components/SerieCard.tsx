import React from 'react';
import { BookOpen, BookMarked, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

type SerieCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  url: string;
  episodeCount?: number;
  publisher: string;
  className?: string;
};

const SerieCard = ({ 
  title, 
  description, 
  imageUrl, 
  url, 
  episodeCount = 0,
  publisher,
  className 
}: SerieCardProps) => {
  return (
    <div className={cn("tech-card overflow-hidden", className)}>
      <div className="p-6">
        {/* Cabeçalho */}
        <div className="flex items-center mb-1">
          <BookMarked className="w-5 h-5 text-tech-blue mr-2" />
          <h3 className="text-sm font-medium text-gray-400">{publisher}</h3>
        </div>
        
        {/* Conteúdo principal */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Imagem ou ícone */}
          <div className={`w-full h-48 md:w-1/3 rounded-lg overflow-hidden ${!imageUrl ? 'bg-tech-blue/10 flex items-center justify-center' : ''} mt-4 md:mt-0`}>
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                <BookOpen size={60} className="text-tech-blue/50" />
              </div>
            )}
          </div>
          
          {/* Informações */}
          <div className="flex flex-col md:w-2/3">
            <h2 className="text-xl font-bold mb-2 text-gray-200">{title}</h2>
            <p className="text-gray-400 mb-6">{description}</p>
            
            {/* Episódios */}
            {episodeCount > 0 && (
              <div className="text-sm text-gray-500 mb-4">
                <span className="bg-tech-blue/20 text-tech-blue px-2 py-1 rounded-full">
                  {episodeCount} {episodeCount === 1 ? 'Episódio' : 'Episódios'}
                </span>
              </div>
            )}
            
            {/* Botão */}
            <motion.div 
              className="mt-auto"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="default" 
                  className="w-full md:w-auto bg-gradient-to-r from-tech-blue to-tech-purple"
                >
                  Ler Agora <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerieCard; 