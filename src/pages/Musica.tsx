import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Music } from 'lucide-react';

const Musica = () => {
  return (
    <>
      <SectionTitle 
        title="Música" 
        subtitle="Ouça minhas produções musicais no Spotify e SoundCloud" 
        icon={<Music className="w-5 h-5" />}
      />
      
      <div className="music-container space-y-6">
        {/* Spotify Embeds */}
        <div className="spotify-container space-y-4">
          <h3 className="text-sm text-gray-400">Spotify</h3>
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
              title="Spotify Album Embed"
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
              title="Spotify Track Embed"
              className="border border-tech-blue/20 hover:border-tech-blue/40 transition-all shadow-lg shadow-tech-blue/5"
            ></iframe>
          </div>
        </div>
        
        {/* SoundCloud Embed */}
        <div className="soundcloud-container">
          <h3 className="text-sm text-gray-400 mb-4">SoundCloud</h3>
          <iframe 
            width="100%" 
            height="166" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/426611582&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            title="SoundCloud Playlist Embed"
            className="border border-tech-blue/20 hover:border-tech-blue/40 transition-all shadow-lg shadow-tech-blue/5"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Musica; 