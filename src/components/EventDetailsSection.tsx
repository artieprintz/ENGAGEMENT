import React from 'react';
import { eventData } from '../data/eventData';
import { GoldFiligreeDivider, TraditionalCorner } from './TraditionalElements';
import { Calendar, Clock, Landmark, MapPin } from 'lucide-react';
import { AddToCalendar } from './AddToCalendar';
import { AnimatedSection } from './AnimatedSection';

export const EventDetailsSection: React.FC = () => {
  const details = [
    {
      icon: Calendar,
      title: "DATE",
      primary: eventData.day,
      secondary: eventData.date,
    },
    {
      icon: Clock,
      title: "TIME",
      primary: eventData.time,
      secondary: "Auspicious Muhurtham",
    },
    {
      icon: Landmark,
      title: "VENUE",
      primary: eventData.venue,
      secondary: "Air Conditioned Hall",
    },
    {
      icon: MapPin,
      title: "LOCATION",
      primary: eventData.location,
      secondary: "Chennai, Tamil Nadu",
    },
  ];

  return (
    <section id="event-schedule" className="relative py-12 sm:py-18 md:py-20 px-3 xs:px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection delay={100}>
          <div className="text-center mb-8 sm:mb-10">
            <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#e5c158] block mb-1.5 sm:mb-2">
              CEREMONY SCHEDULE
            </span>
            <h2 className="font-cinzel text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#fff0b8]">
              SAVE THE DATE
            </h2>
            <GoldFiligreeDivider className="my-2 sm:my-3" />
          </div>
        </AnimatedSection>

        {/* 4 Clean Luxurious Cards - 2x2 on Mobile, 4x1 on Desktop */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {details.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={index} delay={150 + index * 80}>
                <div className="relative parchment-card rounded-2xl p-4 sm:p-6 border border-[#c89d3c] shadow-lg text-center group hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col justify-between">
                  <div className="absolute top-2 left-2">
                    <TraditionalCorner position="tl" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <TraditionalCorner position="br" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#531018] to-[#30050b] border border-[#d4a343] flex items-center justify-center text-[#ffea9f] mb-2 sm:mb-3 shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    <span className="font-cinzel text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#8c591a] uppercase mb-0.5 sm:mb-1">
                      {item.title}
                    </span>

                    <h3 className="font-cinzel text-sm sm:text-base md:text-lg font-bold text-[#5c0d18] tracking-wider my-0.5 sm:my-1">
                      {item.primary}
                    </h3>

                    <p className="font-cormorant italic text-xs sm:text-sm text-[#5a2c34] font-medium">
                      {item.secondary}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Add To Calendar button */}
        <AnimatedSection delay={400}>
          <div className="mt-7 sm:mt-9 flex justify-center">
            <AddToCalendar />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
