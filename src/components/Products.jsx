import React from 'react';
import { useDispatch } from 'react-redux';
import { projects } from '../data/projects';
import { openModal } from '../store/modalSlice';
import { 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  Check, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Laptop
} from 'lucide-react';

export default function Products() {
  const dispatch = useDispatch();

  const handleOpenProjectModal = (project) => {
    dispatch(openModal({ type: 'project', data: project }));
  };

  return (
    <section id="products" className="py-24 bg-slate-50 text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-brand-700 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>OUR PRODUCTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Products we've engineered and shipped
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Real-world digital products built to solve complex business challenges.
          </p>
        </div>

        {/* 3 Large Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-card-hover hover:border-brand-400 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Card Browser Window / Mockup Header */}
              <div className="bg-slate-900 p-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-3 py-0.5 rounded-md truncate max-w-[180px]">
                  app.acenna.io/{project.id}
                </div>
                <div className="w-3 h-3 text-slate-600">
                  <Laptop className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Product Visual Container with Hover Zoom */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                {/* Metric pill overlay on image */}
                <div className="absolute bottom-3 left-3 bg-navy-950/90 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-lg text-xs font-semibold text-white shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>{project.metrics[0].value}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full">
                      {project.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Enterprise Ready</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Micro Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Button */}
                <button
                  onClick={() => handleOpenProjectModal(project)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy-950 hover:bg-brand-600 text-white text-sm font-semibold transition-all duration-200 shadow-sm group-hover:shadow-glow-sm"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
