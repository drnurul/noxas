import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Compass, Shield, Sparkles, Target, Users2 } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import FinalCta from '@/components/home/FinalCta';

export const metadata = {
  title: 'About NOXAS',
  description:
    'The creative philosophy, agency positioning, and operating values behind NOXAS: Digital Growth, Website Development & Influencer Marketing.',
};

const values = [
  {
    icon: Sparkles,
    number: '01',
    title: 'Uncompromising Visual Craft',
    description:
      'We reject cookie-cutter templates and sterile SaaS landing pages. We treat digital flagships with the same editorial respect as high-fashion lookbooks and luxury architecture.',
  },
  {
    icon: Target,
    number: '02',
    title: 'Commercial Purpose',
    description:
      'Aesthetics without conversion is vanity. Every layout, typography hierarchy, and micro-interaction is engineered to elevate perceived value and generate qualified business inquiries.',
  },
  {
    icon: Users2,
    number: '03',
    title: 'Authentic Creator Culture',
    description:
      'We believe modern consumers have an acute radar for fake endorsements. We orchestrate partnerships where the creator’s authentic voice leads the product storytelling.',
  },
  {
    icon: Shield,
    number: '04',
    title: 'Radical Transparency',
    description:
      'No hidden talent markups, fabricated metrics, or inflated retainers. We define deliverables, timelines, and commercial terms with absolute clarity before work begins.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
              <Compass size={14} />
              <span>Agency Philosophy &amp; Ethos</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-[#111111] tracking-tight leading-tight">
              Crafted With Purpose.{' '}
              <span className="font-editorial italic font-normal text-[#D62545]">
                Driven by Influence.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#686868] leading-relaxed">
              NOXAS was founded on a simple observation: modern brands no longer have the luxury of separating digital design from creator distribution. The world’s most magnetic businesses master both simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* Two Pillar Philosophy */}
      <section className="py-20 bg-[#F5F5F2] border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-6 space-y-6">
              <div className="text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
                The Core Thesis
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-[#111111] leading-snug">
                Where Digital Experience Meets Creator Resonance
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#686868] leading-relaxed">
                <p>
                  Most agencies operate in silos. Traditional web design agencies understand typography and code, but lack any feel for what works on social feeds. Meanwhile, standard influencer agencies understand viral trends, but deliver traffic to outdated, clunky websites that fail to convert.
                </p>
                <p>
                  NOXAS bridges this divide. We engineer digital flagships that convert traffic into high-value clients, while orchestrating creator partnerships that feed those flagships with genuine, high-intent attention.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#D62545] hover:text-[#E94A14] font-semibold transition-colors"
                >
                  <span>Work With Our Studio</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#E5E5E5] bg-white shadow-sm">
                <Image
                  src="/images/web-development.webp"
                  alt="NOXAS modern studio workstation and digital craft"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md border border-[#E5E5E5] shadow-sm">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
                    Studio Model
                  </div>
                  <div className="text-xs text-[#111111] mt-1 font-semibold">
                    Agile, Senior-Led Creative &amp; Technical Execution
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#111111]">
              The Standards We Live By
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-8 sm:p-10 bg-[#F5F5F2] border border-[#E5E5E5] hover:border-[#D62545] transition-all duration-200 space-y-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-light font-editorial italic text-[#D62545]">
                      {v.number}
                    </span>
                    <Icon size={20} className="text-[#D62545]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#111111]">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#686868] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Reach Bar */}
      <section className="py-16 bg-[#F5F5F2] border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
                Markets Served
              </div>
              <div className="text-lg font-light text-[#111111]">
                Collaborating with ambitious brands across key global hubs.
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {siteConfig.marketsServed.map((m) => (
                <span
                  key={m}
                  className="px-3 py-1.5 bg-white border border-[#E5E5E5] text-[#111111] font-medium shadow-sm"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
