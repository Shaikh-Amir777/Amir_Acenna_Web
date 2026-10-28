import React from 'react';
import { 
  MapPin, 
  PhoneCall, 
  ShieldCheck, 
  CheckCircle2, 
  Navigation, 
  Smartphone, 
  Users, 
  Globe2, 
  Languages, 
  QrCode, 
  Award,
  ArrowRight
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../store/navigationSlice';

export default function PanIndiaPresence() {
  const dispatch = useDispatch();

  const regions = [
    {
      region: 'North Zone',
      hubs: 'Delhi NCR, Lucknow, Chandigarh, Jaipur, Dehradun',
      pincodes: '140+ Pincodes',
      languages: 'Hindi, Punjabi, Haryanvi, Urdu',
      fieldForce: '350+ Field Officers'
    },
    {
      region: 'West Zone',
      hubs: 'Mumbai, Pune, Ahmedabad, Surat, Nagpur, Indore',
      pincodes: '160+ Pincodes',
      languages: 'Marathi, Gujarati, Hindi, Konkani',
      fieldForce: '420+ Field Officers'
    },
    {
      region: 'South Zone',
      hubs: 'Bengaluru, Hyderabad, Chennai, Kochi, Coimbatore',
      pincodes: '150+ Pincodes',
      languages: 'Kannada, Telugu, Tamil, Malayalam',
      fieldForce: '380+ Field Officers'
    },
    {
      region: 'East Zone',
      hubs: 'Kolkata, Patna, Bhubaneswar, Ranchi, Guwahati',
      pincodes: '90+ Pincodes',
      languages: 'Bengali, Odia, Assamese, Maithili',
      fieldForce: '210+ Field Officers'
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero Banner */}
      <section className="bg-[#00334e] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-slate-700 text-[#38bdf8] text-xs font-semibold tracking-wider uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>ANALYTICS DRIVEN COLLECTION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl leading-tight">
            PAN India Field Presence with Best-in-Class Tele Calling
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Acenna bridges technology with unmatched ground execution. We deploy certified, geo-verified field officers across 500+ Indian pincodes, backed by state-of-the-art multi-lingual contact centers operating under strict ethical and regulatory governance.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => dispatch(setCurrentPage('contact-us'))}
              className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-glow-sm transition-all"
            >
              Inquire About Field Coverage
            </button>
            <button
              onClick={() => dispatch(setCurrentPage('about-us'))}
              className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold transition-all"
            >
              View Operations Footprint
            </button>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00334e]">500+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Pincodes Active</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00334e]">14+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Regional Dialects</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00334e]">1,300+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Certified Field Officers</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">100%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">GPS Telemetry Verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Field Tech & Tele Calling Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">Mobile Edge Technology</span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Geo-Fenced Field Application for Precision & Accountability
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every field officer operates using Acenna's encrypted mobile application. Field visits require geofence validation, timestamped photo evidence, and instantaneous digital receipts.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0284c7] flex items-center justify-center shrink-0">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Real-Time Route Optimization</h4>
                    <p className="text-xs text-slate-500">Algorithms map shortest travel routes to maximize daily right-party contact attempts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Direct Bank-Linked UPI Dynamic QR</h4>
                    <p className="text-xs text-slate-500">Zero cash handling risk. Officers generate dynamic UPI QRs crediting directly into the client bank account.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">DRA Certified & Police Verified</h4>
                    <p className="text-xs text-slate-500">100% of our ground force is Debt Recovery Agent (DRA) certified with clean background checks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-5 h-5 text-[#38bdf8]" />
                  <span className="font-bold text-sm tracking-wide">AI Tele-Calling Centers</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Active SLA 99.9%</span>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="font-semibold text-white mb-1">14+ Native Language Dialers</div>
                  <p className="text-slate-400">Callers routed based on borrower origin (Hindi, Marathi, Telugu, Tamil, Kannada, Bengali, etc.).</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="font-semibold text-white mb-1">Real-Time Speech & Tone Analytics</div>
                  <p className="text-slate-400">AI monitors conversational pitch, sentiment, and strictly prohibits non-compliant vocabulary.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="font-semibold text-white mb-1">Automated Promise-to-Pay (PTP) Nudges</div>
                  <p className="text-slate-400">Post-call WhatsApp and SMS confirmation sent automatically with immediate payment link.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Regional Coverage Grid */}
          <div className="border-t border-slate-200 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">Regional Hubs</span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">Multi-Tier Zonal Reach</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regions.map((reg, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-lg font-bold text-slate-900 mb-1">{reg.region}</div>
                  <div className="text-xs font-semibold text-[#0284c7] mb-3">{reg.pincodes}</div>
                  
                  <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-200">
                    <div>
                      <span className="font-semibold text-slate-700">Hubs: </span>
                      {reg.hubs}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Languages: </span>
                      {reg.languages}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Strength: </span>
                      <span className="text-emerald-700 font-bold">{reg.fieldForce}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#00334e] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Need Immediate Field Activation in Any Indian State?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Our established regional infrastructure allows turnkey portfolio onboarding with full compliance within 72 hours.
          </p>
          <button
            onClick={() => dispatch(setCurrentPage('contact-us'))}
            className="px-8 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm shadow-glow transition-all"
          >
            Deploy Field Force With Acenna
          </button>
        </div>
      </section>
    </div>
  );
}
