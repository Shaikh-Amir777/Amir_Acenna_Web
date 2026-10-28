import React from 'react';
import { 
  Scale, 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  Gavel, 
  Send, 
  Clock, 
  Sparkles, 
  ArrowRight,
  Laptop,
  Layers,
  Award
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../store/navigationSlice';

export default function DigitalLegalServices() {
  const dispatch = useDispatch();

  const legalSteps = [
    {
      step: '01',
      title: 'Automated Notice Dispatch',
      desc: 'Algorithmically drafted demand & statutory notices dispatched via Speed Post, WhatsApp, and encrypted email with verified delivery certificates.',
      icon: Send
    },
    {
      step: '02',
      title: 'Pre-Litigation Conciliation (ODR)',
      desc: 'Borrowers receive secure access to a virtual dispute portal to negotiate payment waivers, structured EMI schedules, or mediated settlement.',
      icon: Laptop
    },
    {
      step: '03',
      title: 'Virtual Lok Adalat Integration',
      desc: 'Direct integration with institutional mediation bodies and state legal service authorities for legally binding, enforceable mutual settlements.',
      icon: Scale
    },
    {
      step: '04',
      title: 'Bulk Case Filing & E-Courts',
      desc: 'Automated Section 138, Section 25, or summary suit filings with real-time court docket scraping, hearing dates, and summons tracking.',
      icon: Gavel
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero Banner */}
      <section className="bg-[#00334e] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-slate-700 text-[#38bdf8] text-xs font-semibold tracking-wider uppercase mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>ANALYTICS DRIVEN COLLECTION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl leading-tight">
            Digital Legal Services
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Acenna modernizes conventional litigation with enterprise legal-tech automation. From automated statutory legal notices and Online Dispute Resolution (ODR) to bulk judicial filings, we deliver rapid, scalable, and fully compliant debt resolution.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => dispatch(setCurrentPage('contact-us'))}
              className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-glow-sm transition-all"
            >
              Consult with Legal Operations
            </button>
            <button
              onClick={() => dispatch(setCurrentPage('about-us'))}
              className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold transition-all"
            >
              View Compliance Standards
            </button>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00334e]">70%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Faster Dispute Resolution</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00334e]">100%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Delivery Proof Verification</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00334e]">500K+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Digital Notices Dispatched</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">-60%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Litigation Cost Overhead</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Legal Workflow */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">End-to-End Pipeline</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Automated Digital Dispute Lifecycle
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Eliminate manual paperwork, postal delays, and scattered tracking with Acenna's integrated legal execution architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {legalSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover hover:border-brand-300 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0284c7] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-slate-200">{step.step}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{step.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Audit Verified</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Legal Coverage Sections */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <FileText className="w-8 h-8 text-[#0284c7] mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Section 138 & 25 Management</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Automated notice generation upon cheque bounce or NACH mandate failure with timestamped postal API tracking and summons monitoring.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <Laptop className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Online Conciliation Portals</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Borrower self-service settlement link with pre-approved settlement matrix, instantaneous e-sign mutual agreement, and gateway checkout.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Institutional Arbitration</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Streamlined appointment of independent arbitrators, digital evidence submission, and accelerated passing of enforceable awards.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#00334e] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Digitize Your Portfolio Litigation Workflows Today
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Reduce average days-to-resolution from years to weeks with Acenna's automated digital legal engine.
          </p>
          <button
            onClick={() => dispatch(setCurrentPage('contact-us'))}
            className="px-8 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm shadow-glow transition-all"
          >
            Start Digital Legal Discussion
          </button>
        </div>
      </section>
    </div>
  );
}
