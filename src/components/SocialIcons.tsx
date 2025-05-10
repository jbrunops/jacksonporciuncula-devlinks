import React from 'react';
import { Button } from './ui/button';
import { Github, Twitter, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

type SocialIconProps = {
  platform: 'github' | 'twitter' | 'facebook' | 'instagram' | 'linkedin' | 'email';
  username: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({ 
  platform, 
  username, 
  size = 'md',
  className = ''
}) => {
  const sizes = {
    sm: { button: 'h-8 w-8', icon: 'h-4 w-4' },
    md: { button: 'h-10 w-10', icon: 'h-5 w-5' },
    lg: { button: 'h-12 w-12', icon: 'h-6 w-6' },
  };

  const getUrl = () => {
    switch (platform) {
      case 'github':
        return `https://github.com/${username}`;
      case 'twitter':
        return `https://x.com/${username}`;
      case 'facebook':
        return `https://facebook.com/${username}`;
      case 'instagram':
        return `https://instagram.com/${username}`;
      case 'linkedin':
        return `https://linkedin.com/in/${username}`;
      case 'email':
        return `mailto:${username}`;
      default:
        return '#';
    }
  };

  const getIcon = () => {
    switch (platform) {
      case 'github':
        return <Github className={sizes[size].icon} />;
      case 'twitter':
        return <Twitter className={sizes[size].icon} />;
      case 'facebook':
        return <Facebook className={sizes[size].icon} />;
      case 'instagram':
        return <Instagram className={sizes[size].icon} />;
      case 'linkedin':
        return <Linkedin className={sizes[size].icon} />;
      case 'email':
        return <Mail className={sizes[size].icon} />;
      default:
        return null;
    }
  };

  const getHoverClass = () => {
    switch (platform) {
      case 'github':
        return 'hover:bg-github';
      case 'twitter':
        return 'hover:bg-twitter';
      case 'facebook':
        return 'hover:bg-facebook';
      case 'instagram':
        return 'hover:bg-instagram';
      case 'linkedin':
        return 'hover:bg-linkedin';
      case 'email':
        return 'hover:bg-blue-500';
      default:
        return '';
    }
  };

  return (
    <Button 
      variant="outline" 
      size="icon" 
      className={cn(
        "rounded-full bg-tech-gray/30 border-tech-blue/20 hover:border-white/50 hover:text-white transition-all duration-300",
        getHoverClass(),
        sizes[size].button,
        className
      )}
      onClick={() => window.open(getUrl(), '_blank')}
      aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
    >
      {getIcon()}
    </Button>
  );
};

type SocialIconsProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const SocialIcons: React.FC<SocialIconsProps> = ({ size = 'md', className = '' }) => {
  return (
    <div className={`flex gap-3 justify-center ${className}`}>
      <SocialIcon platform="github" username="jbrunops" size={size} />
      <SocialIcon platform="twitter" username="jbrunops" size={size} />
      <SocialIcon platform="facebook" username="jacksonporciuncula" size={size} />
      <SocialIcon platform="instagram" username="jbrunops" size={size} />
      <SocialIcon platform="linkedin" username="jbrunops" size={size} />
      <SocialIcon platform="email" username="jbrunops@outlook.com" size={size} />
    </div>
  );
};

export default SocialIcons;
export { SocialIcon }; 