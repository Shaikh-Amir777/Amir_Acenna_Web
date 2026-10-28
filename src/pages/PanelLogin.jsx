import React, { useState } from 'react';
import { 
  Lock, 
  ShieldCheck, 
  Key, 
  User, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Smartphone,
  Scale,
  Eye,
  EyeOff
} from 'lucide-react';

export default function PanelLogin() {
  const [panelType, setPanelType] = useState('enterprise');
  const [credentials, setCredentials] = useState({ username: '', password: '', tenantId: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const panels = [
    { id: 'enterprise', name: 'Client Enterprise Desk', desc: 'For Banks, NBFCs & Fintech Institutional Portfolios', icon: Building2 },
    { id: 'field', name: 'Field Agent Operations', desc: 'Geo-tagged field logs & mobile telemetry', icon: Smartphone },
    { id: 'legal', name: 'Digital Legal & ODR Portal', desc: 'Notices, Section 138/25 dockets & conciliation', icon: Scale },
    { id: 'admin', name: 'System Administration', desc: 'Audit compliance, RBAC & API gateways', icon: ShieldCheck }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setLoggedIn(true);
    }, 1000);
  };

  return (
    <div className="bg-slate-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full mt-4">
        
        {/* Top Header Card */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#00334e] text-xs font-bold uppercase tracking-wider mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>SECURE ENTERPRISE AUTHENTICATION</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Acenna Operations & Telemetry Panel
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Select your operational role to access your dedicated workspace.
          </p>
        </div>

        {/* Main Panel Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Role Selector (5 cols) */}
          <div className="lg:col-span-5 bg-[#00334e] text-white p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] mb-4">
                Choose Access Desk
              </div>

              <div className="space-y-3">
                {panels.map((p) => {
                  const Icon = p.icon;
                  const isSelected = panelType === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => { setPanelType(p.id); setLoggedIn(false); }}
                      className={`w-full text-left p-4 rounded-2xl transition-all flex items-start gap-3 border ${
                        isSelected 
                          ? 'bg-white/15 border-[#38bdf8] shadow-md' 
                          : 'bg-white/5 border-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-[#38bdf8] text-[#00334e]' : 'bg-white/10 text-white'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">{p.name}</div>
                        <div className="text-[11px] text-slate-300 mt-0.5 leading-snug">{p.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>256-bit TLS Encrypted Session</span>
              </div>
              <div>Single Sign-On (SSO) supported via SAML 2.0</div>
            </div>
          </div>

          {/* Right Login Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
            {loggedIn ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Authentication Verified</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Redirecting to your isolated workspace for <span className="font-semibold text-[#00334e]">{panels.find(p => p.id === panelType)?.name}</span>...
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setLoggedIn(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors"
                  >
                    Log Out / Switch Panel
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="pb-3 border-b border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900">
                    Sign In to {panels.find(p => p.id === panelType)?.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Enter your institutional credentials to proceed.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Corporate ID / Email
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="user@enterprise.com"
                      value={credentials.username}
                      onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-100 focus:border-brand-500"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="••••••••••••"
                      value={credentials.password}
                      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                      className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-100 focus:border-brand-500"
                    />
                    <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 focus:outline-none"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {panelType === 'enterprise' && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Institutional Tenant Key (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ACENNA-CORP-9841"
                      value={credentials.tenantId}
                      onChange={(e) => setCredentials({ ...credentials, tenantId: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-100 focus:border-brand-500"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                    <input type="checkbox" className="rounded text-[#00334e] focus:ring-0" />
                    <span>Remember terminal</span>
                  </label>
                  <a href="#reset" onClick={(e) => { e.preventDefault(); alert('Please contact your IT administrator for credential resets.'); }} className="text-[#0284c7] font-semibold hover:underline">
                    Forgot password?
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#00334e] hover:bg-brand-600 text-white font-bold text-sm shadow-md transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Verifying Security Token...</span>
                      </>
                    ) : (
                      <>
                        <span>Authenticate to Console</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
