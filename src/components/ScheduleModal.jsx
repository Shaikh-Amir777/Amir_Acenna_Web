import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../store/modalSlice';
import { 
  X, 
  Calendar, 
  Clock, 
  Video, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  User,
  Mail,
  Building
} from 'lucide-react';

const timeSlots = [
  '09:00 AM EST',
  '11:00 AM EST',
  '02:00 PM EST',
  '04:30 PM EST',
  '06:00 PM EST'
];

export default function ScheduleModal() {
  const dispatch = useDispatch();
  const { isOpen, modalType } = useSelector((state) => state.modal);

  const [selectedSlot, setSelectedSlot] = useState(timeSlots[0]);
  const [scheduled, setScheduled] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    notes: ''
  });

  if (!isOpen || modalType !== 'schedule') return null;

  const handleBook = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setScheduled(true);
  };

  const handleClose = () => {
    setScheduled(false);
    dispatch(closeModal());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/85 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 text-slate-900 border border-slate-200 overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {scheduled ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Architecture Session Booked</h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              We have reserved <span className="font-semibold text-brand-600">{selectedSlot}</span> for {form.name}. A calendar invite with a secure Google Meet / Teams link has been sent to <span className="font-semibold">{form.email}</span>.
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="w-full py-3 rounded-xl bg-navy-950 hover:bg-brand-600 text-white font-semibold text-sm transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md border border-brand-200">
                1-ON-1 ARCHITECTURAL SESSION
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-1">
              Book a Strategy Call
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Connect directly with a Principal Cloud & Data Architect to discuss your technical roadmap.
            </p>

            <form onSubmit={handleBook} className="space-y-4">
              {/* Select Time Slot */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-600" />
                  Available 30-min Slots (Tomorrow)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                        selectedSlot === slot
                          ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-brand-300'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-3 pt-2">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-100 focus:border-brand-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Work Email Address *"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-100 focus:border-brand-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-100 focus:border-brand-500"
                  />
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Briefly note your main priority (e.g. Snowflake migration, AI agents)..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-100 focus:border-brand-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-glow-sm transition-all"
                >
                  <Video className="w-4 h-4" />
                  <span>Confirm Architecture Briefing</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Zero obligations. Technical architecture focus.</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
