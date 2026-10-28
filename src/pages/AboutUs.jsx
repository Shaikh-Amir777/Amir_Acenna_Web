import React from 'react';
import Timeline from '../components/Timeline';
import { 
  Building2, 
  ShieldCheck, 
  Target, 
  Users2, 
  Award, 
  Sparkles, 
  Globe2, 
  CheckCircle,
  TrendingUp,
  Scale
} from 'lucide-react';
import { introStats } from '../data/stats';

export default function AboutUs() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Page Hero Banner */}
      <section className="bg-[#00334e] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-slate-700 text-[#38bdf8] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KNOW US • ABOUT ACENNA</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl leading-tight">
            Pioneering Intelligence-Driven Enterprise Solutions
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Acenna bridges complex data engineering with on-ground operational execution, helping tier-1 banks, NBFCs, and global enterprises achieve unprecedented resolution rates and operational excellence.
          </p>
        </div>
      </section>

      {/* Stats Counter Strip */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {introStats.map((stat, idx) => (
              <div key={idx} className={idx > 1 ? 'pt-4 md:pt-0' : ''}>
                <div className="text-4xl font-extrabold text-[#00334e]">{stat.number}</div>
                <div className="text-sm font-bold text-slate-700 mt-1">{stat.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">Our Mission & Purpose</span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Ethical, Technology-Led Transformation for Modern Enterprises
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Founded with the vision to modernize fragmented collection ecosystems and enterprise data workflows, Acenna combines advanced machine learning algorithms with nationwide operational muscle.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                We believe that data integrity and ethical consumer engagement are the true pillars of sustainable business growth. Our proprietary scorecards and automated legal tech deliver transparent, compliant, and accelerated resolutions.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Target className="w-6 h-6 text-[#0284c7] mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm">Targeted Resolution</h4>
                  <p className="text-xs text-slate-500 mt-1">Right-party contact with predictive propensity models.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm">Regulatory Strictness</h4>
                  <p className="text-xs text-slate-500 mt-1">100% adherence to RBI Fair Practices & ISO security.</p>
                </div>
              </div>
            </div>

            {/* Visual Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80" 
                alt="Acenna Team Collaborative Planning"
                className="w-full h-[420px] object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00334e] via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">Enterprise Excellence</div>
                  <div className="text-xl font-bold mt-1">100+ Specialists Driving Digital Recovery & Architecture</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Story / Milestones Section */}
      <Timeline />

      {/* Core Values */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">Guiding Principles</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">The Values That Define Acenna</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0284c7] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Integrity & Respect</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every customer interaction and legal filing adheres to strict ethical standards, preserving brand dignity while maximizing recovery.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Data-Backed Rigor</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We replace guesswork with statistical propensity scoring, automated skip tracing, and real-time portfolio analytics.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">National Scale, Local Touch</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Seamlessly combining multi-lingual tele-calling centers with geo-verified field presence across 500+ Indian pincodes.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
