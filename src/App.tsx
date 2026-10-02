import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { InvitationSection } from './components/InvitationSection';
import { CoupleDetailsSection } from './components/CoupleDetailsSection';
import { CountdownSection } from './components/CountdownSection';
import { EventDetailsSection } from './components/EventDetailsSection';
import { VenueSection } from './components/VenueSection';
import { FinalSection } from './components/FinalSection';
import { PetalCanvas } from './components/PetalCanvas';
import { PosterModal } from './components/PosterModal';
import { AuspiciousKalasam } from './components/TraditionalElements';
import { eventData } from './data/eventData';
import { Image as ImageIcon, MapPin, Calendar } from 'lucide-react';

export default function App() {
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#180306] text-[#f7eedd] selection:bg-[#cf9e38]/30 selection:text-[#fff6df] font-cormorant antialiased">
      {/* Background radial gradients for warm studio lighting & royal ambiance */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,rgba(92,16,26,0.55)_0%,rgba(38,4,8,0.9)_70%,#140205_100%)] z-0" />
      
      {/* Subtle traditional damask / floral ambient grain */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.035] bg-parchment-pattern z-0" />

      {/* Ambient Falling Petals Shower */}
      <PetalCanvas />

      {/* 4:5 Poster Modal */}
      <PosterModal isOpen={isPosterOpen} onClose={() => setIsPosterOpen(false)} />

      {/* Top Auspicious Navigation Banner */}
      <header className="relative z-30 w-full border-b border-[#c89d3c]/30 bg-[#29050a]/90 backdrop-blur-md px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <AuspiciousKalasam size={32} />
            <div className="flex flex-col">
              <span className="font-script text-2xl text-[#ffd773] leading-none tracking-wide">
                Leelavarshini &amp; Dineshkumar
              </span>
              <span className="font-cinzel text-[9px] tracking-[0.25em] text-[#e8d5b5]/80 uppercase font-semibold">
                Engagement Ceremony • 22 Nov 2026
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsPosterOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#8c5e17] to-[#ba8a28] hover:from-[#9c6a1b] hover:to-[#cd9830] text-[#1c0307] font-cinzel font-bold text-xs tracking-wider uppercase shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">4:5 Poster</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* 1. HERO SECTION */}
        <HeroSection />

        {/* 2. INVITATION SECTION */}
        <InvitationSection />

        {/* 3. BRIDE & GROOM DETAILS */}
        <CoupleDetailsSection />

        {/* 4. COUNTDOWN SECTION */}
        <CountdownSection />

        {/* 5. EVENT DETAILS & ADD TO CALENDAR */}
        <EventDetailsSection />

        {/* 6. VENUE SECTION */}
        <VenueSection />

        {/* 7. FINAL CLOSING SECTION */}
        <FinalSection />
      </main>

      {/* Quick Mobile Floating Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#240408]/95 border-t border-[#c89d3c]/40 backdrop-blur-lg px-4 py-2.5 flex items-center justify-around text-[#f5df88]">
        <a
          href={eventData.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-[11px] font-cinzel tracking-wider"
        >
          <MapPin className="w-4 h-4 text-[#ffd773]" />
          <span>Venue Map</span>
        </a>

        <button
          onClick={() => {
            const el = document.getElementById('event-schedule') || document.querySelector('section:nth-of-type(5)');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-0.5 text-[11px] font-cinzel tracking-wider"
        >
          <Calendar className="w-4 h-4 text-[#ffd773]" />
          <span>Schedule</span>
        </button>

        <button
          onClick={() => setIsPosterOpen(true)}
          className="flex flex-col items-center gap-0.5 text-[11px] font-cinzel text-[#ffd773] font-bold tracking-wider"
        >
          <ImageIcon className="w-4 h-4 text-[#ffd773]" />
          <span>4:5 Poster</span>
        </button>
      </nav>
    </div>
  );
}
