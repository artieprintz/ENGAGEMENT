import React from 'react';
import { eventData } from '../data/eventData';
import { GoldFiligreeDivider, TraditionalCorner } from './TraditionalElements';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const CoupleDetailsSection: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-20 md:py-24 px-3 xs:px-4 sm:px-6">
      {/* Background Glow */}
      <div className="max-w-5xl mx-auto">
        <AnimatedSection delay={100}>
          <div className="text-center mb-8 sm:mb-12 md:mb-14">
            <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#e5c158] block mb-1.5 sm:mb-2">
              THE CELEBRATED COUPLE
            </span>
            <h2 className="font-cinzel text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#fff0b8]">
              BRIDE &amp; GROOM
            </h2>
            <GoldFiligreeDivider className="my-2 sm:my-3" />
          </div>
        </AnimatedSection>

        {/* Two Elegant Typography Panels with Center Gold & */}
        <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-4 sm:gap-6 md:gap-4">
          
          {/* LEFT PANEL: BRIDE */}
          <div className="md:col-span-5">
            <AnimatedSection delay={150}>
              <div className="relative parchment-card rounded-2xl p-5 xs:p-7 sm:p-8 md:p-10 border-2 border-[#c89d3c] shadow-xl text-center group transition-all duration-300 hover:shadow-[0_15px_40px_rgba(212,163,67,0.2)]">
                <div className="absolute top-2 left-2">
                  <TraditionalCorner position="tl" className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="absolute bottom-2 right-2">
                  <TraditionalCorner position="br" className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="absolute inset-2 border border-[#cf9e38]/30 rounded-xl pointer-events-none" />

                <div className="relative z-10">
                  <span className="inline-block px-3 py-0.5 sm:py-1 rounded-full bg-[#7a1824]/10 border border-[#7a1824]/20 font-cinzel text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#7a1824] font-bold mb-3 sm:mb-4">
                    Bride
                  </span>

                  <h3 className="font-script text-3xl xs:text-4xl sm:text-4xl md:text-5xl text-[#680b17] tracking-wide mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300 leading-tight">
                    {eventData.brideName}
                  </h3>

                  <div className="w-10 sm:w-12 h-[1px] bg-[#c89d3c] mx-auto my-2 sm:my-3" />

                  <div className="space-y-1.5 sm:space-y-2 mt-3 sm:mt-4">
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[#7d5118]">
                      <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a66f1e] shrink-0" />
                      <span className="font-cinzel text-xs sm:text-sm md:text-base font-bold tracking-wider">
                        {eventData.brideQualification}
                      </span>
                    </div>

                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[#461a20]">
                      <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a66f1e] shrink-0" />
                      <span className="font-cormorant text-sm xs:text-base sm:text-lg font-semibold">
                        Senior Associate
                      </span>
                    </div>

                    <p className="font-cormorant italic text-xs xs:text-sm sm:text-base text-[#612830]">
                      WNS Global Service
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#c89d3c]/30 flex items-center justify-center gap-2">
                    <span className="text-[10px] sm:text-xs font-cinzel tracking-widest text-[#946118] uppercase">
                      Daughter of Our Honored Family
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* CENTER: ELEGANT GOLD & */}
          <div className="md:col-span-1 flex flex-col items-center justify-center py-1 sm:py-2 md:py-0">
            <AnimatedSection delay={200}>
              <div className="relative flex items-center justify-center w-11 h-11 xs:w-13 xs:h-13 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#450e15] to-[#250409] border-2 border-[#d4a343] shadow-[0_0_20px_rgba(212,163,67,0.4)]">
                <span className="font-cormorant italic text-2xl xs:text-3xl md:text-4xl text-[#ffe394] font-bold leading-none select-none">
                  &amp;
                </span>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT PANEL: GROOM */}
          <div className="md:col-span-5">
            <AnimatedSection delay={250}>
              <div className="relative parchment-card rounded-2xl p-5 xs:p-7 sm:p-8 md:p-10 border-2 border-[#c89d3c] shadow-xl text-center group transition-all duration-300 hover:shadow-[0_15px_40px_rgba(212,163,67,0.2)]">
                <div className="absolute top-2 right-2">
                  <TraditionalCorner position="tr" className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="absolute bottom-2 left-2">
                  <TraditionalCorner position="bl" className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="absolute inset-2 border border-[#cf9e38]/30 rounded-xl pointer-events-none" />

                <div className="relative z-10">
                  <span className="inline-block px-3 py-0.5 sm:py-1 rounded-full bg-[#7a1824]/10 border border-[#7a1824]/20 font-cinzel text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#7a1824] font-bold mb-3 sm:mb-4">
                    Groom
                  </span>

                  <h3 className="font-script text-3xl xs:text-4xl sm:text-4xl md:text-5xl text-[#680b17] tracking-wide mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300 leading-tight">
                    {eventData.groomName}
                  </h3>

                  <div className="w-10 sm:w-12 h-[1px] bg-[#c89d3c] mx-auto my-2 sm:my-3" />

                  <div className="space-y-1.5 sm:space-y-2 mt-3 sm:mt-4">
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[#7d5118]">
                      <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a66f1e] shrink-0" />
                      <span className="font-cinzel text-xs sm:text-sm md:text-base font-bold tracking-wider">
                        {eventData.groomQualification}
                      </span>
                    </div>

                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[#461a20]">
                      <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a66f1e] shrink-0" />
                      <span className="font-cormorant text-sm xs:text-base sm:text-lg font-semibold">
                        Specialist Product Engineer
                      </span>
                    </div>

                    <p className="font-cormorant italic text-xs xs:text-sm sm:text-base text-[#612830]">
                      LTM (L&amp;T Groups)
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#c89d3c]/30 flex items-center justify-center gap-2">
                    <span className="text-[10px] sm:text-xs font-cinzel tracking-widest text-[#946118] uppercase">
                      Son of Our Honored Family
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};
