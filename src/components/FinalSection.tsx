import React from 'react';
import { GoldFiligreeDivider, TraditionalCorner, AuspiciousKalasam } from './TraditionalElements';
import { AnimatedSection } from './AnimatedSection';

export const FinalSection: React.FC = () => {
  return (
    <footer className="relative py-14 sm:py-24 md:py-28 px-3 xs:px-4 sm:px-6 overflow-hidden">
      {/* Background Ambience */}
      <div className="max-w-3xl mx-auto">
        <AnimatedSection delay={100}>
          {/* Deep Maroon Background with Gold Ornamental Frame */}
          <div className="relative maroon-card rounded-2xl md:rounded-3xl p-5 xs:p-8 sm:p-14 md:p-16 border-2 sm:border-[3px] border-[#c89d3c] text-center overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.8),0_0_35px_rgba(212,163,67,0.3)]">
            
            {/* Gold Ornamental Corners */}
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

            {/* Double Gold Line Border */}
            <div className="absolute inset-2 sm:inset-5 border border-[#cf9e38]/50 rounded-xl md:rounded-2xl pointer-events-none" />
            <div className="absolute inset-3 sm:inset-6 border border-[#cf9e38]/20 rounded-lg md:rounded-xl pointer-events-none" />

            <div className="relative z-10 max-w-xl mx-auto">
              {/* Top Auspicious Kalasam */}
              <div className="flex justify-center mb-3 sm:mb-4">
                <AuspiciousKalasam size={46} className="sm:scale-110" />
              </div>

              {/* Closing Headline */}
              <h2 className="font-cinzel text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.14em] sm:tracking-[0.18em] text-[#fff4d1] leading-snug uppercase mb-3 sm:mb-4 px-1">
                YOUR PRESENCE WILL MAKE<br />
                OUR CELEBRATION<br />
                EVEN MORE SPECIAL.
              </h2>

              <GoldFiligreeDivider className="my-3 sm:my-5" />

              {/* With Love, The Families Of */}
              <div className="space-y-2 sm:space-y-3 my-4 sm:my-6">
                <p className="font-cormorant italic text-base sm:text-lg md:text-xl text-[#f3dfba] tracking-widest uppercase">
                  WITH LOVE,
                </p>

                <p className="font-cinzel text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#e5c158]">
                  THE FAMILIES OF
                </p>

                <div className="py-1 sm:py-2">
                  <p className="font-cinzel-dec text-xl xs:text-2xl sm:text-3xl md:text-4xl text-gold-gradient font-bold tracking-[0.14em] sm:tracking-[0.2em] leading-tight">
                    LEELAVARSHINI
                  </p>
                  <span className="font-cormorant italic text-xl sm:text-2xl text-[#ffd773] my-0.5 sm:my-1 inline-block">
                    &amp;
                  </span>
                  <p className="font-cinzel-dec text-xl xs:text-2xl sm:text-3xl md:text-4xl text-gold-gradient font-bold tracking-[0.14em] sm:tracking-[0.2em] leading-tight">
                    DINESHKUMAR
                  </p>
                </div>
              </div>

              <GoldFiligreeDivider className="my-3 sm:my-4" />

              {/* Traditional Gold Ornamental Symbol Underneath */}
              <div className="flex flex-col items-center justify-center pt-1 sm:pt-2">
                <span className="text-2xl sm:text-3xl text-[#ffd875] select-none font-serif animate-pulse">
                  ⚜
                </span>
                <p className="font-cormorant italic text-xs sm:text-sm text-[#e8d5b5]/70 mt-2 sm:mt-3 tracking-wider px-2">
                  Cantonment Mini Hall, Pallavaram, Chennai • 22 November 2026
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};
