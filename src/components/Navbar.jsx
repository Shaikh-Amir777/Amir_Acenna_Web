import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  setCurrentPage, 
  setIsScrolled, 
  toggleMobileMenu, 
  setMobileMenuOpen 
} from '../store/navigationSlice';
import { openModal } from '../store/modalSlice';
import { 
  Layers, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown,
  PhoneCall, 
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Database,
  Scale,
  MapPin,
  Megaphone,
  UserCheck,
  Building2,
  Lock,
  Cpu,
  Users
} from 'lucide-react';

export default function Navbar() {
  const dispatch = useDispatch();
  const { currentPage, isScrolled, mobileMenuOpen } = useSelector((state) => state.navigation);

  const [knowUsOpen, setKnowUsOpen] = useState(false);
  const [analyticsOpen, setAnalyticsOpen] = useState(false);

  // Mobile accordion state
  const [mobileKnowUs, setMobileKnowUs] = useState(false);
  const [mobileAnalytics, setMobileAnalytics] = useState(false);

  const knowUsTimer = useRef(null);
  const analyticsTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        dispatch(setIsScrolled(true));
      } else {
        dispatch(setIsScrolled(false));
      }
    };

    const handlePopState = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      dispatch(setCurrentPage(hash || 'home'));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [dispatch]);

  const handlePageNavigate = (pageKey) => {
    dispatch(setCurrentPage(pageKey));
    setKnowUsOpen(false);
    setAnalyticsOpen(false);
    dispatch(setMobileMenuOpen(false));
  };

  const handleOpenSchedule = () => {
    dispatch(openModal({ type: 'schedule' }));
    dispatch(setMobileMenuOpen(false));
  };

  // Hover handlers with debounce
  const handleKnowUsEnter = () => {
    if (knowUsTimer.current) clearTimeout(knowUsTimer.current);
    setKnowUsOpen(true);
  };
  const handleKnowUsLeave = () => {
    knowUsTimer.current = setTimeout(() => {
      setKnowUsOpen(false);
    }, 150);
  };

  const handleAnalyticsEnter = () => {
    if (analyticsTimer.current) clearTimeout(analyticsTimer.current);
    setAnalyticsOpen(true);
  };
  const handleAnalyticsLeave = () => {
    analyticsTimer.current = setTimeout(() => {
      setAnalyticsOpen(false);
    }, 150);
  };

  const isNavSolid = isScrolled || (currentPage && currentPage !== 'home');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isNavSolid
            ? 'bg-navy-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3.5'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Official Acenna Brand Logo with Blinking Circle */}
            <button
              onClick={() => handlePageNavigate('home')}
              className="flex items-center gap-2.5 group focus:outline-none text-left py-1"
              aria-label="Acenna Enterprise Home"
            >
              <img
                src="/logo/finalLogo.png"
                alt="Acenna Logo"
                className="h-8 sm:h-9 md:h-9 w-auto object-contain hover:opacity-90 transition-opacity"
              />
              <span className="relative flex h-2.5 w-2.5 mb-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500 shadow-glow-sm"></span>
              </span>
            </button>

            {/* Center: Original Floating Pill Capsule Navigation Menu */}
            <nav 
              className="hidden lg:flex items-center gap-1 xl:gap-2 bg-navy-900/70 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md shadow-sm"
              aria-label="Main Navigation"
            >
              {/* 1. Home */}
              <button
                onClick={() => handlePageNavigate('home')}
                className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
                  currentPage === 'home'
                    ? 'text-white bg-brand-600 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
              </button>

              {/* 2. Know Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleKnowUsEnter}
                onMouseLeave={handleKnowUsLeave}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 focus:outline-none ${
                    knowUsOpen || currentPage === 'about-us' || currentPage === 'contact-us'
                      ? 'text-white bg-brand-600 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                  aria-expanded={knowUsOpen}
                >
                  <span>Know Us</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${knowUsOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* White Floating Dropdown Box */}
                {knowUsOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-52 bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    onMouseEnter={handleKnowUsEnter}
                    onMouseLeave={handleKnowUsLeave}
                  >
                    <button
                      onClick={() => handlePageNavigate('about-us')}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2.5 ${
                        currentPage === 'about-us' ? 'text-brand-600 bg-blue-50/70 font-bold' : 'text-slate-800'
                      }`}
                    >
                      <Building2 className="w-4 h-4 text-brand-600" />
                      <span>About Us</span>
                    </button>

                    <div className="h-[1px] bg-slate-100 mx-3 my-1" />

                    <button
                      onClick={() => handlePageNavigate('contact-us')}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2.5 ${
                        currentPage === 'contact-us' ? 'text-brand-600 bg-blue-50/70 font-bold' : 'text-slate-800'
                      }`}
                    >
                      <PhoneCall className="w-4 h-4 text-brand-600" />
                      <span>Contact Us</span>
                    </button>
                  </div>
                )}
              </div>

              {/* 3. Analytics Driven Collection Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleAnalyticsEnter}
                onMouseLeave={handleAnalyticsLeave}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 focus:outline-none ${
                    analyticsOpen || ['data-core', 'digital-legal', 'pan-india', 'campaign-management', 'skip-trace'].includes(currentPage)
                      ? 'text-white bg-brand-600 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                  aria-expanded={analyticsOpen}
                >
                  <span>Analytics Driven Collection</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${analyticsOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* White Floating Dropdown Box with 5 items */}
                {analyticsOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-[420px] bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200/90 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    onMouseEnter={handleAnalyticsEnter}
                    onMouseLeave={handleAnalyticsLeave}
                  >
                    <button
                      onClick={() => handlePageNavigate('data-core')}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center gap-3 border-b border-slate-100 ${
                        currentPage === 'data-core' ? 'text-brand-600 bg-blue-50/70 font-bold' : 'text-slate-800'
                      }`}
                    >
                      <Database className="w-4 h-4 text-brand-600 shrink-0" />
                      <span>Data is core to overall collection</span>
                    </button>

                    <button
                      onClick={() => handlePageNavigate('digital-legal')}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center gap-3 border-b border-slate-100 ${
                        currentPage === 'digital-legal' ? 'text-brand-600 bg-blue-50/70 font-bold' : 'text-slate-800'
                      }`}
                    >
                      <Scale className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span>Digital Legal Services</span>
                    </button>

                    <button
                      onClick={() => handlePageNavigate('pan-india')}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center gap-3 border-b border-slate-100 ${
                        currentPage === 'pan-india' ? 'text-brand-600 bg-blue-50/70 font-bold' : 'text-slate-800'
                      }`}
                    >
                      <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>PAN India field presence with best-in-class tele calling</span>
                    </button>

                    <button
                      onClick={() => handlePageNavigate('campaign-management')}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center gap-3 border-b border-slate-100 ${
                        currentPage === 'campaign-management' ? 'text-brand-600 bg-blue-50/70 font-bold' : 'text-slate-800'
                      }`}
                    >
                      <Megaphone className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>Campaign Management</span>
                    </button>

                    <button
                      onClick={() => handlePageNavigate('skip-trace')}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center gap-3 ${
                        currentPage === 'skip-trace' ? 'text-brand-600 bg-blue-50/70 font-bold' : 'text-slate-800'
                      }`}
                    >
                      <UserCheck className="w-4 h-4 text-cyan-600 shrink-0" />
                      <span>Enhancing customer contactability through Skip Trace</span>
                    </button>
                  </div>
                )}
              </div>

              {/* 4. Technology */}
              <button
                onClick={() => handlePageNavigate('technology')}
                className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
                  currentPage === 'technology'
                    ? 'text-white bg-brand-600 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Technology
              </button>

              {/* 5. Team */}
              <button
                onClick={() => handlePageNavigate('team')}
                className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
                  currentPage === 'team'
                    ? 'text-white bg-brand-600 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Team
              </button>

              {/* 6. Panel Login */}
              <button
                onClick={() => handlePageNavigate('panel-login')}
                className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
                  currentPage === 'panel-login'
                    ? 'text-white bg-brand-600 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Panel Login
              </button>
            </nav>

            {/* Right: Original Primary "Talk to Us" Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={handleOpenSchedule}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 active:scale-95 shadow-glow-sm hover:shadow-glow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-navy-950"
              >
                <span>Talk to Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => dispatch(toggleMobileMenu())}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity"
            onClick={() => dispatch(setMobileMenuOpen(false))}
          />

          {/* Drawer content */}
          <div className="relative mt-20 mx-4 rounded-2xl bg-navy-900 border border-slate-800 p-6 shadow-2xl flex flex-col gap-3 max-h-[calc(100vh-100px)] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Enterprise Navigation
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-brand-400 font-medium">
                <Sparkles className="w-3.5 h-3.5" /> Acenna Enterprise
              </span>
            </div>

            <div className="flex flex-col gap-1.5 text-sm">
              <button
                onClick={() => handlePageNavigate('home')}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold transition-all ${
                  currentPage === 'home'
                    ? 'bg-brand-600/20 text-brand-400 border border-brand-500/30'
                    : 'text-slate-300 hover:bg-brand-600/20 hover:text-white'
                }`}
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </button>

              {/* Mobile Know Us Accordion */}
              <div>
                <button
                  onClick={() => setMobileKnowUs(!mobileKnowUs)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold text-slate-300 hover:bg-slate-800/60"
                >
                  <span>Know Us</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileKnowUs ? 'rotate-180' : ''}`} />
                </button>

                {mobileKnowUs && (
                  <div className="pl-4 pr-2 py-1.5 space-y-1 bg-slate-950/50 rounded-xl mt-1 text-xs">
                    <button
                      onClick={() => handlePageNavigate('about-us')}
                      className="w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:text-brand-400 hover:bg-slate-800/50 flex items-center gap-2"
                    >
                      <Building2 className="w-3.5 h-3.5 text-brand-400" />
                      <span>About Us</span>
                    </button>
                    <button
                      onClick={() => handlePageNavigate('contact-us')}
                      className="w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:text-brand-400 hover:bg-slate-800/50 flex items-center gap-2"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-brand-400" />
                      <span>Contact Us</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Analytics Accordion */}
              <div>
                <button
                  onClick={() => setMobileAnalytics(!mobileAnalytics)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold text-slate-300 hover:bg-slate-800/60"
                >
                  <span>Analytics Driven Collection</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAnalytics ? 'rotate-180' : ''}`} />
                </button>

                {mobileAnalytics && (
                  <div className="pl-4 pr-2 py-1.5 space-y-1 bg-slate-950/50 rounded-xl mt-1 text-xs">
                    <button
                      onClick={() => handlePageNavigate('data-core')}
                      className="w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:text-brand-400 hover:bg-slate-800/50 flex items-center gap-2"
                    >
                      <Database className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                      <span>Data is core to overall collection</span>
                    </button>
                    <button
                      onClick={() => handlePageNavigate('digital-legal')}
                      className="w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:text-brand-400 hover:bg-slate-800/50 flex items-center gap-2"
                    >
                      <Scale className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>Digital Legal Services</span>
                    </button>
                    <button
                      onClick={() => handlePageNavigate('pan-india')}
                      className="w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:text-brand-400 hover:bg-slate-800/50 flex items-center gap-2"
                    >
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>PAN India field presence...</span>
                    </button>
                    <button
                      onClick={() => handlePageNavigate('campaign-management')}
                      className="w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:text-brand-400 hover:bg-slate-800/50 flex items-center gap-2"
                    >
                      <Megaphone className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>Campaign Management</span>
                    </button>
                    <button
                      onClick={() => handlePageNavigate('skip-trace')}
                      className="w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:text-brand-400 hover:bg-slate-800/50 flex items-center gap-2"
                    >
                      <UserCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Enhancing contactability through Skip Trace</span>
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handlePageNavigate('technology')}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold transition-all ${
                  currentPage === 'technology'
                    ? 'bg-brand-600/20 text-brand-400 border border-brand-500/30'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <span>Technology</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </button>

              <button
                onClick={() => handlePageNavigate('team')}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold transition-all ${
                  currentPage === 'team'
                    ? 'bg-brand-600/20 text-brand-400 border border-brand-500/30'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <span>Team</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </button>

              <button
                onClick={() => handlePageNavigate('panel-login')}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-left rounded-xl font-semibold transition-all ${
                  currentPage === 'panel-login'
                    ? 'bg-brand-600/20 text-brand-400 border border-brand-500/30'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <span>Panel Login</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </button>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={handleOpenSchedule}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold shadow-glow-sm transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Talk to Us / Book a Call</span>
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 py-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Enterprise SLA Guarantee • NDA Protected</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
