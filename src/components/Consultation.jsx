import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  updateField, 
  setErrors, 
  clearErrors, 
  startSubmission, 
  submissionSuccess, 
  resetConsultationForm 
} from '../store/consultationSlice';
import { 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  RotateCcw,
  Building
} from 'lucide-react';

const serviceOptions = [
  'Data & Analytics',
  'Cloud Engineering',
  'AI & Machine Learning',
  'Application Development',
  'Digital Transformation',
  'DevOps & Automation',
  'Cybersecurity',
  'Other Enterprise Requirement'
];

export default function Consultation() {
  const dispatch = useDispatch();
  const { formData, errors, isSubmitting, isSubmitted, successMessage } = useSelector(
    (state) => state.consultation
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please provide a valid corporate email';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.message.trim()) newErrors.message = 'Please provide brief details about your requirement';

    dispatch(setErrors(newErrors));
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch(startSubmission());

    // Simulate enterprise API submission
    setTimeout(() => {
      dispatch(
        submissionSuccess(
          `Thank you ${formData.firstName}! Your enterprise architecture request has been received. One of our lead architects will contact you within 24 hours.`
        )
      );
    }, 900);
  };

  return (
    <section id="contact" className="py-24 bg-white text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>LET'S CONNECT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Let's architect your next breakthrough
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Tell us about your challenge. Our experts will help you identify the right technology strategy and execution path.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 3 Benefits + Office Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* 3 Pillar Benefits */}
            <div className="space-y-6">
              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-brand-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-brand-600 flex items-center justify-center font-bold text-base shrink-0">
                  01
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Strategy First</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Start with a clear technology and data strategy aligned to board-level outcomes and realistic ROI milestones.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-brand-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-base shrink-0">
                  02
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Built to Scale</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Architect resilient, multi-cloud solutions designed to withstand massive transaction volumes without rewrites.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-brand-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-base shrink-0">
                  03
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Execution Focused</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Move from ideas to production-ready solutions with battle-tested squads and automated CI/CD guardrails.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact & Assurance Info Box */}
            <div className="p-6 rounded-2xl bg-navy-950 text-white shadow-xl border border-slate-800">
              <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Building className="w-4 h-4 text-brand-400" />
                Enterprise Direct Desk
              </h4>

              <div className="space-y-3 text-sm text-slate-300 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>architects@acenna.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>+1 (800) 492-ACENNA (Global Direct)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>San Francisco • New York • London • Singapore</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Non-Disclosure Agreement signed prior to technical discussions.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-lg">
            
            {isSubmitted ? (
              <div className="text-center py-12 px-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Consultation Request Confirmed</h3>
                <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
                  {successMessage}
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => dispatch(resetConsultationForm())}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="border-b border-slate-100 pb-4 mb-4">
                  <h3 className="text-xl font-bold text-slate-900">Initiate Architecture Discussion</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Fill in your information to connect with a Senior Solutions Architect.</p>
                </div>

                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Marcus"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.firstName ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-100'
                      }`}
                    />
                    {errors.firstName && <p className="text-xs text-rose-500 mt-1">{errors.firstName}</p>}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Vance"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.lastName ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-100'
                      }`}
                    />
                    {errors.lastName && <p className="text-xs text-rose-500 mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="workEmail" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      placeholder="marcus@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.workEmail ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-100'
                      }`}
                    />
                    {errors.workEmail && <p className="text-xs text-rose-500 mt-1">{errors.workEmail}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-100 transition-all"
                    />
                  </div>
                </div>

                {/* Company and Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Enterprise Global Corp"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.company ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-100'
                      }`}
                    />
                    {errors.company && <p className="text-xs text-rose-500 mt-1">{errors.company}</p>}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Primary Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-100 transition-all"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project / Requirement Details */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Project / Technical Requirement *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your current tech stack, target timeline, and the key business outcome you want to achieve..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.message ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-100'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-brand-600 hover:bg-brand-500 active:scale-[0.99] shadow-glow hover:shadow-glow-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Consultation Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Start a Conversation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-400">
                  By submitting, you agree to our confidential handling of all architectural details. We never share enterprise inquiries.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
