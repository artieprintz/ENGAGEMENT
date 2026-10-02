import React from 'react';
import { eventData } from '../data/eventData';
import { GoldFiligreeDivider, TraditionalCorner } from './TraditionalElements';
import { ExternalLink, MapPin, Navigation, Compass } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const VenueSection: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-18 md:py-24 px-3 xs:px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection delay={100}>
          <div className="text-center mb-8 sm:mb-10">
            <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#e5c158] block mb-1.5 sm:mb-2">
              LOCATION &amp; DIRECTIONS
            </span>
            <h2 className="font-cinzel text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#fff0b8]">
              JOIN US AT THE VENUE
            </h2>
            <GoldFiligreeDivider className="my-2 sm:my-3" />
          </div>
        </AnimatedSection>

        {/* Premium Decorative Map / Location Card */}
        <AnimatedSection delay={150}>
          <div className="relative parchment-card rounded-2xl md:rounded-3xl p-4 xs:p-6 sm:p-10 md:p-12 border-2 border-[#c89d3c] shadow-2xl text-center overflow-hidden">
            
            {/* Subtle Abstract Map & Kolam Geometric Pattern Background (instead of a static screenshot) */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none select-none">
              <svg viewBox="0 0 800 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Abstract Road Grid Lines */}
                <path d="M0 120 L800 120 M0 260 L800 260 M0 400 L800 400" stroke="#7a1824" strokeWidth="3" />
                <path d="M180 0 L180 500 M400 0 L400 500 M620 0 L620 500" stroke="#7a1824" strokeWidth="3" />
                {/* Diagonal arterial highways */}
                <path d="M50 0 L750 500 M750 0 L50 500" stroke="#7a1824" strokeWidth="2" strokeDasharray="6 6" />
                {/* Concentric rings representing Pallavaram Chennai hub */}
                <circle cx="400" cy="250" r="80" stroke="#7a1824" strokeWidth="2" />
                <circle cx="400" cy="250" r="160" stroke="#7a1824" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="400" cy="250" r="240" stroke="#7a1824" strokeWidth="1" />
              </svg>
            </div>

            {/* Traditional Corners */}
            <div className="absolute top-2 left-2 sm:top-5 sm:left-5">
              <TraditionalCorner position="tl" className="w-6 h-6 sm:w-10 sm:h-10" />
            </div>
            <div className="absolute top-2 right-2 sm:top-5 sm:right-5">
              <TraditionalCorner position="tr" className="w-6 h-6 sm:w-10 sm:h-10" />
            </div>
            <div className="absolute bottom-2 left-2 sm:bottom-5 sm:left-5">
              <TraditionalCorner position="bl" className="w-6 h-6 sm:w-10 sm:h-10" />
            </div>
            <div className="absolute bottom-2 right-2 sm:bottom-5 sm:right-5">
              <TraditionalCorner position="br" className="w-6 h-6 sm:w-10 sm:h-10" />
            </div>

            <div className="absolute inset-2 sm:inset-4 border border-[#cf9e38]/40 rounded-xl pointer-events-none" />

            {/* Main Venue Information */}
            <div className="relative z-10 max-w-2xl mx-auto py-2">
              
              {/* Animated Location Pin Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#68111c] to-[#39060c] border-2 border-[#d4a343] text-[#fff0b8] mb-3 sm:mb-5 shadow-[0_4px_20px_rgba(212,163,67,0.35)]">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce text-[#ffd56b]" />
              </div>

              <span className="block font-cinzel text-[10px] sm:text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#8e5e14] font-bold mb-1 sm:mb-2">
                RECEPTION &amp; ENGAGEMENT VENUE
              </span>

              {/* Large Typography: CANTONMENT MINI HALL */}
              <h3 className="font-cinzel text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[0.12em] sm:tracking-[0.15em] text-[#630b17] leading-tight mb-1 sm:mb-2 px-1">
                {eventData.venue.toUpperCase()}
              </h3>

              {/* PALLAVARAM, CHENNAI */}
              <p className="font-cinzel text-base xs:text-lg sm:text-xl md:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#825b1b] uppercase mt-0.5 sm:mt-1 mb-3 sm:mb-4">
                {eventData.location.toUpperCase()}
              </p>

              <p className="font-cormorant italic text-sm xs:text-base sm:text-lg text-[#552730] max-w-md mx-auto mb-6 sm:mb-8 px-2 leading-relaxed">
                Easily accessible via Grand Southern Trunk (GST) Road, with ample parking space and welcoming ambiance for all guests.
              </p>

              {/* Action Buttons: OPEN IN GOOGLE MAPS */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
                <a
                  href={eventData.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 xs:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#550f17] via-[#6e1420] to-[#550f17] hover:from-[#6b141e] hover:to-[#6b141e] border-2 border-[#c89d3c] hover:border-[#ffe18d] text-[#faf6ee] font-cinzel font-bold text-xs xs:text-sm sm:text-base tracking-[0.18em] sm:tracking-[0.2em] uppercase shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_35px_rgba(212,163,67,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 min-h-[48px]"
                >
                  <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#f5df88] shrink-0" />
                  <span>OPEN IN GOOGLE MAPS</span>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f5df88] shrink-0" />
                </a>
              </div>

              <div className="mt-5 sm:mt-6 flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-cinzel text-[#825b1b] tracking-wider sm:tracking-widest uppercase">
                <Navigation className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#b0781c]" />
                <span>Direct Link: Pallavaram, Chennai</span>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
