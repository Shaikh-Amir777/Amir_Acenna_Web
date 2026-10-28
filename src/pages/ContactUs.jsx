import React from 'react';
import Consultation from '../components/Consultation';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Headphones, 
  FileText,
  Sparkles
} from 'lucide-react';

export default function ContactUs() {
  const offices = [
    {
      city: 'Mumbai (Corporate HQ)',
      address: 'Acenna Tower, Level 8, Bandra-Kurla Complex (BKC)',
      state: 'Mumbai, Maharashtra 400051',
      phone: '+91 (22) 6980-2000',
      email: 'mumbai@acenna.com',
      badge: 'Headquarters'
    },
    {
      city: 'Bengaluru (Tech Hub)',
      address: 'Outer Ring Road, Marathahalli Tech Park, 4th Floor',
      state: 'Bengaluru, Karnataka 560103',
      phone: '+91 (80) 4120-7700',
      email: 'tech@acenna.com',
      badge: 'Data & AI Labs'
    },
    {
      city: 'Delhi NCR (North Operations)',
      address: 'DLF Cyber City, Tower B, Sector 25A',
      state: 'Gurugram, Haryana 122002',
      phone: '+91 (124) 450-9900',
      email: 'north@acenna.com',
      badge: 'Legal Operations'
    },
    {
      city: 'San Francisco (Global Desk)',
      address: '500 Howard Street, Suite 400',
      state: 'San Francisco, CA 94105, USA',
      phone: '+1 (800) 492-ACENNA',
      email: 'global@acenna.com',
      badge: 'US Operations'
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Page Hero Banner */}
      <section className="bg-[#00334e] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-slate-700 text-[#38bdf8] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KNOW US • REACH OUT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl leading-tight">
            Connect with Our Enterprise Architecture & Operations Desk
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Whether you want to discuss nationwide collection deployments, explore digital legal automation, or integrate advanced data pipelines, our leadership team is ready to assist.
          </p>
        </div>
      </section>

      {/* Office Locations Grid */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">Global & National Footprint</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Our Offices & Delivery Hubs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284c7] bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {office.badge}
                    </span>
                    <Building2 className="w-4 h-4 text-slate-400" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">{office.city}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-1">{office.address}</p>
                  <p className="text-xs text-slate-500 font-medium mb-4">{office.state}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#0284c7]" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#0284c7]" />
                    <span className="text-brand-600 font-medium">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Consultation Form */}
      <Consultation />

    </div>
  );
}
