import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Check, Sparkles, ArrowRight } from 'lucide-react';
import { servicesData, processSteps } from '@/data/services';
import FinalCta from '@/components/home/FinalCta';

export const metadata = {
  title: 'Services & Capabilities',
  description:
    'Comprehensive digital growth services: bespoke website development, headless e-commerce, influencer marketing campaigns, and tactile UGC creator production.',
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Services Header */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
              <Sparkles size={14} />
              <span>Full Service Spectrum</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-[#111111] tracking-tight leading-tight">
              Bespoke Digital &amp;{' '}
              <span className="font-editorial italic font-normal text-[#D62545]">
                Creator Capabilities.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#686868] leading-relaxed">
              We operate at the intersection of technical excellence and cultural resonance. Every service is structured to deliver clear, compounding commercial advantage without unnecessary agency overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          {servicesData.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="p-8 sm:p-12 bg-[#F5F5F2] border border-[#E5E5E5] hover:border-[#D62545] transition-all duration-200 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                {/* Left Column: Number, Title & Story */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl sm:text-5xl font-light font-editorial italic text-[#D62545]">
                      {service.number}
                    </span>
                    <span className="text-xs uppercase tracking-[0.25em] text-[#8A8A8A] font-bold border-l border-[#E5E5E5] pl-4">
                      {service.category}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-light text-[#111111]">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#686868] leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Target Clients */}
                  <div className="p-4 bg-white border border-[#E5E5E5] space-y-1">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#D62545] font-bold">
                      Tailored For
                    </div>
                    <div className="text-xs text-[#686868]">
                      {service.audience}
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#111111] font-bold">
                      Deliverables Included
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#111111]">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start space-x-2">
                          <Check size={14} className="text-[#D62545] mt-0.5 shrink-0" />
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contextual CTAs */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={service.href}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-[#D62545] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E94A14] transition-colors"
                    >
                      <span>Deep Dive Details</span>
                      <ArrowRight size={13} />
                    </Link>

                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center space-x-2 px-6 py-3 border border-[#111111] bg-white text-xs uppercase tracking-[0.2em] font-semibold text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
                    >
                      <span>Inquire About This</span>
                    </Link>
                  </div>
                </div>

                {/* Right Column: Visual Frame */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#E5E5E5] bg-white shadow-sm">
                    <Image
                      src={service.featuredImage}
                      alt={service.title}
                      fill
                      className="object-cover object-center hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md border border-[#E5E5E5] text-[10px] uppercase tracking-[0.2em] text-[#111111] font-bold shadow-sm">
                      NOXAS SPECIFICATION &middot; {service.number}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Methodology Summary */}
      <section className="py-20 bg-[#F5F5F2] border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
              Delivery Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#111111]">
              How Every Engagement Moves Forward
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className="p-6 bg-white border border-[#E5E5E5] space-y-3 shadow-sm">
                <div className="text-3xl font-light font-editorial italic text-[#D62545]">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-[#111111]">{step.title}</h3>
                <p className="text-xs text-[#686868] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
