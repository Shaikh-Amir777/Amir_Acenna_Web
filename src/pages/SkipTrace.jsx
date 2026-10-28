import React from 'react';
import { 
  UserCheck, 
  Search, 
  Network, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Database, 
  Smartphone, 
  Lock,
  ArrowRight
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../store/navigationSlice';

export default function SkipTrace() {
  const dispatch = useDispatch();

  const traceMethods = [
    {
      title: 'Multi-Bureau Triangulation',
      desc: 'Cross-verifying historical and recent contact changes across leading credit bureaus, utility records, and official registries.',
      icon: Database
    },
    {
      title: 'Employment & Corporate Directories',
      desc: 'Correlating active professional registries and corporate domains to identify verified workplace contact channels.',
      icon: Network
    },
    {
      title: 'Postal Address Geocoding',
      desc: 'Address normalization and geographic parcel verification to ensure field officers visit valid, inhabited residences.',
      icon: MapPin
    },
    {
      title: 'Active Line (HLR) Validation',
      desc: 'Live telco network pinging to verify SIM active status before dialer queuing, eliminating disconnected and dead numbers.',
      icon: Smartphone
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero Banner */}
      <section className="bg-[#00334e] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-slate-700 text-[#38bdf8] text-xs font-semibold tracking-wider uppercase mb-4">
            <UserCheck className="w-3.5 h-3.5" />
            <span>ANALYTICS DRIVEN COLLECTION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl leading-tight">
            Enhancing Customer Contactability Through Skip Trace
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Lost contact numbers and outdated addresses account for over 40% of non-performing debt write-offs. Acenna's compliant Skip Trace engine re-establishes contact using ethical data enrichment, graph analysis, and real-time telecom verification.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => dispatch(setCurrentPage('contact-us'))}
              className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-glow-sm transition-all"
            >
              Run Portfolio Contactability Audit
            </button>
            <button
              onClick={() => dispatch(setCurrentPage('technology'))}
              className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold transition-all"
            >
              Explore Verification Pipeline
            </button>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00334e]">+42%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Re-Contactability Rate</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00334e]">2.5x</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Trace Speed Acceleration</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00334e]">850K+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Accounts Successfully Traced</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">100%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Compliant & Privacy Verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">Compliant Intelligence</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Four Pillars of Contactability Enhancement
            </h2>
            <p className="text-base text-slate-600 mt-3">
              We convert cold, write-off-ready accounts back into active, reachable resolution funnels without compromising on regulatory norms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {traceMethods.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover hover:border-brand-300 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0284c7] flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">{m.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{m.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Contact Point</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Compliance & Security Guarantee Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <ShieldCheck className="w-4 h-4" />
                <span>Strict Regulatory Adherence</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Zero Harassment. 100% Ethical Data Hygiene.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Acenna operates strictly within RBI Fair Practice guidelines, the Digital Personal Data Protection (DPDP) Act, and ISO 27001 data isolation frameworks. We never deploy illegal scrapers or invasive tracing methods.
              </p>
            </div>

            <button
              onClick={() => dispatch(setCurrentPage('contact-us'))}
              className="px-6 py-3 rounded-xl bg-[#00334e] hover:bg-brand-600 text-white font-semibold text-xs sm:text-sm shrink-0 transition-colors shadow-sm"
            >
              Request Sample Trace Batch
            </button>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#00334e] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Re-engage Lost Borrowers Before Incurring Write-Offs
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Upload your uncontactable portfolio and uncover verified, active phone numbers and coordinates.
          </p>
          <button
            onClick={() => dispatch(setCurrentPage('contact-us'))}
            className="px-8 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm shadow-glow transition-all"
          >
            Schedule Skip Trace Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
