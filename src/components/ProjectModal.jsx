import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../store/modalSlice';
import { updateField } from '../store/consultationSlice';
import { 
  X, 
  Check, 
  ExternalLink, 
  TrendingUp, 
  Sparkles, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';

export default function ProjectModal() {
  const dispatch = useDispatch();
  const { isOpen, modalType, modalData: project } = useSelector((state) => state.modal);

  if (!isOpen || modalType !== 'project' || !project) return null;

  const handleInquireAboutProject = () => {
    dispatch(closeModal());
    dispatch(updateField({ field: 'service', value: 'Application Development' }));
    dispatch(updateField({ field: 'message', value: `We would like to consult on architecture similar to: ${project.title}` }));
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
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                {project.tag}
              </span>
              <span className="text-xs font-mono text-emerald-600 flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-4 h-4" /> Production Grade
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-medium text-slate-500 mt-1">
              {project.headline}
            </p>
          </div>

          {/* Visual Showcase */}
          <div className="relative rounded-2xl overflow-hidden h-60 sm:h-72 bg-slate-950">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-5">
              <div className="flex flex-wrap gap-2">
                {project.metrics?.map((m, idx) => (
                  <div key={idx} className="bg-white/95 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-lg text-xs font-bold shadow">
                    <span className="text-brand-600 font-extrabold mr-1">{m.value}</span>
                    <span className="text-slate-500 font-normal">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
              Architectural Overview
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.description} Engineered to eliminate traditional enterprise latency bottlenecks through edge streaming, distributed indexing, and containerized microservices.
            </p>
          </div>

          {/* Key Capabilities */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
              Core Technical Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features?.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((t, idx) => (
                <span key={idx} className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Action Footer */}
        <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400">
            Source code and architectural diagrams available under client NDA.
          </span>
          <button
            onClick={handleInquireAboutProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-glow-sm transition-all"
          >
            <span>Consult on Similar Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
