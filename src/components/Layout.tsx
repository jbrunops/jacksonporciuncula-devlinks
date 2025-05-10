import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Sparkles, Mountain, Stars, GalleryVertical } from 'lucide-react';

type LayoutProps = {
  children: ReactNode;
};

// Variantes de animação para melhorar a transição entre páginas
const pageVariants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.95
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -40,
    scale: 0.95
  }
};

const pageTransition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  duration: 0.4
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col bg-tech-dark text-tech-light relative overflow-hidden">
      {/* Background decoration elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="absolute top-40 right-10 text-tech-blue/20 hidden lg:block"
      >
        <Sparkles size={120} />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute bottom-20 left-10 text-tech-purple/20 hidden lg:block"
      >
        <Mountain size={160} />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute top-1/3 left-1/4 text-tech-blue/10 hidden lg:block"
      >
        <Stars size={100} />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-1/3 right-1/4 text-tech-purple/10 hidden lg:block"
      >
        <GalleryVertical size={80} />
      </motion.div>
      
      {/* Animated light blurs */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-tech-blue/5 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 rounded-full bg-tech-purple/5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <main className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-8 relative z-10">
        <Header />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="glass-effect p-4 sm:p-6 md:p-8 mb-8 rounded-xl"
          >
            {children}
          </motion.div>
        </AnimatePresence>
        
        <Footer />
      </main>
      
      {/* Animated gradient overlay */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 animated-gradient"></div>
      </div>
    </div>
  );
};

export default Layout; 