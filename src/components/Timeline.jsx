import React from 'react';
import { milestones } from '../data/milestones';
import { 
  Sparkles, 
  Building2, 
  Cloud, 
  Globe2, 
  Brain, 
  Layers, 
  Award,
  ChevronRight,
  Calendar
} from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Building2: Building2,
  Cloud: Cloud,
  Globe2: Globe2,
  Brain: Brain,
  Layers: Layers,
  Award: Award,
};

export default function Timeline() {
  return (
    <section id="milestones" className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-brand-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-brand-700 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-brand-600" />
            <span>OUR STORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Milestones that shaped our legacy
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From a focused technology team to a trusted enterprise transformation partner.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (Visible on lg screens) */}
        <div className="hidden lg:block relative pb-6">
          
          {/* Continuous Connecting Line */}
          <div className="absolute top-8 left-6 right-6 h-1 bg-gradient-to-r from-brand-300 via-indigo-400 to-brand-600 rounded-full z-0 opacity-80" />

          {/* Grid of Milestone Cards */}
          <div className="grid grid-cols-7 gap-4 relative z-10">
            {milestones.map((item, index) => {
              const Icon = iconMap[item.icon] || Sparkles;
              return (
                <div key={item.year} className="flex flex-col items-center text-center group">
                  
                  {/* Node Dot on the timeline */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-500 shadow-lg flex items-center justify-center text-brand-600 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6 transition-transform group-hover:rotate-6" />
                    </div>
                    {/* Year badge floating over node */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-navy-900 text-white text-[11px] font-bold tracking-tight shadow">
                      {item.year}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm group-hover:shadow-card-hover group-hover:border-brand-300 transition-all duration-300 flex flex-col justify-between min-h-[220px]">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md inline-block mb-2">
                        {item.tag}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug group-hover:text-brand-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 italic">
                      {item.detail}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline (Visible on < lg screens) */}
        <div className="lg:hidden relative pl-6 border-l-2 border-brand-400/80 ml-4 space-y-8">
          {milestones.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div key={item.year} className="relative group">
                
                {/* Node on vertical line */}
                <div className="absolute -left-[35px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-brand-500 flex items-center justify-center text-brand-600 shadow group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Milestone Card */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-extrabold text-brand-600 tracking-tight">
                      {item.year}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="font-semibold text-slate-700">Enterprise Impact: </span>
                    {item.detail}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
