import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../store/technologySlice';
import { techCategories, technologies, techStats } from '../data/technologies';
import { 
  Cloud, 
  Database, 
  Server, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Workflow, 
  Code, 
  CheckCircle, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

const techCategoryIcons = {
  Cloud: Cloud,
  'Data & AI': Cpu,
  DevOps: Workflow,
  Databases: Database,
  Application: Code,
};

export default function Technology() {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.technology.activeCategory);

  const filteredTechs = activeCategory === 'All'
    ? technologies
    : technologies.filter((t) => t.category === activeCategory);

  return (
    <section id="technology" className="py-24 bg-navy-950 text-white relative overflow-hidden tech-glow-bg">
      {/* Background glow and subtle dots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-brand-400 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>TECH ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Engineered on platforms the enterprise trusts
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            We combine modern engineering practices with the world's leading technology platforms.
          </p>
        </div>

        {/* Category Filter Pills (Redux Connected) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist">
          {techCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => dispatch(setActiveCategory(category))}
                role="tab"
                aria-selected={isActive}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-glow-sm'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Technologies Grid (Dark cards matching reference screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mb-16">
          {filteredTechs.map((tech) => {
            const Icon = techCategoryIcons[tech.category] || Layers;
            return (
              <div
                key={tech.name}
                className="group p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-brand-500/50 hover:bg-slate-850/80 transition-all duration-300 shadow-sm hover:shadow-card-dark-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-brand-300 bg-brand-500/10 border border-brand-500/20 px-2 py-0.5 rounded">
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-brand-300 transition-colors mb-1.5">
                    {tech.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{tech.category}</span>
                  <span className="text-emerald-400 font-medium">{tech.level}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Statistics Row Below (As specified in requirement 7) */}
        <div className="rounded-2xl bg-slate-900/40 border border-slate-800/70 p-6 sm:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {techStats.map((stat, sIdx) => (
              <div key={sIdx} className={`${sIdx > 0 ? 'sm:pl-4' : ''} ${sIdx > 1 ? 'pt-4 sm:pt-0' : ''}`}>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-brand-400 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
