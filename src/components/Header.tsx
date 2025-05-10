import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const Header = () => {
  return (
    <header className="w-full py-10 flex flex-col items-center justify-center text-center px-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-tech-blue/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-tech-purple/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/20 to-tech-purple/20 rounded-full blur-xl"></div>
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-tech-blue to-tech-purple p-1 mx-auto mb-4 overflow-hidden glow">
          <Avatar className="w-full h-full">
            <AvatarImage src="https://github.com/jbrunops.png" alt="Jackson Porciúncula" />
            <AvatarFallback className="w-full h-full rounded-full bg-tech-dark flex items-center justify-center text-white text-4xl font-bold">
              J
            </AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-tech-purple">
          Jackson Porciúncula
        </h1>
        <p className="text-gray-400 mt-2 max-w-md mx-auto">
          Desenvolvedor Front-end • Escritor • Músico
        </p>
      </div>
      <nav className="flex flex-wrap gap-3 mb-6 justify-center">
        <NavButton active>Portfolio</NavButton>
        <NavButton>Projetos</NavButton>
        <NavButton>Música</NavButton>
        <NavButton>Escrita</NavButton>
      </nav>
      <div className="flex gap-3 justify-center">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-tech-gray/30 border-tech-blue/20 hover:bg-tech-gray/50 hover:border-tech-blue/50 transition-all"
          onClick={() => window.open('https://github.com/jbrunops/', '_blank')}
        >
          <GithubIcon className="h-5 w-5" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-tech-gray/30 border-tech-blue/20 hover:bg-tech-gray/50 hover:border-tech-blue/50 transition-all"
          onClick={() => window.open('https://x.com/jbrunops', '_blank')}
        >
          <TwitterIcon className="h-5 w-5" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-tech-gray/30 border-tech-blue/20 hover:bg-tech-gray/50 hover:border-tech-blue/50 transition-all"
          onClick={() => window.open('https://facebook.com/jacksonporciuncula', '_blank')}
        >
          <FacebookIcon className="h-5 w-5" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-tech-gray/30 border-tech-blue/20 hover:bg-tech-gray/50 hover:border-tech-blue/50 transition-all"
          onClick={() => window.open('https://instagram.com/jbrunops', '_blank')}
        >
          <InstagramIcon className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

type NavButtonProps = {
  active?: boolean;
  children: React.ReactNode;
};

const NavButton = ({ active, children }: NavButtonProps) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-full text-sm transition-all",
        active 
          ? "bg-gradient-to-r from-tech-blue to-tech-purple text-white font-medium shadow-md shadow-tech-blue/20"
          : "bg-tech-gray/50 text-gray-400 hover:bg-tech-gray hover:shadow-sm hover:shadow-tech-purple/10"
      )}
    >
      {children}
    </button>
  );
};

// Import icons
import { Github as GithubIcon, Twitter as TwitterIcon, Facebook as FacebookIcon, Instagram as InstagramIcon } from 'lucide-react';

export default Header;
