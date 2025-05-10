import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Music, Play, Pause, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const SpotifySection = () => {
  const [showEmbeds, setShowEmbeds] = useState(false);

  return (
    <section className="section-fade w-full mb-12" style={{ '--delay': 4 } as React.CSSProperties}>
      <SectionTitle 
        title="Música" 
        subtitle="Ouça minhas produções musicais no Spotify e SoundCloud" 
        icon={<Music className="w-5 h-5" />}
      />
      
      <div className="music-container space-y-6">
        {!showEmbeds ? (
          <div className="flex flex-col items-center justify-center p-8 border border-tech-blue/20 rounded-xl bg-tech-gray/20 space-y-4">
            <p className="text-center text-gray-300">
              Por questões de privacidade e desempenho, os players de música são carregados apenas quando você desejar.
            </p>
            <Button 
              className="bg-tech-blue hover:bg-tech-blue/80 text-white flex items-center gap-2 group"
              onClick={() => setShowEmbeds(true)}
            >
              <Play className="w-4 h-4 group-hover:animate-pulse" />
              Carregar players de música
            </Button>
          </div>
        ) : (
          <>
            {/* Spotify Embeds */}
            <div className="spotify-container space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-sm text-gray-400">Spotify</h3>
                <a 
                  href="https://open.spotify.com/artist/6bJzhcM5y3dOKCZWy13oI6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-tech-blue hover:text-tech-blue/80 flex items-center gap-1"
                >
                  Ver perfil completo <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <iframe 
                  style={{ borderRadius: '12px' }} 
                  src="https://open.spotify.com/embed/album/69qH3EILZzCBaws3uh8Sim?utm_source=generator" 
                  width="100%" 
                  height="152" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  title="Jackson Porciúncula - Spotify Album"
                  className="border border-tech-blue/20 hover:border-tech-blue/40 transition-all shadow-lg shadow-tech-blue/5"
                ></iframe>
                
                <iframe 
                  style={{ borderRadius: '12px' }} 
                  src="https://open.spotify.com/embed/track/3jcDHCRp1MYYvMFb0qsN6Y?utm_source=generator" 
                  width="100%" 
                  height="152" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  title="Jackson Porciúncula - Spotify Track"
                  className="border border-tech-blue/20 hover:border-tech-blue/40 transition-all shadow-lg shadow-tech-blue/5"
                ></iframe>
              </div>
            </div>
            
            {/* SoundCloud Embed */}
            <div className="soundcloud-container">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm text-gray-400">SoundCloud</h3>
                <a 
                  href="https://soundcloud.com/jacksonporciuncula" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-tech-blue hover:text-tech-blue/80 flex items-center gap-1"
                >
                  Ver perfil completo <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <iframe 
                width="100%" 
                height="166" 
                scrolling="no" 
                frameBorder="no" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/426611582&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                title="Jackson Porciúncula - SoundCloud Playlist"
                className="border border-tech-blue/20 hover:border-tech-blue/40 transition-all shadow-lg shadow-tech-blue/5"
              ></iframe>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SpotifySection;
