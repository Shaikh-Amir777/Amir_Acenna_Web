import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../store/modalSlice';
import { heroFloatingCards } from '../data/stats';
import { 
  ArrowRight, 
  Sparkles, 
  Database, 
  Cloud, 
  Brain, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  Users, 
  Zap,
  Globe2
} from 'lucide-react';

const iconMap = {
  Database: Database,
  Cloud: Cloud,
  Brain: Brain,
  Layers: Layers,
};

export default function Hero() {
  const dispatch = useDispatch();

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSchedule = () => {
    dispatch(openModal({ type: 'schedule' }));
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-32 pb-20 overflow-hidden bg-navy-950 hero-glow-bg flex flex-col justify-center"
    >
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and CTAs (lg:col-span-6 or 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Small Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/70 text-brand-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
              <span>DATA • AI • TECHNOLOGY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Where data strategy meets{' '}
              <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-indigo-300 bg-clip-text text-transparent">
                execution excellence
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              Transform your data into measurable business outcomes with modern data strategy, engineering and intelligent technology solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <button
                onClick={() => handleScrollTo('solutions')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-brand-600 hover:bg-brand-500 active:scale-[0.98] shadow-glow hover:shadow-glow-lg transition-all duration-200 group"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={handleOpenSchedule}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 active:scale-[0.98] transition-all duration-200 backdrop-blur-sm"
              >
                <span>Schedule a Consultation</span>
              </button>
            </div>

            {/* Left Micro Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80 w-full">
              <div className="h-20 flex flex-col items-center justify-center border border-slate-800/80 rounded-3xl">
                <div className="text-2xl font-bold text-white tracking-tight">100+</div>
                <div className="text-xs text-slate-400 mt-0.5">Enterprise Projects</div>
              </div>
              <div className="h-20 flex flex-col items-center justify-center border border-slate-800/80 rounded-3xl">
                <div className="text-2xl font-bold text-white tracking-tight">2021</div>
                <div className="text-xs text-slate-400 mt-0.5">Founded</div>
              </div>
              <div className="h-20 flex flex-col items-center justify-center border border-slate-800/80 rounded-3xl">
                <div className="text-2xl font-bold text-white tracking-tight">100+</div>
                <div className="text-xs text-slate-400 mt-0.5">Tech Specialists</div>
              </div>
              <div className="h-20 flex flex-col items-center justify-center border border-slate-800/80 rounded-3xl">
                <div className="text-2xl font-bold text-brand-400 tracking-tight flex items-center gap-1">
                  <Globe2 className="w-5 h-5 text-brand-400" />
                  <span>Global</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Delivery Centers</div>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Enterprise Data / Tech Console with 4 Floating Cards */}
          <div className="lg:col-span-5 relative w-full">
            {/* Glow backing */}
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-60"></div>

            {/* Main Interactive Hub Container */}
            <div className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-5 sm:p-6 backdrop-blur-xl shadow-2xl">
              
              {/* Header inside Hub Console */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/90">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                    Acenna Execution Mesh
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-md border border-brand-500/20">
                  <Zap className="w-3 h-3" /> 99.99% Uptime SLA
                </div>
              </div>

              {/* 3 Circular Avatar/Metric Counters at top */}
              <div className="grid grid-cols-3 gap-2.5 mb-5">
                <div className="bg-slate-800/60 rounded-xl p-2.5 border border-slate-700/50 text-center hover:border-brand-500/40 transition-colors">
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight">98%</div>
                  <div className="text-[10px] text-slate-400 leading-tight">Client Retention</div>
                </div>
                <div className="bg-slate-800/60 rounded-xl p-2.5 border border-slate-700/50 text-center hover:border-brand-500/40 transition-colors">
                  <div className="text-base sm:text-lg font-bold text-brand-400 tracking-tight">10B+</div>
                  <div className="text-[10px] text-slate-400 leading-tight">Daily Records</div>
                </div>
                <div className="bg-slate-800/60 rounded-xl p-2.5 border border-slate-700/50 text-center hover:border-brand-500/40 transition-colors">
                  <div className="text-base sm:text-lg font-bold text-emerald-400 tracking-tight">4.9/5</div>
                  <div className="text-[10px] text-slate-400 leading-tight">CSAT Score</div>
                </div>
              </div>

              {/* 2x2 Floating Capability Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {heroFloatingCards.map((card) => {
                  const Icon = iconMap[card.icon] || Database;
                  return (
                    <div
                      key={card.id}
                      className="group relative p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800/90 border border-slate-700/60 hover:border-brand-500/50 transition-all duration-300 shadow-sm hover:shadow-card-dark-hover"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          {card.stat}
                        </span>
                      </div>

                      <h3 className="text-sm font-semibold text-white group-hover:text-brand-300 transition-colors mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Console Status Bar */}
              <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" />
                  <span>SOC2 Type II & HIPAA Certified</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">v2.6 Multi-Region</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
