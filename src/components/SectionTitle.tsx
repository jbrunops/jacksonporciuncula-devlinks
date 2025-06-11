import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
  icon?: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const SectionTitle = ({ 
  title, 
  subtitle, 
  className, 
  icon, 
  level = 2 
}: SectionTitleProps) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <motion.div 
      ref={elementRef}
      className={cn("mb-6 text-left sm:text-left text-center", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
        {icon && (
          <motion.div 
            className="text-tech-blue"
            initial={{ scale: 0, rotate: -180 }}
            animate={isIntersecting ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
          >
            {icon}
          </motion.div>
        )}
        <HeadingTag 
          className="text-xl font-bold text-tech-light bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-tech-purple"
        >
          {title}
        </HeadingTag>
      </div>
      {subtitle && (
        <motion.p 
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
