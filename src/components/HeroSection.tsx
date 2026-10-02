import React from 'react';
import { eventData } from '../data/eventData';
import {
  Kuthuvilakku,
  TempleArch,
  JasmineGarlandBanner,
  BananaLeavesDecor,
  AuspiciousKalasam,
  GoldFiligreeDivider,
  TraditionalCorner,
} from './TraditionalElements';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center px-2.5 xs:px-4 sm:px-6 py-8 sm:py-14 md:py-16 overflow-hidden">
      {/* Background Ambience: Warm lighting and deep wine/maroon edges */}
      <div className="absolute inset-0 bg-[#160306] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(140,24,38,0.45)_0%,rgba(40,5,10,0.85)_60%,#120204_100%)] pointer-events-none" />

      {/* Hanging Jasmine Thoranam at the very top */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <JasmineGarlandBanner />
      </div>

      {/* Main Luxury Parchment Card */}
      <div className="relative z-10 w-full max-w-4xl mx-auto my-auto">
        <AnimatedSection delay={150}>
          <div className="relative parchment-card rounded-2xl md:rounded-3xl p-3.5 xs:p-6 sm:p-10 md:p-14 border-2 sm:border-[3px] border-[#c89d3c] shadow-[0_20px_70px_rgba(0,0,0,0.8),0_0_40px_rgba(212,163,67,0.25)] text-[#2d0a10]">
            
            {/* Inner Gold Foil Filigree Double Border */}
            <div className="absolute inset-2 sm:inset-4 border border-[#cf9e38]/70 rounded-xl md:rounded-2xl pointer-events-none" />
            <div className="absolute inset-3 sm:inset-5 border border-[#cf9e38]/30 rounded-lg md:rounded-xl pointer-events-none" />

            {/* Traditional Temple Corner Motifs */}
            <div className="absolute top-2 left-2 sm:top-5 sm:left-5">
              <TraditionalCorner position="tl" className="w-7 h-7 sm:w-12 sm:h-12" />
            </div>
            <div className="absolute top-2 right-2 sm:top-5 sm:right-5">
              <TraditionalCorner position="tr" className="w-7 h-7 sm:w-12 sm:h-12" />
            </div>
            <div className="absolute bottom-2 left-2 sm:bottom-5 sm:left-5">
              <TraditionalCorner position="bl" className="w-7 h-7 sm:w-12 sm:h-12" />
            </div>
            <div className="absolute bottom-2 right-2 sm:bottom-5 sm:right-5">
              <TraditionalCorner position="br" className="w-7 h-7 sm:w-12 sm:h-12" />
            </div>

            {/* Flanking Banana Leaves (Vazhaimaram) on larger screens */}
            <div className="hidden lg:block absolute -left-12 bottom-6">
              <BananaLeavesDecor side="left" />
            </div>
            <div className="hidden lg:block absolute -right-12 bottom-6">
              <BananaLeavesDecor side="right" />
            </div>

            {/* Temple Arch Header & Content Wrapper */}
            <TempleArch>
              <div className="text-center relative pt-2 sm:pt-4 md:pt-6">
                
                {/* Auspicious Kalasam Motif */}
                <div className="flex justify-center mb-2 sm:mb-3">
                  <AuspiciousKalasam size={54} className="drop-shadow-md sm:scale-110" />
                </div>

                {/* Blessings line */}
                <p className="font-cinzel text-[10px] xs:text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#7a1824] mb-1 sm:mb-2 px-2">
                  WITH THE BLESSINGS OF OUR PARENTS &amp; ELDERS
                </p>

                {/* Cordially invite line */}
                <p className="font-cormorant italic text-xs xs:text-sm sm:text-base md:text-lg text-[#5a2830] tracking-wider mb-2 sm:mb-3">
                  We cordially invite you to the
                </p>

                {/* Large Heading: ENGAGEMENT CEREMONY */}
                <div className="relative inline-block my-1 sm:my-2 px-2">
                  <h1 className="font-cinzel-dec text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.14em] sm:tracking-[0.18em] text-[#630b17] drop-shadow-sm leading-tight">
                    ENGAGEMENT
                  </h1>
                  <div className="font-cinzel text-lg xs:text-xl sm:text-2xl md:text-3xl tracking-[0.28em] sm:tracking-[0.35em] text-[#8e5e14] font-semibold mt-0.5 sm:mt-1">
                    CEREMONY
                  </div>
                </div>

                {/* Subtle Ornamental Divider */}
                <GoldFiligreeDivider className="my-2 sm:my-4" />

                {/* Centerpiece: Flanked by Authentic South Indian Brass Kuthuvilakku Lamps */}
                <div className="relative my-3 sm:my-6 flex items-center justify-center">
                  
                  {/* Left Kuthuvilakku Lamp */}
                  <div className="absolute -left-1 xs:left-1 sm:left-4 md:left-8 top-1/2 -translate-y-1/2">
                    <Kuthuvilakku height={210} className="w-10 xs:w-14 sm:w-20 md:w-24 opacity-90 sm:opacity-95" />
                  </div>

                  {/* Right Kuthuvilakku Lamp */}
                  <div className="absolute -right-1 xs:right-1 sm:right-4 md:right-8 top-1/2 -translate-y-1/2">
                    <Kuthuvilakku height={210} className="w-10 xs:w-14 sm:w-20 md:w-24 opacity-90 sm:opacity-95" />
                  </div>

                  {/* Main Focus: Couple Names */}
                  <div className="px-9 xs:px-12 sm:px-16 md:px-20 max-w-xl mx-auto w-full">
                    {/* Bride Name */}
                    <div className="group">
                      <h2 className="font-script text-3xl min-[360px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#6d0d19] drop-shadow-[0_2px_4px_rgba(212,163,67,0.3)] transition-transform duration-500 group-hover:scale-[1.02] tracking-wide leading-tight">
                        {eventData.brideName}
                      </h2>
                      <p className="font-cinzel text-[10px] sm:text-xs md:text-sm tracking-[0.14em] sm:tracking-[0.18em] text-[#825b1b] font-semibold mt-1">
                        {eventData.brideQualification}
                      </p>
                      <p className="font-cormorant text-[11px] sm:text-xs md:text-sm text-[#542d32] font-medium tracking-wide">
                        {eventData.brideRole}
                      </p>
                    </div>

                    {/* Ornamental Gold Symbol between names ✦ */}
                    <div className="flex items-center justify-center my-2 sm:my-4 gap-2 sm:gap-3">
                      <span className="h-[1px] w-8 xs:w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#c89d3c] to-transparent" />
                      <span className="text-lg sm:text-2xl text-[#b88523] select-none font-serif animate-pulse">
                        ✦
                      </span>
                      <span className="font-cormorant italic text-xl sm:text-3xl text-[#7a1824] px-0.5 sm:px-1 font-semibold">
                        &amp;
                      </span>
                      <span className="text-lg sm:text-2xl text-[#b88523] select-none font-serif animate-pulse">
                        ✦
                      </span>
                      <span className="h-[1px] w-8 xs:w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#c89d3c] to-transparent" />
                    </div>

                    {/* Groom Name */}
                    <div className="group">
                      <h2 className="font-script text-3xl min-[360px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#6d0d19] drop-shadow-[0_2px_4px_rgba(212,163,67,0.3)] transition-transform duration-500 group-hover:scale-[1.02] tracking-wide leading-tight">
                        {eventData.groomName}
                      </h2>
                      <p className="font-cinzel text-[10px] sm:text-xs md:text-sm tracking-[0.14em] sm:tracking-[0.18em] text-[#825b1b] font-semibold mt-1">
                        {eventData.groomQualification}
                      </p>
                      <p className="font-cormorant text-[11px] sm:text-xs md:text-sm text-[#542d32] font-medium tracking-wide">
                        {eventData.groomRole}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Small Elegant Ornamental Divider */}
                <GoldFiligreeDivider className="my-2 sm:my-4" />

                {/* Date & Time Presentation */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-10 text-[#420f16] mt-3 sm:mt-4">
                  {/* Date */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f1e5cd] border border-[#c89d3c] flex items-center justify-center text-[#7a1824] shrink-0">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="text-left">
                      <span className="block font-cinzel text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#8c591a] font-bold">
                        {eventData.day}
                      </span>
                      <span className="font-cinzel text-sm sm:text-base md:text-lg font-bold tracking-wider text-[#580d17]">
                        {eventData.date}
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:block w-[1px] h-9 bg-[#c89d3c]/40" />

                  {/* Time */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f1e5cd] border border-[#c89d3c] flex items-center justify-center text-[#7a1824] shrink-0">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="text-left">
                      <span className="block font-cinzel text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#8c591a] font-bold">
                        AUSPICIOUS MUHURTHAM
                      </span>
                      <span className="font-cinzel text-sm sm:text-base md:text-lg font-bold tracking-wider text-[#580d17]">
                        {eventData.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Venue Badge */}
                <div className="mt-4 sm:mt-5 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#ebdcc0]/70 border border-[#cf9e38]/50 text-xs sm:text-sm font-cinzel text-[#5d1620] tracking-wider max-w-[95%]">
                  <MapPin className="w-3.5 h-3.5 text-[#b0781c] shrink-0" />
                  <span className="truncate">{eventData.venue}, {eventData.location}</span>
                </div>

              </div>
            </TempleArch>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

