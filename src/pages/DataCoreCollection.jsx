import React from 'react';
import { 
  Database, 
  BarChart3, 
  Cpu, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  ArrowRight,
  Filter,
  PieChart,
  Zap
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../store/navigationSlice';

export default function DataCoreCollection() {
  const dispatch = useDispatch();

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero Header */}
      <section className="bg-[#00334e] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-slate-700 text-[#38bdf8] text-xs font-semibold tracking-wider uppercase mb-4">
            <Database className="w-3.5 h-3.5" />
            <span>ANALYTICS DRIVEN COLLECTION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl leading-tight">
            Data is Core to Overall Collection
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Acenna redefines debt resolution by treating data as the foundational asset. Leveraging multi-dimensional borrower intelligence, real-time telemetry, and self-learning propensity algorithms, we turn high-cost recovery into an intelligent, customer-friendly science.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => dispatch(setCurrentPage('contact-us'))}
              className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-glow-sm transition-all"
            >
              Request Portfolio Evaluation
            </button>
            <button
              onClick={() => dispatch(setCurrentPage('technology'))}
              className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold transition-all"
            >
              Explore Tech Stack
            </button>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00334e]">+38%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Resolution Rate Boost</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00334e]">-45%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Cost of Collection</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00334e]">10B+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Data Points Analyzed</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">100%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">RBI Guideline Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">The Analytics Engine</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Four Dimensions of Data-Driven Resolution
            </h2>
            <p className="text-base text-slate-600 mt-3">
              We ingest raw delinquency records and convert them into hyper-targeted resolution pathways within milliseconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pillar 1 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover hover:border-brand-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0284c7] flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Propensity-to-Pay (P2P) Scoring</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Our proprietary ML models calculate real-time willingness and financial ability scores for every debtor account by evaluating historical repayment cycles, credit bureau updates, and alternative signals.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>Dynamic scoring refreshed continuously upon every contact event</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>Prioritizes self-cure potential to reduce unnecessary operational overhead</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover hover:border-brand-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <Filter className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Intelligent Segmentation & Allocation</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Accounts are automatically routed to the highest-converting resolution channel—be it automated digital nudges, specialized multi-lingual tele-callers, localized field squads, or digital conciliation.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>Avoids brute-force calling; targets the optimal channel per segment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>Matches borrower language and demographics with certified agents</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover hover:border-brand-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Real-Time Telemetry & Funnel Telemetry</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Executive dashboards provide banks and financial institutions with complete visibility over promised-to-pay (PTP) ratios, payment confirmations, agent adherence, and dispute reasons.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  <span>Live PTP fulfillment tracking with instant payment gateway reconciliation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  <span>Granular recovery reporting segmented by product, geography, and DPD</span>
                </li>
              </ul>
            </div>

            {/* Pillar 4 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover hover:border-brand-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">4. Audit-Proof Fair Practice Governance</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Every call recording, speech transcription, geo-tagged field visit, and digital notice delivery report is time-stamped, encrypted, and preserved for audit readiness.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Automated speech analytics to monitor tone, ethics, and prohibited phrases</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Zero-tolerance adherence to regulatory calling hours and privacy policies</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-[#00334e] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Ready to Accelerate Your Enterprise Debt Resolution?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Schedule a confidential pilot benchmark. We will ingest a sample portfolio and demonstrate measurable lift in right-party contact and recovery velocity.
          </p>
          <button
            onClick={() => dispatch(setCurrentPage('contact-us'))}
            className="px-8 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm shadow-glow transition-all"
          >
            Connect With Our Analytics Team
          </button>
        </div>
      </section>
    </div>
  );
}
