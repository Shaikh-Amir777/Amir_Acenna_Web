import React from 'react';
import { 
  Users, 
  Linkedin, 
  Mail, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Briefcase, 
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../store/navigationSlice';

export default function TeamPage() {
  const dispatch = useDispatch();

  const leaders = [
    {
      name: 'Vikramaditya Sharma',
      role: 'Founder & Chief Executive Officer',
      bio: 'Over 20 years leading large-scale banking transformations, institutional debt resolution, and enterprise consulting across APAC & North America.',
      credentials: 'Ex-Standard Chartered, McKinsey • IIM Ahmedabad Alum',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      tag: 'Executive Leadership'
    },
    {
      name: 'Dr. Ananya Sen',
      role: 'Chief Data & AI Scientist',
      bio: 'Leads Acenna’s machine learning and predictive propensity modeling squads. Specializes in behavioral graph models and real-time inference.',
      credentials: 'Ph.D. Machine Learning • Ex-Amazon AI Labs',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      tag: 'Data & AI'
    },
    {
      name: 'Rajeshwar Kulkarni',
      role: 'Head of PAN India Operations',
      bio: 'Oversees 1,300+ certified field officers, regional hubs, and 14-language contact centers across 500+ Indian pincodes.',
      credentials: '22+ Years Banking Recovery Leadership',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      tag: 'Ground Operations'
    },
    {
      name: 'Adv. Meenakshi Sundaram',
      role: 'General Counsel & Head of Legal Tech',
      bio: 'Pioneered Acenna’s digital notice automation, Section 138/25 institutional processing, and Online Dispute Resolution frameworks.',
      credentials: 'High Court Advocate • National Law School (NLSIU)',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      tag: 'Legal Operations'
    },
    {
      name: 'Rohan Deshmukh',
      role: 'VP of Cloud Infrastructure & Security',
      bio: 'Architects multi-region Kubernetes topologies, real-time Kafka event streams, and enterprise zero-trust security postures.',
      credentials: 'AWS Certified Solutions Architect • CISSP',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      tag: 'Engineering'
    },
    {
      name: 'Priya Nambiar',
      role: 'Director of Client Strategy & Resolution',
      bio: 'Directs bespoke portfolio strategy for leading retail banks and fintech NBFCs, ensuring continuous lift in recovery KPIs.',
      credentials: 'Ex-HDFC Bank, Axis Capital',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      tag: 'Client Solutions'
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero Banner */}
      <section className="bg-[#00334e] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-slate-700 text-[#38bdf8] text-xs font-semibold tracking-wider uppercase mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>OUR LEADERSHIP & SPECIALISTS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl leading-tight">
            The Minds Driving Enterprise Transformation
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Acenna brings together veteran banking executives, machine learning researchers, high-court legal counsels, and nationwide operational directors united under a mission of execution excellence.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, idx) => (
              <div 
                key={idx}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-card-hover hover:border-brand-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-slate-900">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#00334e]/85 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/10">
                      {leader.tag}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors mb-1">
                      {leader.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#0284c7] mb-3">
                      {leader.role}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {leader.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-slate-700 truncate max-w-[220px]">
                    {leader.credentials}
                  </span>
                  <a href="#linkedin" className="text-slate-400 hover:text-[#0284c7] transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">Careers at Acenna</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 mb-4">
            Join Our High-Growth Technology & Operations Team
          </h3>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto text-sm">
            We are actively recruiting Senior Data Engineers, AI Researchers, Regional Field Managers, and Legal Tech Architects across India and global offices.
          </p>
          <button
            onClick={() => dispatch(setCurrentPage('contact-us'))}
            className="px-8 py-3.5 rounded-xl bg-[#00334e] hover:bg-brand-600 text-white font-bold text-sm shadow-sm transition-all"
          >
            Explore Open Roles
          </button>
        </div>
      </section>
    </div>
  );
}
