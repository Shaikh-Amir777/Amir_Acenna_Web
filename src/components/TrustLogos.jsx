import React from 'react';
import { clientLogos } from '../data/stats';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function TrustLogos() {
  // Duplicate array for an unbroken, seamless continuous loop
  const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="relative py-8 bg-navy-900 border-y border-slate-800/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[100px] bg-brand-600/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-5">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#38bdf8] mb-0.5">
              <Sparkles className="w-3 h-3" />
              <span>INSTITUTIONAL PARTNERSHIPS</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Trusted by Leading Banks, Enterprises
            </h3>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/60">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Regulated Portfolios</span>
          </div>
        </div>
      </div>

      {/* Infinite Right-to-Left Carousel Wrapper with Fade Masks */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Left Gradient Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent z-20 pointer-events-none" />
        
        {/* Right Gradient Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-navy-900 via-navy-900/80 to-transparent z-20 pointer-events-none" />

        {/* Carousel Track Scrolling Right-to-Left */}
        <div className="animate-marquee-infinite flex items-center gap-4 sm:gap-5 cursor-pointer">
          {marqueeLogos.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group relative w-36 sm:w-44 h-14 sm:h-16 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 p-2 flex items-center justify-center shrink-0"
              title={`${client.name} - ${client.subtext}`}
            >
              {/* White background card containing the client logo */}
              <div className="w-full h-full flex items-center justify-center bg-white rounded-lg overflow-hidden">
                <img
                  src={client.image}
                  alt={`${client.name} logo`}
                  className="max-h-7 sm:max-h-8 w-auto max-w-[110px] sm:max-w-[135px] object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Tag indicator on hover */}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[9px] font-bold uppercase tracking-wider text-white bg-brand-600 px-2 py-0.5 rounded-full shadow pointer-events-none whitespace-nowrap z-30">
                {client.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
