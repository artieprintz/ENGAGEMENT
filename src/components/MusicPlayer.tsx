import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // We attempt to autoplay, though browsers usually block this without interaction
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        // Autoplay prevented by browser
        console.log("Autoplay blocked. User interaction required.", e);
      });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50">
      <button
        onClick={togglePlay}
        className="w-12 h-12 bg-gradient-to-r from-[#8c5e17] to-[#ba8a28] hover:from-[#9c6a1b] hover:to-[#cd9830] text-[#1c0307] rounded-full flex items-center justify-center shadow-lg shadow-[#ba8a28]/20 transition-all hover:scale-110"
        aria-label="Toggle background music"
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
      <audio ref={audioRef} src="/music.mp3" loop />
    </div>
  );
}
