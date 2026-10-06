import React, { useState } from 'react';
import { eventData } from '../data/eventData';
import { Calendar, CalendarPlus, Download, ExternalLink } from 'lucide-react';

export const AddToCalendar: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);

  // 22 November 2026, 10:00 AM to 11:30 AM IST (UTC is 04:30 to 06:00)
  // Format for Google Calendar: 20261122T043000Z / 20261122T060000Z
  const title = encodeURIComponent(`Betrothal Ceremony – ${eventData.brideName} & ${eventData.groomName}`);
  const details = encodeURIComponent(
    `You are cordially invited to grace the betrothal ceremony of ${eventData.brideName} and ${eventData.groomName} at ${eventData.venue}, ${eventData.location}.\nMaps: ${eventData.mapsUrl}`
  );
  const location = encodeURIComponent(`${eventData.venue}, ${eventData.location}`);
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261122T043000Z/20261122T060000Z&details=${details}&location=${location}`;

  // Download .ics file for Apple Calendar, Outlook, etc.
  const downloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Betrothal Invitation//Leelavarshini and Dineshkumar//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:betrothal-leela-dinesh-20261122@invitation',
      'DTSTAMP:20261001T000000Z',
      'DTSTART:20261122T043000Z',
      'DTEND:20261122T060000Z',
      `SUMMARY:Betrothal Ceremony – ${eventData.brideName} & ${eventData.groomName}`,
      `DESCRIPTION:You are cordially invited to grace the betrothal ceremony of ${eventData.brideName} and ${eventData.groomName}.\\nVenue: ${eventData.venue}\\, ${eventData.location}\\nGoogle Maps: ${eventData.mapsUrl}`,
      `LOCATION:${eventData.venue}\\, ${eventData.location}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Betrothal-Leelavarshini-Dineshkumar.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative inline-block text-center my-3">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#4d0b13] to-[#6a121d] hover:from-[#600e18] hover:to-[#7c1623] border border-[#d4a343] text-[#fff0b8] font-cinzel font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <CalendarPlus className="w-4 h-4 text-[#ffd773]" />
        <span>ADD TO CALENDAR</span>
      </button>

      {showOptions && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-2 bg-[#2d070c] border border-[#d4a343] rounded-xl shadow-2xl z-30 space-y-1">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowOptions(false)}
            className="flex items-center justify-between w-full px-3 py-2 text-left text-xs font-cinzel text-[#f7eedd] hover:bg-[#4d0c15] rounded-lg transition-colors"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#ffd773]" />
              <span>Google Calendar</span>
            </span>
            <ExternalLink className="w-3 h-3 text-[#c89d3c]" />
          </a>

          <button
            onClick={() => {
              downloadIcs();
              setShowOptions(false);
            }}
            className="flex items-center justify-between w-full px-3 py-2 text-left text-xs font-cinzel text-[#f7eedd] hover:bg-[#4d0c15] rounded-lg transition-colors"
          >
            <span className="flex items-center gap-2">
              <Download className="w-3.5 h-3.5 text-[#ffd773]" />
              <span>Apple / Outlook (.ics)</span>
            </span>
            <span className="text-[10px] text-[#c89d3c]">File</span>
          </button>
        </div>
      )}
    </div>
  );
};
