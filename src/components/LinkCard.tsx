
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type LinkCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  url: string;
  className?: string;
};

const LinkCard = ({ title, description, icon, url, className }: LinkCardProps) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("tech-card flex items-center justify-between group", className)}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-tech-blue/10 text-tech-blue">
            {icon}
          </div>
        )}
        <div>
          <h3 className="font-medium text-tech-light group-hover:text-tech-blue transition-colors">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-tech-blue transition-all transform group-hover:translate-x-1" />
    </a>
  );
};

export default LinkCard;
