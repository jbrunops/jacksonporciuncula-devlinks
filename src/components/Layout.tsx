import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Sparkles, Mountain, Stars, GalleryVertical } from 'lucide-react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col bg-tech-dark text-tech-light relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-40 right-10 text-tech-blue/20 hidden lg:block animate-pulse">
        <Sparkles size={120} />
      </div>
      <div className="absolute bottom-20 left-10 text-tech-purple/20 hidden lg:block">
        <Mountain size={160} />
      </div>
      <div className="absolute top-1/3 left-1/4 text-tech-blue/10 hidden lg:block">
        <Stars size={100} />
      </div>
      <div className="absolute bottom-1/3 right-1/4 text-tech-purple/10 hidden lg:block">
        <GalleryVertical size={80} />
      </div>
      
      {/* Animated light blurs */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-tech-blue/5 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 rounded-full bg-tech-purple/5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <main className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-8 relative z-10">
        <Header />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
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