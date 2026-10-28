import React from 'react';
import { useDispatch } from 'react-redux';
import { proofStats, caseStudies, clientHighlightQuote } from '../data/caseStudies';
import { openModal } from '../store/modalSlice';
import { 
  TrendingUp, 
  ArrowRight, 
  Sparkles, 
  Quote, 
  CheckCircle2, 
  Building, 
  Clock,
  Layers
} from 'lucide-react';

export default function CaseStudies() {
  const dispatch = useDispatch();

  const handleOpenCaseStudy = (study) => {
    dispatch(openModal({ type: 'caseStudy', data: study }));
  };

  return (
    <section id="proof" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <TrendingUp className="w-3.5 h-3.5 text-brand-600" />
            <span>MEASURABLE IMPACT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Proof, not promises
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Explore measurable outcomes delivered through technology, engineering and data.
          </p>
        </div>

        {/* Top Stats Row Banner */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 mb-16 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 text-center">
            {proofStats.map((stat, idx) => (
              <div key={idx} className={`${idx > 0 ? 'sm:pl-6' : ''} ${idx > 1 ? 'pt-4 sm:pt-0' : ''}`}>
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-600 tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Case Studies (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-card-hover hover:border-brand-400 transition-all duration-300 flex flex-col sm:flex-row"
            >
              {/* Image side */}
              <div className="sm:w-2/5 relative h-52 sm:h-auto overflow-hidden bg-slate-950 shrink-0">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-navy-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Text & Content side */}
              <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                <div>
                  {/* Result Metric Chip */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-3 border border-emerald-200">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{study.result}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2 leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {study.description}
                  </p>

                  <div className="text-xs text-slate-400 flex items-center gap-3 mb-4">
                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5" /> {study.client}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {study.duration}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenCaseStudy(study)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 group-hover:translate-x-1 transition-all pt-2 text-left"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Client Highlight Quote Banner (Matches reference image) */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-navy-900 to-slate-900 text-white p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute right-6 -bottom-6 text-slate-800/40 pointer-events-none">
            <Quote className="w-36 h-36" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-100 leading-relaxed mb-6 italic">
              "{clientHighlightQuote.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center font-bold text-white text-lg shadow-glow-sm">
                MV
              </div>
              <div>
                <div className="text-base font-bold text-white tracking-wide">
                  {clientHighlightQuote.author}
                </div>
                <div className="text-sm text-brand-300">
                  {clientHighlightQuote.role} • <span className="text-slate-400">{clientHighlightQuote.company}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
