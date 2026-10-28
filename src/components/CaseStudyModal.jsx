import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../store/modalSlice';
import { updateField } from '../store/consultationSlice';
import { 
  X, 
  Sparkles, 
  TrendingUp, 
  CheckCircle, 
  Building, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';

export default function CaseStudyModal() {
  const dispatch = useDispatch();
  const { isOpen, modalType, modalData: study } = useSelector((state) => state.modal);

  if (!isOpen || modalType !== 'caseStudy' || !study) return null;

  const handleInquireAboutCaseStudy = () => {
    dispatch(closeModal());
    dispatch(updateField({ field: 'service', value: 'Data & Analytics' }));
    dispatch(updateField({ field: 'message', value: `Inquiring regarding Case Study: ${study.title}` }));
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity"
        onClick={() => dispatch(closeModal())}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl z-10 text-slate-900 border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col justify-between">
        
        {/* Close Button */}
        <button
          onClick={() => dispatch(closeModal())}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto pr-2 space-y-6">
          
          {/* Header */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                {study.category}
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Result: {study.result}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {study.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-slate-500 mt-2">
              <span className="flex items-center gap-1 font-semibold text-slate-700">
                <Building className="w-3.5 h-3.5 text-brand-600" /> {study.client}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> Engagement: {study.duration}
              </span>
            </div>
          </div>

          {/* Visual Banner */}
          <div className="relative rounded-2xl overflow-hidden h-52 sm:h-64 bg-slate-950">
            <img 
              src={study.image} 
              alt={study.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
              <div className="text-white text-sm font-medium">
                {study.description}
              </div>
            </div>
          </div>

          {/* Verified Outcomes */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              Verified Business Outcomes
            </h4>
            <div className="space-y-2.5">
              {study.impact?.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Stack */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
              Deployed Infrastructure & Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {study.tech?.map((t, idx) => (
                <span key={idx} className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400">
            Full enterprise case study report with telemetry benchmarks available upon request.
          </span>
          <button
            onClick={handleInquireAboutCaseStudy}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-glow-sm transition-all"
          >
            <span>Discuss This Use Case</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
