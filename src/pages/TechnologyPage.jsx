import React from 'react';
import Technology from '../components/Technology';
import { 
  Cpu, 
  ShieldCheck, 
  Cloud, 
  Database, 
  GitBranch, 
  Server, 
  Sparkles, 
  Lock,
  Layers,
  Zap
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../store/navigationSlice';

export default function TechnologyPage() {
  const dispatch = useDispatch();

  const techHighlights = [
    {
      title: 'Cloud-Native Distributed Core',
      desc: 'Containerized Kubernetes microservices architected for zero-downtime rolling updates and multi-region failover.',
      icon: Cloud,
      stat: '99.99% Availability'
    },
    {
      title: 'High-Throughput Streaming Lakehouse',
      desc: 'Real-time Apache Kafka and Spark data pipelines ingesting tens of millions of records with sub-second query latency.',
      icon: Database,
      stat: '<120ms P99'
    },
    {
      title: 'Enterprise AI & Private LLMs',
      desc: 'Fine-tuned conversational language models deployed on private enterprise clusters with zero data leakage guarantees.',
      icon: Cpu,
      stat: 'SOC2 & ISO Ready'
    },
    {
      title: 'Zero-Trust Cyber Resilience',
      desc: 'AES-256 field-level encryption, role-based access control (RBAC), and continuous vulnerability monitoring.',
      icon: Lock,
      stat: 'End-to-End Encrypted'
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero Banner */}
      <section className="bg-[#00334e] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-slate-700 text-[#38bdf8] text-xs font-semibold tracking-wider uppercase mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENTERPRISE ARCHITECTURE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl leading-tight">
            Engineered on Platforms the Enterprise Trusts
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Acenna combines leading multi-cloud infrastructure with proprietary machine learning pipelines, providing financial institutions and large enterprises with resilient, secure, and production-grade architectures.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => dispatch(setCurrentPage('contact-us'))}
              className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-glow-sm transition-all"
            >
              Discuss Architecture Integration
            </button>
          </div>
        </div>
      </section>

      {/* Tech Architecture Cards */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0284c7] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Technology Component (Dark Ecosystem Grid) */}
      <Technology />

    </div>
  );
}
