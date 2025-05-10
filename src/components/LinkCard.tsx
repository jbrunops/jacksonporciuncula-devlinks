import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

type LinkCardProps = {
  title: string;
  description: string;
  url: string;
  icon?: ReactNode;
  className?: string;
};

const LinkCard = ({ title, description, url, icon, className }: LinkCardProps) => {
  return (
    <motion.a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("block", className)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="link-card flex items-center gap-4 group">
        <div className="flex-1">
          <h3 className="font-medium text-white mb-1 group-hover:text-tech-blue transition-colors duration-300">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-tech-gray/50 text-gray-400 group-hover:bg-tech-blue/20 group-hover:text-tech-blue transition-all duration-300">
          {icon || <ArrowUpRight size={18} />}
        </div>
      </div>
    </motion.a>
  );
};

export default LinkCard;
