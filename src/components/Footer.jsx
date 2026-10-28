import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../store/navigationSlice';
import { 
  Layers, 
  Linkedin, 
  Twitter, 
  Github, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  ArrowRight,
  ShieldCheck,
  Send
} from 'lucide-react';

export default function Footer() {
  const dispatch = useDispatch();

  const handleNavigate = (page) => {
    dispatch(setCurrentPage(page));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Assurance Bar */}
        <div className="pb-12 mb-12 border-b border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
              Stay ahead of enterprise collection & data intelligence
            </h3>
            <p className="text-sm text-slate-400">
              Receive quarterly regulatory updates, analytics whitepapers, and portfolio recovery benchmarks.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Acenna Enterprise Intelligence Updates!'); }} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter corporate email"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shrink-0 transition-colors flex items-center gap-1.5"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          
          {/* Col 1 & 2: Brand Information (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <button 
              onClick={() => handleNavigate('home')} 
              className="flex items-center gap-2.5 text-left focus:outline-none py-1"
              aria-label="Acenna Home"
            >
              <img
                src="/logo/finalLogo.png"
                alt="Acenna Logo"
                className="h-8 sm:h-9 w-auto object-contain hover:opacity-90 transition-opacity"
              />
              <span className="relative flex h-2.5 w-2.5 mb-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500 shadow-glow-sm"></span>
              </span>
            </button>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We help enterprises transform data, recovery operations, and technology into scalable digital solutions.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Acenna LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 hover:border-brand-500 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Acenna Twitter"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 hover:border-brand-500 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Acenna GitHub"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 hover:border-brand-500 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Acenna Instagram"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 hover:border-brand-500 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Know Us */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Know Us</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNavigate('about-us')} className="hover:text-white transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('contact-us')} className="hover:text-white transition-colors text-left">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('team')} className="hover:text-white transition-colors text-left">
                  Leadership Team
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('about-us')} className="hover:text-white transition-colors text-left">
                  Our Milestones
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('contact-us')} className="hover:text-white transition-colors text-left">
                  Global Offices
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Analytics Collection */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Analytics Collection</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNavigate('data-core')} className="hover:text-white transition-colors text-left">
                  Data Core Collection
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('digital-legal')} className="hover:text-white transition-colors text-left">
                  Digital Legal Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('pan-india')} className="hover:text-white transition-colors text-left">
                  PAN India Field Presence
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('campaign-management')} className="hover:text-white transition-colors text-left">
                  Campaign Management
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('skip-trace')} className="hover:text-white transition-colors text-left">
                  Skip Trace Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Platform & Portals */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Platform & Portals</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNavigate('technology')} className="hover:text-white transition-colors text-left">
                  Technology Architecture
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('panel-login')} className="hover:text-white transition-colors text-left text-cyan-400 font-semibold">
                  Panel Login Portal
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('technology')} className="hover:text-white transition-colors text-left">
                  Cloud & Kubernetes Core
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('about-us')} className="hover:text-white transition-colors text-left">
                  ISO & SOC2 Compliance
                </button>
              </li>
            </ul>
          </div>

          {/* Col 6: Direct Inquiries */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Headquarters</h4>
            <div className="text-xs text-slate-400 space-y-2 mb-6">
              <div className="font-semibold text-slate-200">Acenna Tower, BKC</div>
              <div>Bandra-Kurla Complex, Mumbai 400051</div>
              <div>+91 (22) 6980-2000</div>
              <div className="text-brand-400">contact@acenna.com</div>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <button
                onClick={() => handleNavigate('panel-login')}
                className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-[#00334e] hover:bg-brand-600 text-white transition-colors text-center"
              >
                Access Client Panel &rarr;
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Acenna Technologies Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Acenna follows strict DPDP Act & GDPR data privacy regulations.'); }} className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms of Service: Standard enterprise master services agreement applies.'); }} className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#cookies" onClick={(e) => { e.preventDefault(); alert('Cookies are utilized only for authentication and session integrity.'); }} className="hover:text-slate-300 transition-colors">Cookie Policy</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
