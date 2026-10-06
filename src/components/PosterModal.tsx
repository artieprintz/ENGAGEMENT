import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { eventData } from '../data/eventData';
import {
  Kuthuvilakku,
  TempleArch,
  BananaLeavesDecor,
  AuspiciousKalasam,
  GoldFiligreeDivider,
  TraditionalCorner,
} from './TraditionalElements';
import { Download, Printer, X, Sparkles } from 'lucide-react';

interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PosterModal: React.FC<PosterModalProps> = ({ isOpen, onClose }) => {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [isExporting, setIsExporting] = useState(false);
  const posterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://betrothal.leelavarshini-dinesh.com';
    QRCode.toDataURL(currentUrl, {
      width: 220,
      margin: 1,
      color: {
        dark: '#4a0e17',
        light: '#fffbf2',
      },
    })
      .then((url) => setQrCodeDataUrl(url))
      .catch((err) => console.error(err));
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    setIsExporting(true);
    try {
      // Create high-resolution 1080x1350 canvas for pristine crisp print/save
      const canvas = document.createElement('canvas');
      canvas.width = 1080;
      canvas.height = 1350;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // 1. Outer Deep Maroon Background
      const maroonGrad = ctx.createLinearGradient(0, 0, 0, 1350);
      maroonGrad.addColorStop(0, '#420a12');
      maroonGrad.addColorStop(0.5, '#29050b');
      maroonGrad.addColorStop(1, '#1b0206');
      ctx.fillStyle = maroonGrad;
      ctx.fillRect(0, 0, 1080, 1350);

      // Outer Gold Border
      ctx.lineWidth = 14;
      ctx.strokeStyle = '#c89d3c';
      ctx.strokeRect(30, 30, 1020, 1290);

      ctx.lineWidth = 3;
      ctx.strokeStyle = '#ffeaa7';
      ctx.strokeRect(44, 44, 992, 1262);

      // 2. Inner Warm Ivory Parchment Card
      const ivoryGrad = ctx.createLinearGradient(0, 60, 0, 1280);
      ivoryGrad.addColorStop(0, '#fffdf7');
      ivoryGrad.addColorStop(0.5, '#f7efe0');
      ivoryGrad.addColorStop(1, '#f1e3cc');
      ctx.fillStyle = ivoryGrad;
      ctx.fillRect(60, 60, 960, 1230);

      // Inner Gold filigree rectangle
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#c89d3c';
      ctx.strokeRect(75, 75, 930, 1200);

      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#b88523';
      ctx.setLineDash([6, 6]);
      ctx.strokeRect(88, 88, 904, 1174);
      ctx.setLineDash([]);

      // 3. Draw Typography
      ctx.textAlign = 'center';

      // Blessings
      ctx.fillStyle = '#7a1824';
      ctx.font = 'bold 20px "Cinzel", serif';
      ctx.fillText('WITH THE BLESSINGS OF OUR PARENTS & ELDERS', 540, 180);

      ctx.fillStyle = '#592931';
      ctx.font = 'italic 24px "Cormorant Garamond", serif';
      ctx.fillText('We cordially invite you to the', 540, 225);

      // Ceremony
      ctx.fillStyle = '#630b17';
      ctx.font = 'bold 50px "Cinzel Decorative", serif';
      ctx.fillText('BETROTHAL CEREMONY', 540, 290);

      // Golden line
      ctx.strokeStyle = '#c89d3c';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(340, 320);
      ctx.lineTo(740, 320);
      ctx.stroke();

      // Bride
      ctx.fillStyle = '#680b17';
      ctx.font = 'bold 64px "Great Vibes", cursive';
      ctx.fillText(eventData.brideName, 540, 420);

      ctx.fillStyle = '#8c591a';
      ctx.font = 'bold 20px "Cinzel", serif';
      ctx.fillText(eventData.brideQualification, 540, 460);

      ctx.fillStyle = '#552a32';
      ctx.font = '19px "Cormorant Garamond", serif';
      ctx.fillText(eventData.brideRole, 540, 490);

      // &
      ctx.fillStyle = '#b88523';
      ctx.font = 'bold 44px "Cormorant Garamond", serif';
      ctx.fillText('✦   &   ✦', 540, 545);

      // Groom
      ctx.fillStyle = '#680b17';
      ctx.font = 'bold 64px "Great Vibes", cursive';
      ctx.fillText(eventData.groomName, 540, 640);

      ctx.fillStyle = '#8c591a';
      ctx.font = 'bold 20px "Cinzel", serif';
      ctx.fillText(eventData.groomQualification, 540, 680);

      ctx.fillStyle = '#552a32';
      ctx.font = '19px "Cormorant Garamond", serif';
      ctx.fillText(eventData.groomRole, 540, 710);

      // Divider
      ctx.beginPath();
      ctx.moveTo(280, 750);
      ctx.lineTo(800, 750);
      ctx.stroke();

      // Date & Time
      ctx.fillStyle = '#7a1824';
      ctx.font = 'bold 22px "Cinzel", serif';
      ctx.fillText('SUNDAY, 22 NOVEMBER 2026', 540, 800);

      ctx.fillStyle = '#8c591a';
      ctx.font = 'bold 20px "Cinzel", serif';
      ctx.fillText('10:00 AM – 11:30 AM (AUSPICIOUS MUHURTHAM)', 540, 835);

      // Venue
      ctx.fillStyle = '#630b17';
      ctx.font = 'bold 32px "Cinzel", serif';
      ctx.fillText(eventData.venue.toUpperCase(), 540, 900);

      ctx.fillStyle = '#825b1b';
      ctx.font = 'bold 22px "Cinzel", serif';
      ctx.fillText(eventData.location.toUpperCase(), 540, 935);

      // Message
      ctx.fillStyle = '#46171f';
      ctx.font = 'italic 20px "Cormorant Garamond", serif';
      ctx.fillText(
        '"YOU ARE WARMLY INVITED TO JOIN US AND BLESS THE COUPLE',
        540,
        990
      );
      ctx.fillText('AS THEY BEGIN THEIR BEAUTIFUL JOURNEY TOGETHER."', 540, 1020);

      // QR Code image
      if (qrCodeDataUrl) {
        const qrImg = new Image();
        qrImg.crossOrigin = 'anonymous';
        qrImg.src = qrCodeDataUrl;
        await new Promise((resolve) => {
          qrImg.onload = resolve;
        });
        ctx.drawImage(qrImg, 465, 1070, 150, 150);
      }

      ctx.fillStyle = '#7a1824';
      ctx.font = 'bold 15px "Cinzel", serif';
      ctx.fillText('SCAN TO VIEW E-INVITE', 540, 1250);

      // Trigger download
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'Leelavarshini-Dineshkumar-Betrothal-Poster-4x5.png';
      downloadLink.href = pngUrl;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (err) {
      console.error(err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 xs:p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg my-auto py-4">
        
        {/* Close & Action Bar */}
        <div className="flex items-center justify-between mb-2.5 text-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffd875]" />
            <span className="font-cinzel text-xs sm:text-base font-bold tracking-wider text-[#ffea9f]">
              PREMIUM 4:5 E-INVITATION POSTER
            </span>
          </div>
          
          <button
            onClick={onClose}
            aria-label="Close poster view"
            className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* 4:5 Aspect Ratio Poster Card (1080 x 1350 representation) */}
        <div
          ref={posterRef}
          className="relative w-full aspect-[4/5] bg-gradient-to-b from-[#3d0910] via-[#240409] to-[#160205] p-2.5 xs:p-4 sm:p-5 rounded-2xl border-2 sm:border-[3px] border-[#c89d3c] shadow-2xl overflow-hidden flex flex-col justify-between"
        >
          {/* Inner Ivory Parchment Panel */}
          <div className="relative w-full h-full parchment-card rounded-xl border-2 border-[#c89d3c] p-4 sm:p-6 md:p-8 flex flex-col justify-between text-center overflow-hidden">
            
            {/* Corners */}
            <div className="absolute top-2 left-2">
              <TraditionalCorner position="tl" className="w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <div className="absolute top-2 right-2">
              <TraditionalCorner position="tr" className="w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <div className="absolute bottom-2 left-2">
              <TraditionalCorner position="bl" className="w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <div className="absolute bottom-2 right-2">
              <TraditionalCorner position="br" className="w-7 h-7 sm:w-10 sm:h-10" />
            </div>

            {/* Banana Leaves side accents */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden sm:block opacity-60">
              <BananaLeavesDecor side="left" className="w-14" />
            </div>
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden sm:block opacity-60">
              <BananaLeavesDecor side="right" className="w-14" />
            </div>

            {/* Inner Border */}
            <div className="absolute inset-2 sm:inset-3 border border-[#cf9e38]/50 rounded-lg pointer-events-none" />

            {/* TOP HEADER */}
            <div className="relative z-10 pt-1">
              <div className="flex justify-center mb-1">
                <AuspiciousKalasam size={40} />
              </div>
              <p className="font-cinzel text-[9px] sm:text-xs tracking-[0.25em] font-bold text-[#7a1824] uppercase">
                WITH THE BLESSINGS OF OUR PARENTS &amp; ELDERS
              </p>
              <p className="font-cormorant italic text-xs sm:text-sm text-[#542830] tracking-wider">
                We cordially invite you to the
              </p>
              <h2 className="font-cinzel-dec text-lg sm:text-2xl md:text-3xl font-bold tracking-[0.16em] text-[#630b17] mt-0.5">
                BETROTHAL CEREMONY
              </h2>
              <div className="w-20 h-[1.5px] bg-[#c89d3c] mx-auto my-1" />
            </div>

            {/* MAIN NAMES */}
            <div className="relative z-10 py-1">
              {/* Flanking Kuthuvilakku */}
              <div className="relative flex items-center justify-center">
                <div className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 hidden xs:block">
                  <Kuthuvilakku height={140} className="w-10 sm:w-14 opacity-90" />
                </div>
                <div className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 hidden xs:block">
                  <Kuthuvilakku height={140} className="w-10 sm:w-14 opacity-90" />
                </div>

                <div className="px-6">
                  {/* Bride */}
                  <h3 className="font-script text-2xl sm:text-4xl md:text-5xl text-[#6d0d19] leading-tight">
                    {eventData.brideName}
                  </h3>
                  <p className="font-cinzel text-[9px] sm:text-xs font-semibold tracking-widest text-[#8c591a]">
                    {eventData.brideQualification} • {eventData.brideRole}
                  </p>

                  {/* & */}
                  <div className="flex items-center justify-center my-0.5 sm:my-1 gap-2">
                    <span className="text-xs text-[#b88523]">✦</span>
                    <span className="font-cormorant italic text-base sm:text-xl text-[#7a1824] font-bold">
                      &amp;
                    </span>
                    <span className="text-xs text-[#b88523]">✦</span>
                  </div>

                  {/* Groom */}
                  <h3 className="font-script text-2xl sm:text-4xl md:text-5xl text-[#6d0d19] leading-tight">
                    {eventData.groomName}
                  </h3>
                  <p className="font-cinzel text-[9px] sm:text-xs font-semibold tracking-widest text-[#8c591a]">
                    {eventData.groomQualification} • {eventData.groomRole}
                  </p>
                </div>
              </div>
            </div>

            {/* DATE & VENUE */}
            <div className="relative z-10 py-1">
              <div className="w-24 h-[1px] bg-[#c89d3c] mx-auto mb-1.5" />
              <p className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] text-[#7a1824] uppercase">
                SUNDAY, 22 NOVEMBER 2026
              </p>
              <p className="font-cinzel text-[10px] sm:text-xs font-semibold tracking-widest text-[#8c591a] mb-1">
                10:00 AM – 11:30 AM
              </p>
              <h4 className="font-cinzel text-sm sm:text-lg font-bold tracking-wider text-[#630b17] uppercase">
                {eventData.venue}
              </h4>
              <p className="font-cinzel text-[10px] sm:text-xs font-semibold tracking-wider text-[#825b1b] uppercase">
                {eventData.location}
              </p>
            </div>

            {/* INVITATION MESSAGE */}
            <div className="relative z-10 px-2 sm:px-6">
              <p className="font-cormorant italic text-[11px] sm:text-sm text-[#46171f] leading-snug">
                &ldquo;You are warmly invited to join us and bless the couple as they begin their beautiful journey together.&rdquo;
              </p>
            </div>

            {/* BOTTOM: REAL QR CODE TO E-INVITE */}
            <div className="relative z-10 pt-1 flex flex-col items-center justify-center">
              {qrCodeDataUrl ? (
                <img
                  src={qrCodeDataUrl}
                  alt="Real QR Code to view E-Invitation"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-md border border-[#c89d3c] p-1 bg-white shadow-sm"
                />
              ) : (
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md border border-[#c89d3c] p-1 bg-[#fffdf9] flex items-center justify-center text-[10px] font-cinzel text-[#8c591a]">
                  SCAN TO VIEW
                </div>
              )}
              <span className="font-cinzel text-[9px] sm:text-[10px] font-bold tracking-widest text-[#7a1824] uppercase mt-1">
                VIEW E-INVITE
              </span>
            </div>

          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            onClick={handleDownload}
            disabled={isExporting}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#94651a] to-[#c5932d] hover:from-[#aa7721] hover:to-[#dfab38] text-[#1c0307] font-cinzel font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg transition-all"
          >
            <Download className="w-4 h-4" />
            <span>{isExporting ? 'GENERATING...' : 'DOWNLOAD POSTER (PNG)'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4a0d15] hover:bg-[#61121d] border border-[#c89d3c] text-[#faf6ee] font-cinzel font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg transition-all"
          >
            <Printer className="w-4 h-4 text-[#ffd773]" />
            <span>PRINT</span>
          </button>
        </div>

      </div>
    </div>
  );
};
