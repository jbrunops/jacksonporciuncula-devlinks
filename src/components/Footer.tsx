import React from 'react';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className="section-fade w-full py-8 border-t border-gray-800" style={{ '--delay': 4 } as React.CSSProperties}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-500 mb-4 md:mb-0">© 2025 Jackson Porciúncula. Todos os direitos reservados.</p>
        <SocialIcons size="sm" />
      </div>
    </footer>
  );
};

export default Footer;
