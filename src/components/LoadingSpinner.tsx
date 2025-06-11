import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-[400px] space-y-4"
      role="status"
      aria-label="Carregando conteúdo"
    >
      <motion.div
        className="relative w-16 h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Spinner externo */}
        <motion.div
          className="absolute inset-0 border-4 border-tech-blue/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Spinner interno */}
        <motion.div
          className="absolute inset-2 border-4 border-tech-purple/30 rounded-full border-t-tech-purple"
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Centro pulsante */}
        <motion.div
          className="absolute inset-6 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      <motion.p
        className="text-gray-400 text-sm font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Carregando...
      </motion.p>
    </div>
  );
};

export default LoadingSpinner; 