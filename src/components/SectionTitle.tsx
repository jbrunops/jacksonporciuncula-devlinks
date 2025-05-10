import React from 'react';
import { cn } from '@/lib/utils';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
  icon?: React.ReactNode;
};

const SectionTitle = ({ title, subtitle, className, icon }: SectionTitleProps) => {
  return (
    <div className={cn("mb-6 text-left sm:text-left text-center", className)}>
      <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
        {icon && <div className="text-tech-blue">{icon}</div>}
        <h2 className="text-xl font-bold text-tech-light bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-tech-purple">{title}</h2>
      </div>
      {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
