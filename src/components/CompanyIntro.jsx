import React from 'react';
import { introStats } from '../data/stats';
import { 
  CheckCircle, 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Network, 
  Terminal, 
  Rocket, 
  Database,
  BarChart2
} from 'lucide-react';

export default function CompanyIntro() {
  return (
    <section id="about" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill Badge & Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>WHO WE ARE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Built for enterprises that demand more from their data
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            From strategy to execution, we help organizations build scalable data platforms, modern applications and intelligent solutions that create measurable business value.
          </p>
        </div>

        {/* Dark Navy Hero Statistics Row (Matches screenshot dark rounded card) */}
        <div className="relative rounded-2xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-850 border border-slate-800 p-8 sm:p-10 shadow-2xl mb-16 overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
            {introStats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-start ${idx > 0 ? 'md:pl-8' : ''} ${idx > 1 ? 'pt-6 md:pt-0' : ''}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {stat.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
                </div>
                <div className="text-sm font-bold text-slate-200 tracking-wide">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-1 leading-snug">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Feature Value Pillars below stats (Matching screenshot sub-cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-500/50 hover:bg-white hover:shadow-card-hover transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-brand-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Enterprise Architecture</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Resilient, production-ready architectures designed to eliminate technical debt and scale securely with multi-billion record demands.
            </p>
            <div className="flex items-center text-xs font-semibold text-brand-600 group-hover:translate-x-1 transition-transform">
              <span>Read Architecture Whitepaper</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-500/50 hover:bg-white hover:shadow-card-hover transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-indigo-100/80 text-indigo-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Execution Velocity</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Agile delivery squads that bridge high-level corporate strategies into tested, hardened code deployed in days, not quarters.
            </p>
            <div className="flex items-center text-xs font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform">
              <span>Our Delivery Methodology</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-500/50 hover:bg-white hover:shadow-card-hover transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
              <BarChart2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Measurable ROI</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Every initiative is pegged to tangible KPIs: query latency, OpEx reduction, data freshness, and direct revenue acceleration.
            </p>
            <div className="flex items-center text-xs font-semibold text-purple-600 group-hover:translate-x-1 transition-transform">
              <span>View Business Impact</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-500/50 hover:bg-white hover:shadow-card-hover transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Enterprise Ready</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Enterprise compliance, automated governance, SOC2 Type II controls, and 24/7 mission-critical operations built in.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200">
              <span className="text-[11px] font-mono bg-white px-2 py-0.5 rounded border border-slate-300 text-slate-700">SOC2 Type II</span>
              <span className="text-[11px] font-mono bg-white px-2 py-0.5 rounded border border-slate-300 text-slate-700">HIPAA</span>
              <span className="text-[11px] font-mono bg-white px-2 py-0.5 rounded border border-slate-300 text-slate-700">GDPR</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
