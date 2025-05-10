import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Frown, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO/SEO';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-tech-dark text-tech-light p-4">
      <SEO 
        title="Página não encontrada | Jackson Porciúncula" 
        description="A página que você está procurando não existe ou foi movida."
        url={location.pathname}
      />
      
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-tech-purple/20 flex items-center justify-center">
            <Frown size={40} className="text-tech-purple" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-tech-purple">
          404
        </h1>
        
        <h2 className="text-xl md:text-2xl text-white mb-2">Página não encontrada</h2>
        
        <p className="text-gray-400 mb-8">
          A página que você está procurando não existe ou foi movida para outro endereço.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button 
              className="bg-tech-blue hover:bg-tech-blue/80 text-white flex items-center gap-2"
            >
              <Home size={18} />
              Voltar para o início
            </Button>
          </Link>
          
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="border-tech-purple/30 text-tech-purple hover:bg-tech-purple/10 flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Voltar
          </Button>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-20">
        <div className="absolute inset-0 animated-gradient"></div>
      </div>
    </div>
  );
};

export default NotFound;
