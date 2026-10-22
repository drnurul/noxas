import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Check, Code2, Cpu, Globe, Layers, ShieldCheck, Zap } from 'lucide-react';
import FinalCta from '@/components/home/FinalCta';

export const metadata = {
  title: 'Website Design & Development',
  description:
    'Bespoke digital flagships, high-conversion headless e-commerce storefronts, and precision Next.js frontend engineering for ambitious brands.',
};

const webPillars = [
  {
    title: 'Brand Flagships & Corporate Websites',
    description:
      'We design digital homes that establish market dominance. Combining generous editorial whitespace, custom typography hierarchies, and refined micro-interactions that leave an indelible impression.',
    features: [
      'Custom art direction & wireframing',
      'Editorial responsive grid systems',
      'Accessible, keyboard-navigable UI',
      'Ultra-fast global edge delivery',
    ],
  },
  {
    title: 'High-Conversion E-commerce Platforms',
    id: 'ecommerce',
    description:
      'Turn casual browsing into high-ticket transactions. From custom Shopify setups to headless commerce architectures, we obsess over product page tactile immersion, bundling logic, and checkout friction reduction.',
    features: [
      'Tactile PDPs with macro-zoom & video loops',
      'Streamlined cart drawers & express checkout',
      'Custom cross-sell & up-sell mechanics',
      'Mobile-first performance tuning',
    ],
  },
  {
    title: 'High-Velocity Campaign Landing Pages',
    description:
      'When launching a product collection or running high-spend paid media, standard web pages leak conversion. We build dedicated, single-minded landing pages engineered for maximum ROAS.',
    features: [
      'Rapid message-match architecture',
      'Clear, unmissable call-to-action paths',
      'Integrated social proof & UGC video',
      'Lightweight bundle sizes for immediate load',
    ],
  },
  {
    title: 'Website Redesigns & Technical Audits',
    description:
      'Outgrown your legacy template? We migrate growing brands to modern, flexible web infrastructure without losing organic SEO equity or disrupting ongoing operations.',
    features: [
      'Full technical & UX teardown',
      '301 redirect mapping & SEO preservation',
      'Codebase refactoring to modern Next.js',
      'Speed & Core Web Vitals optimization',
    ],
  },
];

const faqs = [
  {
    q: 'What technology stack does NOXAS use for website development?',
    a: 'We specialize in modern frontend engineering utilizing Next.js (App Router), React, Tailwind CSS, and headless commerce platforms (such as Shopify Plus). This stack guarantees sub-second page transitions, automated image optimization, and unmatched design flexibility.',
  },
  {
    q: 'How long does a typical website design and development project take?',
    a: 'Engagements typically range between 4 to 8 weeks depending on scope complexity, custom interaction requirements, and e-commerce product catalog volume. Each phase is defined with clear milestones.',
  },
  {
    q: 'Do you design custom interfaces or use pre-made templates?',
    a: 'Every NOXAS build is 100% custom-designed and custom-coded from scratch. We do not use cookie-cutter WordPress or standard Shopify templates, ensuring your brand has an unmistakable visual signature.',
  },
  {
    q: 'Will our team be able to update content after launch?',
    a: 'Yes. We configure intuitive headless content management systems or structured data models, allowing your marketing team to edit copy, update imagery, and publish new collection pages with zero coding required.',
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
              <Code2 size={14} />
              <span>Digital Architecture &amp; Engineering</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-[#111111] tracking-tight leading-tight">
              Websites That Command{' '}
              <span className="font-editorial italic font-normal text-[#D62545]">
                Prestige &amp; Profit.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#686868] leading-relaxed">
              We design and engineer bespoke web flagships and e-commerce platforms that combine editorial aesthetics with uncompromising technical performance.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact?service=Website+Development"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-[#D62545] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E94A14] transition-colors"
              >
                <span>Request a Web Proposal</span>
                <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center space-x-2 px-8 py-4 border border-[#111111] bg-white text-xs uppercase tracking-[0.2em] font-semibold text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
              >
                <span>View Web Concepts</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="py-20 bg-[#F5F5F2] border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold mb-3">
            Core Web Disciplines
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-[#111111] mb-12">
            Engineered For Modern High-Growth Brands
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                id={pillar.id}
                className="p-8 sm:p-10 bg-white border border-[#E5E5E5] hover:border-[#D62545] transition-all duration-200 flex flex-col justify-between group shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-light font-editorial italic text-[#D62545]">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A] font-semibold">
                      Specialization
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#111111] group-hover:text-[#D62545] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#686868] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E5E5E5] mt-6 space-y-2">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#111111] font-bold">
                    Key Highlights
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#686868]">
                    {pillar.features.map((feat) => (
                      <li key={feat} className="flex items-center space-x-2">
                        <Check size={12} className="text-[#D62545] shrink-0" />
                        <span className="text-[#111111] font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Standards Section */}
      <section className="py-20 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
              The Engineering Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#111111]">
              No Shortcuts. No Bloated Codebases.
            </h2>
            <p className="text-xs sm:text-sm text-[#686868] leading-relaxed">
              We uphold rigorous engineering standards so your digital experience performs flawlessly under traffic surges, across every mobile viewport, and throughout Google search indexing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#F5F5F2] border border-[#E5E5E5] space-y-3">
              <Zap className="text-[#D62545]" size={24} />
              <h4 className="text-base font-semibold text-[#111111]">Sub-Second Speed</h4>
              <p className="text-xs text-[#686868] leading-relaxed">
                Next-gen server rendering and asset streaming ensure lightning-fast Time to First Byte (TTFB).
              </p>
            </div>
            <div className="p-6 bg-[#F5F5F2] border border-[#E5E5E5] space-y-3">
              <Globe className="text-[#D62545]" size={24} />
              <h4 className="text-base font-semibold text-[#111111]">Technical SEO</h4>
              <p className="text-xs text-[#686868] leading-relaxed">
                Semantic HTML5, automated JSON-LD schemas, clean sitemaps, and optimized OpenGraph assets.
              </p>
            </div>
            <div className="p-6 bg-[#F5F5F2] border border-[#E5E5E5] space-y-3">
              <Layers className="text-[#D62545]" size={24} />
              <h4 className="text-base font-semibold text-[#111111]">Fluid Responsiveness</h4>
              <p className="text-xs text-[#686868] leading-relaxed">
                Pixel-precise scaling with clamp() formulas tailored for iPhones, Androids, iPads, and UltraWide monitors.
              </p>
            </div>
            <div className="p-6 bg-[#F5F5F2] border border-[#E5E5E5] space-y-3">
              <ShieldCheck className="text-[#D62545]" size={24} />
              <h4 className="text-base font-semibold text-[#111111]">Enterprise Security</h4>
              <p className="text-xs text-[#686868] leading-relaxed">
                Modern Jamstack architecture without vulnerable PHP plugins or outdated database vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-[#F5F5F2]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14 space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
              Clarity &amp; Questions
            </span>
            <h2 className="text-3xl font-light text-[#111111]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-[#E5E5E5] bg-white border border-[#E5E5E5] p-6 sm:p-10 shadow-sm">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6 first:pt-0 last:pb-0 space-y-2">
                <h3 className="text-base sm:text-lg font-semibold text-[#111111]">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-[#686868] leading-relaxed pt-1">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
