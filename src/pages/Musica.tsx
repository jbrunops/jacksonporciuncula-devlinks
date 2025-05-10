import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Music, Disc, Radio } from 'lucide-react';

const Musica = () => {
  return (
    <>
      <SectionTitle 
        title="Música" 
        subtitle="Ouça minhas produções musicais no Spotify e SoundCloud" 
        icon={<Music className="w-5 h-5" />}
      />
      
      <div className="space-y-8">
        {/* Spotify Embeds */}
        <div className="spotify-section">
          <div className="flex items-center mb-4 justify-center sm:justify-start">
            <Disc className="w-4 h-4 text-tech-blue mr-2" />
            <h3 className="text-base font-medium text-gray-300">Spotify</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="tech-card p-4">
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
                className="w-full"
              ></iframe>
            </div>
            
            <div className="tech-card p-4">
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
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* SoundCloud Embed */}
        <div className="soundcloud-section">
          <div className="flex items-center mb-4 justify-center sm:justify-start">
            <Radio className="w-4 h-4 text-tech-purple mr-2" />
            <h3 className="text-base font-medium text-gray-300">SoundCloud</h3>
          </div>
          
          <div className="tech-card p-4">
            <iframe 
              width="100%" 
              height="166" 
              scrolling="no" 
              frameBorder="no" 
              allow="autoplay" 
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/426611582&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              title="SoundCloud Playlist Embed"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Musica; 