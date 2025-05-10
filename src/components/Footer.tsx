
import React from 'react';
import { Github, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/jbrunops/", label: "GitHub" },
    { icon: <Twitter size={20} />, url: "https://x.com/jbrunops", label: "X (Twitter)" },
    { icon: <Facebook size={20} />, url: "https://facebook.com/jacksonporciuncula", label: "Facebook" },
    { icon: <Instagram size={20} />, url: "https://instagram.com/jbrunops", label: "Instagram" },
    { icon: <Mail size={20} />, url: "mailto:contato@exemplo.com", label: "Email" }
  ];

  return (
    <footer className="section-fade w-full py-8 border-t border-gray-800" style={{ '--delay': 4 } as React.CSSProperties}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-500 mb-4 md:mb-0">© 2025 Jackson Porciúncula. Todos os direitos reservados.</p>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-tech-gray flex items-center justify-center text-gray-400 hover:bg-tech-blue hover:text-white transition-all"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
