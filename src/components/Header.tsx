import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import SocialIcons from './SocialIcons';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

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
        <NavLink to="/" active={path === "/"}>Portfolio</NavLink>
        <NavLink to="/projetos" active={path === "/projetos"}>Projetos</NavLink>
        <NavLink to="/ux-ui" active={path === "/ux-ui"}>UX/UI</NavLink>
        <NavLink to="/musica" active={path === "/musica"}>Música</NavLink>
        <NavLink to="/escrita" active={path === "/escrita"}>Escrita</NavLink>
      </nav>
      
      <SocialIcons className="mt-1" />
    </header>
  );
};

type NavLinkProps = {
  to: string;
  active?: boolean;
  children: React.ReactNode;
};

const NavLink = ({ to, active, children }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "px-4 py-2 rounded-full text-sm transition-all duration-300 font-medium",
        active 
          ? "bg-gradient-to-r from-tech-blue to-tech-purple text-white shadow-md shadow-tech-blue/20 scale-105"
          : "bg-tech-gray/30 text-gray-300 hover:bg-tech-gray/50 hover:text-white hover:shadow-sm hover:shadow-tech-purple/20 hover:scale-105 border border-transparent hover:border-tech-purple/30"
      )}
    >
      {children}
    </Link>
  );
};

export default Header;
