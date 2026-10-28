import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextSlide, prevSlide, setSlide } from '../store/testimonialsSlice';
import { testimonials } from '../data/testimonials';
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Star, 
  Sparkles, 
  Building2, 
  CheckCircle2 
} from 'lucide-react';

export default function Testimonials() {
  const dispatch = useDispatch();
  const currentIndex = useSelector((state) => state.testimonials.currentIndex);

  return (
    <section className="py-24 bg-navy-950 text-white relative overflow-hidden tech-glow-bg border-t border-slate-800/80">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-brand-400 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>EXECUTIVE ENDORSEMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Trusted by teams who expect excellence
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            Our clients partner with us to solve complex technology challenges and create lasting business impact.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Navigation Prev Button */}
          <button
            onClick={() => dispatch(prevSlide())}
            aria-label="Previous testimonial"
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-800/90 hover:bg-brand-600 text-slate-300 hover:text-white border border-slate-700/80 items-center justify-center transition-all duration-200 shadow-lg focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next Button */}
          <button
            onClick={() => dispatch(nextSlide())}
            aria-label="Next testimonial"
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-800/90 hover:bg-brand-600 text-slate-300 hover:text-white border border-slate-700/80 items-center justify-center transition-all duration-200 shadow-lg focus:outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Cards Grid (3 cards visible, with active highlight) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((item, idx) => {
              const isActive = (currentIndex % 3) === idx;
              return (
                <div
                  key={item.id}
                  className={`relative p-8 rounded-2xl bg-slate-900/70 border transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? 'border-brand-500/80 bg-slate-850/90 shadow-card-dark-hover scale-[1.02]'
                      : 'border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div>
                    {/* Star Rating and Quote mark */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-slate-700" />
                    </div>

                    {/* Quote text */}
                    <p className="text-slate-200 text-base leading-relaxed mb-6 font-normal italic">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author meta */}
                  <div className="pt-6 border-t border-slate-800 flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover border border-slate-700 shrink-0"
                    />
                    <div>
                      <div className="text-sm font-bold text-white tracking-wide">
                        {item.name}
                      </div>
                      <div className="text-xs text-brand-400 font-medium">
                        {item.role}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {item.company}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {testimonials.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => dispatch(setSlide(dotIdx))}
                aria-label={`Jump to slide ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === dotIdx
                    ? 'w-8 bg-brand-500'
                    : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
