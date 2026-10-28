import React from 'react';
import { 
  Megaphone, 
  MessageSquare, 
  PhoneCall, 
  Mail, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  Zap, 
  CheckCircle2, 
  BarChart, 
  Layers 
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../store/navigationSlice';

export default function CampaignManagement() {
  const dispatch = useDispatch();

  const channels = [
    {
      title: 'Conversational WhatsApp Bots',
      desc: 'Official WhatsApp Business API journeys with interactive settlement buttons, account statement PDFs, and 1-click UPI payments.',
      icon: MessageSquare,
      badge: 'Highest Engagement'
    },
    {
      title: 'Smart Predictive IVR & Voice Bots',
      desc: 'Conversational voice bots in 10+ Indian accents that confirm payment intent, verify debtor identities, and route promising leads to senior agents.',
      icon: PhoneCall,
      badge: 'Zero-Agent Initial Touch'
    },
    {
      title: 'Dynamic Short-URL SMS Nudges',
      desc: 'DLT-registered, personalized SMS alerts with one-time payment tokens and real-time click tracking.',
      icon: Zap,
      badge: 'Instant Delivery'
    },
    {
      title: 'Automated Email Demand Notes',
      desc: 'Branded executive emails with itemized outstanding balances, interest waiver calculators, and legal advisories.',
      icon: Mail,
      badge: 'Audit Compliant'
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero Banner */}
      <section className="bg-[#00334e] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-slate-700 text-[#38bdf8] text-xs font-semibold tracking-wider uppercase mb-4">
            <Megaphone className="w-3.5 h-3.5" />
            <span>ANALYTICS DRIVEN COLLECTION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl leading-tight">
            Intelligent Omnichannel Campaign Management
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Eliminate non-responsive outbound calling. Acenna coordinates multi-channel digital journeys across WhatsApp, Voice, SMS, and Email, triggered dynamically by behavioral signals and algorithmic Best-Time-To-Call (BTTC) models.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => dispatch(setCurrentPage('contact-us'))}
              className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-glow-sm transition-all"
            >
              Launch Pilot Campaign
            </button>
            <button
              onClick={() => dispatch(setCurrentPage('technology'))}
              className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold transition-all"
            >
              Review Campaign Engine
            </button>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00334e]">4.2x</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Faster Promise-to-Pay (PTP)</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00334e]">88%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Digital Payment Adoption</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00334e]">30M+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Monthly Digital Nudges</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">-50%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Manual Agent Touch Required</div>
            </div>
          </div>
        </div>
      </section>

      {/* Channels Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">Omnichannel Architecture</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Synchronized Multi-Touch Customer Journeys
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Rather than overwhelming customers with repetitive calls, our algorithms alternate gentle digital nudges and personalized settlement plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {channels.map((chan, idx) => {
              const Icon = chan.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover hover:border-brand-300 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0284c7] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284c7] bg-blue-50 px-2 py-0.5 rounded">
                        {chan.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">{chan.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{chan.desc}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>DLT & TRAI Approved</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI Decisioning Features */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <Clock className="w-8 h-8 text-[#38bdf8] mb-3" />
                <h4 className="text-lg font-bold mb-2">Best-Time-To-Call (BTTC)</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Machine learning predicts each debtor's optimal response window based on salary credit patterns, past interaction logs, and weekday behavior.
                </p>
              </div>

              <div>
                <TrendingUp className="w-8 h-8 text-emerald-400 mb-3" />
                <h4 className="text-lg font-bold mb-2">Dynamic Settlement Calculator</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Debtors interact with an authorized slider offering tailored fee waivers and structured repayment tenures, converting hesitation into resolution.
                </p>
              </div>

              <div>
                <BarChart className="w-8 h-8 text-purple-400 mb-3" />
                <h4 className="text-lg font-bold mb-2">A/B Content Optimization</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Continuous multivariate testing of tone, message structure, and payment links guarantees highest engagement and fastest conversion velocity.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#00334e] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Maximize Engagement with Automated Campaign Orchestration
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Turn delinquent portfolios into predictable cash flows without increasing headcount.
          </p>
          <button
            onClick={() => dispatch(setCurrentPage('contact-us'))}
            className="px-8 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm shadow-glow transition-all"
          >
            Request Campaign Demo
          </button>
        </div>
      </section>
    </div>
  );
}
