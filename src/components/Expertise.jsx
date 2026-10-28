import React from 'react';
import { useDispatch } from 'react-redux';
import { services } from '../data/services';
import { updateField } from '../store/consultationSlice';
import { 
  BarChart3, 
  Database, 
  Cloud, 
  Cpu, 
  Code2, 
  RefreshCw, 
  GitBranch, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';

const iconMap = {
  BarChart3: BarChart3,
  Database: Database,
  Cloud: Cloud,
  Cpu: Cpu,
  Code2: Code2,
  RefreshCw: RefreshCw,
  GitBranch: GitBranch,
  ShieldCheck: ShieldCheck,
};

export default function Expertise() {
  const dispatch = useDispatch();

  const handleSelectService = (serviceTitle) => {
    dispatch(updateField({ field: 'service', value: serviceTitle }));
    const formElement = document.getElementById('contact');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>CORE CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Full-spectrum expertise for the intelligent enterprise
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Everything you need to turn technology investments into business outcomes.
          </p>
        </div>

        {/* 8 Expertise Cards Grid (4 columns on lg, 2 on md, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => {
            const Icon = iconMap[item.icon] || Database;
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl border border-slate-200/90 p-6 shadow-card hover:shadow-card-hover hover:border-brand-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-600 mb-5 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Category Pill */}
                  <span className="text-[11px] font-bold tracking-wider uppercase text-brand-600 block mb-2">
                    {item.category}
                  </span>

                  {/* Heading */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {item.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More Action Button */}
                <button
                  onClick={() => handleSelectService(item.title)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 group-hover:translate-x-1 transition-all pt-2 text-left"
                >
                  <span>Request Solution Brief</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
