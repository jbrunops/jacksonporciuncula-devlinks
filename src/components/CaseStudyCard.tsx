import React from 'react';
import { FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type CaseStudyCardProps = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageUrl?: string;
  url: string;
  className?: string;
};

const CaseStudyCard = ({ title, description, date, readTime, imageUrl, url, className }: CaseStudyCardProps) => {
  return (
    <motion.a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("block", className)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <article className="tech-card overflow-hidden flex flex-col md:flex-row gap-4 group">
        <div className={`w-full md:w-1/3 h-40 md:h-auto rounded-lg overflow-hidden ${!imageUrl ? 'bg-tech-blue/10' : ''}`}>
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-tech-blue">
              <FileText size={40} />
            </div>
          )}
        </div>
        <div className="w-full md:w-2/3 flex flex-col">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-tech-blue transition-colors duration-300">{title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
          <div className="mt-auto flex items-center text-xs text-gray-500">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{readTime}</span>
          </div>
        </div>
      </article>
    </motion.a>
  );
};

export default CaseStudyCard;
