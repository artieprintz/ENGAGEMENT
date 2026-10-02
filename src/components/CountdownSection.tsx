import React, { useState, useEffect } from 'react';
import { eventData } from '../data/eventData';
import { GoldFiligreeDivider, TraditionalCorner } from './TraditionalElements';
import { AnimatedSection } from './AnimatedSection';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const CountdownSection: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    // 22 November 2026, 10:00 AM Asia/Kolkata (UTC+5:30)
    const target = new Date("2026-11-22T10:00:00+05:30").getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-12 sm:py-18 md:py-20 px-3 xs:px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection delay={100}>
          {/* Deep Maroon Background Container with Antique Gold Border */}
          <div className="relative maroon-card rounded-2xl md:rounded-3xl p-4 xs:p-6 sm:p-10 md:p-14 border-2 sm:border-[3px] border-[#c89d3c] text-center overflow-hidden">
            
            {/* Traditional Ornamental Corners */}
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

            {/* Inner Accent Line */}
            <div className="absolute inset-2 sm:inset-4 border border-[#cf9e38]/40 rounded-xl md:rounded-2xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10">
              <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#e5c158] font-bold block mb-1.5 sm:mb-2">
                Awaiting The Auspicious Hour
              </span>
              <h2 className="font-cinzel text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[#fff4d1] px-2">
                COUNTING DOWN TO THEIR SPECIAL DAY
              </h2>
              <GoldFiligreeDivider className="my-2 sm:my-4" />
            </div>

            {/* Timer Display or Reached Zero */}
            <div className="relative z-10 my-4 sm:my-6">
              {timeLeft.isPast ? (
                <div className="py-5 sm:py-6 px-4 inline-block rounded-xl bg-[#59141d]/70 border border-[#d4a343]">
                  <p className="font-cinzel-dec text-xl xs:text-2xl sm:text-4xl text-[#fff0b8] font-bold tracking-[0.2em] sm:tracking-[0.25em]">
                    THE DAY HAS ARRIVED
                  </p>
                  <p className="font-cormorant italic text-base sm:text-xl text-[#f7e2b7] mt-1.5 sm:mt-2">
                    May God shower divine blessings upon Leelavarshini &amp; Dineshkumar
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 xs:gap-3 sm:gap-6 max-w-2xl mx-auto">
                  {timeUnits.map((unit) => (
                    <div
                      key={unit.label}
                      className="relative bg-gradient-to-b from-[#34070e] to-[#1f0307] rounded-xl p-2.5 xs:p-3.5 sm:p-5 border border-[#c89d3c]/60 shadow-[0_6px_16px_rgba(0,0,0,0.5)] group hover:border-[#ffd470] transition-colors"
                    >
                      {/* Top small accent */}
                      <div className="w-4 sm:w-6 h-[1.5px] bg-[#c89d3c] mx-auto mb-1 sm:mb-1.5 opacity-80" />

                      {/* Antique Gold Number in Elegant Serif */}
                      <span className="block font-cinzel text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient tracking-wider">
                        {String(unit.value).padStart(2, '0')}
                      </span>

                      {/* Unit Label */}
                      <span className="block font-cinzel text-[9px] xs:text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-[#e8d5b5]/90 font-semibold uppercase mt-1 sm:mt-2">
                        {unit.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Auspicious Time Caption */}
            <div className="relative z-10 pt-1 sm:pt-2 text-[#e3cead]/80 font-cormorant text-sm sm:text-base md:text-lg">
              <span>Sunday, 22 November 2026 • 10:00 AM IST</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
