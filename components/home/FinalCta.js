import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function FinalCta() {
  return (
    <section className="py-28 sm:py-36 bg-[#F5F5F2] border-t border-[#E5E5E5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-8">

        {/* Eyebrow */}
        <div className="inline-block text-[11px] uppercase tracking-[0.3em] text-[#D62545] font-bold">
          Initiate Collaboration
        </div>

        {/* Dramatic Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-light text-[#111111] tracking-tight leading-[1.1]">
          Have Something{' '}
          <span className="font-editorial italic font-normal text-[#D62545] block mt-1">
            Worth Building?
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#686868] max-w-xl mx-auto leading-relaxed">
          Tell us about your brand, your idea, or the opportunity you&apos;re exploring. We respond directly to all project inquiries.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
          <Link
            href="/contact"
            className="group inline-flex items-center space-x-3 px-9 py-4 bg-[#D62545] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E94A14] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D62545] focus:ring-offset-2"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center space-x-2 px-9 py-4 border border-[#111111] bg-white text-xs uppercase tracking-[0.2em] font-semibold text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-200 shadow-sm"
          >
            <span>Meet the Services</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Client Note */}
        <div className="pt-8 text-xs text-[#8A8A8A] tracking-wide">
          Direct consultations &middot; Transparent scope agreements &middot; No vendor lock-in
        </div>

      </div>
    </section>
  );
}
