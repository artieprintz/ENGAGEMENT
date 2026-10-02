import React from 'react';
import { GoldFiligreeDivider, TraditionalCorner } from './TraditionalElements';
import { AnimatedSection } from './AnimatedSection';

export const InvitationSection: React.FC = () => {
  return (
    <section className="relative py-10 sm:py-16 md:py-20 px-3 xs:px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection delay={100}>
          {/* Elegant Traditional Ornamental Frame */}
          <div className="relative parchment-card rounded-2xl md:rounded-3xl p-4 xs:p-7 sm:p-10 md:p-14 border-2 border-[#c89d3c] shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-[#2d0a10] text-center overflow-hidden">
            
            {/* Subtle watermark background motif */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none select-none">
              <svg viewBox="0 0 200 200" className="w-80 h-80 fill-current text-[#7a1824]">
                <circle cx="100" cy="100" r="80" stroke="#7a1824" strokeWidth="2" fill="none" />
                <circle cx="100" cy="100" r="60" stroke="#7a1824" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                <path d="M100 20 L100 180 M20 100 L180 100" stroke="#7a1824" strokeWidth="1" />
                <polygon points="100,30 115,85 170,100 115,115 100,170 85,115 30,100 85,85" fill="#7a1824" opacity="0.3" />
              </svg>
            </div>

            {/* Corner Filigree */}
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
              <TraditionalCorner position="tl" className="w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
              <TraditionalCorner position="tr" className="w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
              <TraditionalCorner position="bl" className="w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
              <TraditionalCorner position="br" className="w-7 h-7 sm:w-10 sm:h-10" />
            </div>

            {/* Inner Accent Border */}
            <div className="absolute inset-2 sm:inset-4 border border-[#cf9e38]/50 rounded-xl pointer-events-none" />

            {/* Floral Header Accent */}
            <div className="relative z-10">
              <span className="text-xl sm:text-2xl text-[#b88523] select-none font-serif">
                ⚜
              </span>
              <h2 className="font-cinzel text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.18em] sm:tracking-[0.25em] text-[#630b17] mt-1 mb-1 sm:mb-2 px-2">
                A BEAUTIFUL BEGINNING
              </h2>
              <GoldFiligreeDivider className="my-1.5 sm:my-2" />
            </div>

            {/* Invitation Message Body */}
            <div className="relative z-10 px-1 sm:px-6 my-3 sm:my-4">
              <p className="font-cormorant italic text-base xs:text-lg sm:text-xl md:text-2xl text-[#3b1218] leading-relaxed md:leading-loose font-normal">
                &ldquo;With immense joy and the blessings of our parents and elders, we cordially invite you to grace the engagement ceremony of{" "}
                <span className="font-semibold text-[#660c18] not-italic font-cinzel text-sm xs:text-base sm:text-lg tracking-wider">
                  Leelavarshini
                </span>{" "}
                &amp;{" "}
                <span className="font-semibold text-[#660c18] not-italic font-cinzel text-sm xs:text-base sm:text-lg tracking-wider">
                  Dineshkumar
                </span>{" "}
                and bless the couple as they begin their beautiful journey together.&rdquo;
              </p>
            </div>

            {/* Auspicious Footnote */}
            <div className="relative z-10 pt-1 sm:pt-2 flex items-center justify-center gap-2 sm:gap-3">
              <span className="h-[1px] w-8 sm:w-12 bg-[#c89d3c]/60" />
              <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#8c591a] font-semibold">
                Shubh Muhurtham
              </span>
              <span className="h-[1px] w-8 sm:w-12 bg-[#c89d3c]/60" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
