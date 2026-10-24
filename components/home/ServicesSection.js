import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Layers,
  Sparkles,
  Smartphone,
  ShoppingBag,
  Globe,
  Radio,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

// Key Offerings for Service 1: Influencer Marketing
const influencerOfferings = [
  'Micro-influencer discovery and matching',
  'Affordable brand collaboration opportunities',
  'Creator outreach and shortlisting',
  'Campaign coordination',
  'UGC and short-form content collaborations',
];

// Technologies for Service 2: Custom Website Development
const mernTechnologies = [
  { name: 'MongoDB', role: 'Database' },
  { name: 'Express.js', role: 'Backend API' },
  { name: 'React.js', role: 'UI Architecture' },
  { name: 'Node.js', role: 'Server Runtime' },
  { name: 'JavaScript', role: 'Core Language' },
  { name: 'Tailwind CSS', role: 'Design System' },
];

// Key Offerings for Service 2: Custom Website Development
const webDevOfferings = [
  'Custom business websites',
  'E-commerce websites',
  'Responsive frontend development',
  'Custom UI/UX implementation',
  'MERN stack applications',
  'Website redesigns',
  'API integration where required',
];

// Real Website Projects for Service 2 Previous Work Showcase
const featuredWebProjects = [
  {
    id: 'zylara',
    title: 'ZYLARA',
    domain: 'zylara.co.in',
    url: 'https://zylara.co.in/',
    category: 'Jewellery / E-commerce',
    description:
      'A jewellery-focused digital storefront showcasing the brand and its product experience.',
    ctaText: 'Visit Live Website',
    image: '/images/portfolio-ecommerce.webp',
    accentTag: 'Fine Sterling Silver & Diamonds',
    spanClass: 'lg:col-span-7',
    badgeTone: 'Jewellery Atelier',
  },
  {
    id: 'amrin',
    title: 'AMRIN',
    domain: 'amrin.co.in',
    url: 'https://amrin.co.in/',
    category: 'Website Development',
    description: 'Explore a live website project developed for the AMRIN brand.',
    ctaText: 'Visit Live Website',
    image: '/images/portfolio-business.webp',
    accentTag: 'Modern Brand Flagship',
    spanClass: 'lg:col-span-5',
    badgeTone: 'Fashion Flagship',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 sm:py-32 bg-white relative" id="services">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ================================================================= */}
        {/* 1. SECTION HEADER: "What We Do"                                   */}
        {/* ================================================================= */}
        <div className="pb-16 sm:pb-24 border-b border-[#E5E5E5]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
                <Sparkles size={13} />
                <span>Core Capabilities</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-light text-[#111111] tracking-tight">
                What We Do
              </h2>
              <p className="text-base sm:text-lg text-[#686868] leading-relaxed max-w-2xl">
                From connecting brands with creators to building custom digital experiences, we
                help businesses and creators move forward.
              </p>
            </div>

            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8A8A8A] self-start md:self-end pb-1">
              <span>02 Core Practice Areas</span>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 2. TWO PREMIUM SERVICE BLOCKS                                     */}
        {/* ================================================================= */}
        <div className="space-y-24 sm:space-y-36 pt-16 sm:pt-24">
          {/* --------------------------------------------------------------- */}
          {/* SERVICE BLOCK 01: Influencer Marketing                          */}
          {/* --------------------------------------------------------------- */}
          <article
            className="group relative"
            aria-labelledby="service-influencer-heading"
          >
            {/* Service Kicker & Number Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#E5E5E5] mb-10 sm:mb-14">
              <div className="flex items-center space-x-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#D62545] font-bold">
                  Service 01
                </span>
                <span className="text-[#E5E5E5]">&middot;</span>
                <span
                  id="service-influencer-heading"
                  className="text-xs uppercase tracking-[0.25em] text-[#111111] font-bold"
                >
                  Influencer Marketing
                </span>
              </div>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#111111] text-white text-[10px] uppercase tracking-[0.2em] font-semibold">
                <span>BRANDS &times; CREATORS</span>
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Editorial Copy, Offerings & CTAs */}
              <div className="lg:col-span-6 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl sm:text-5xl font-light text-[#111111] tracking-tight leading-[1.15]">
                    Big Brand Opportunities.{' '}
                    <span className="font-editorial italic font-normal text-[#D62545] block sm:inline">
                      Creator-Friendly Budgets.
                    </span>
                  </h3>
                  <p className="text-base sm:text-lg text-[#686868] leading-relaxed">
                    We connect brands with relevant micro-influencers and help creators discover
                    brand collaboration opportunities at accessible budgets. Our goal is to make
                    influencer marketing more approachable for growing brands and emerging
                    creators.
                  </p>
                </div>

                {/* Key Offerings List */}
                <div className="p-6 sm:p-7 bg-[#F5F5F2] border border-[#E5E5E5] space-y-4 shadow-sm">
                  <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#111111] font-bold">
                      Key Offerings
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#8A8A8A]">
                      Campaign Architecture
                    </span>
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#111111]">
                    {influencerOfferings.map((offering) => (
                      <li key={offering} className="flex items-start space-x-3">
                        <span className="mt-0.5 inline-flex items-center justify-center w-4 h-4 bg-white border border-[#E5E5E5] text-[#D62545] shrink-0">
                          <Check size={11} strokeWidth={2.5} />
                        </span>
                        <span className="leading-snug text-[#333333] font-medium">
                          {offering}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Calls to Action */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    {/* Primary CTA */}
                    <Link
                      href="/influencer-marketing"
                      className="group/btn inline-flex items-center justify-center space-x-2 px-7 py-4 bg-[#D62545] hover:bg-[#E94A14] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-200 shadow-sm"
                    >
                      <span>Explore Brand Collaborations</span>
                      <ArrowRight
                        size={14}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Link>

                    {/* Secondary CTA */}
                    <a
                      href={siteConfig.creatorFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/ext inline-flex items-center justify-center space-x-2 px-6 py-4 border border-[#111111] bg-white text-xs uppercase tracking-[0.2em] font-semibold text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-200 shadow-sm"
                    >
                      <span>Join the Creator Network</span>
                      <ArrowUpRight
                        size={14}
                        className="text-[#D62545] group-hover/ext:text-white group-hover/ext:translate-x-0.5 group-hover/ext:-translate-y-0.5 transition-all"
                      />
                    </a>
                  </div>

                  {/* Subtle Disclaimer */}
                  <p className="text-[11px] text-[#8A8A8A] leading-relaxed italic border-l-2 border-[#E5E5E5] pl-3 py-0.5">
                    Campaign availability, selection, creator fees, and collaboration terms depend
                    on each brand&apos;s requirements.
                  </p>
                </div>
              </div>

              {/* Right Column: Campaign-Focused Visual Showcase (Collage / Media Grid) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="grid grid-cols-12 gap-4">
                  {/* Big Card: Micro-creators creating Reels */}
                  <div className="col-span-12 sm:col-span-7 relative group/media overflow-hidden border border-[#E5E5E5] bg-[#171717] aspect-[4/5] shadow-sm">
                    <Image
                      src="/images/influencer-marketing.webp"
                      alt="Indian beauty creator producing brand collaboration for Noxas influencer marketing"
                      fill
                      className="object-cover object-center group-hover/media:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 35vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    {/* Top tags */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em]">
                      <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-[#111111] font-bold border border-[#E5E5E5]">
                        Reels &amp; Short-Form
                      </span>
                      <span className="px-2 py-0.5 bg-[#D62545] text-white font-bold flex items-center space-x-1">
                        <Radio size={10} className="animate-pulse" />
                        <span>Active Brief</span>
                      </span>
                    </div>

                    {/* Bottom overlay info */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md border border-[#E5E5E5] space-y-1 shadow-sm">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#D62545] font-bold">
                        Beauty &amp; Skincare Focus
                      </div>
                      <div className="text-xs text-[#111111] font-medium leading-snug">
                        Authentic creator voiceovers &amp; day-in-the-life product rituals.
                      </div>
                    </div>
                  </div>

                  {/* Two Stacked Cards: Products, Unboxing & Jewellery */}
                  <div className="col-span-12 sm:col-span-5 flex flex-col gap-4">
                    {/* Top Small Card: Product Unboxing & Demonstration */}
                    <div className="relative group/box overflow-hidden border border-[#E5E5E5] bg-[#F5F5F2] aspect-[4/3] sm:aspect-auto sm:flex-1 shadow-sm">
                      <Image
                        src="/images/hero-noxas.webp"
                        alt="Skincare product routine and beauty creator setup"
                        fill
                        className="object-cover object-center group-hover/box:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5">
                        <span className="inline-block px-2 py-0.5 bg-white/95 text-[#111111] text-[9px] uppercase tracking-[0.2em] font-bold border border-[#E5E5E5] mb-1">
                          Product Demos
                        </span>
                        <p className="text-[11px] text-white font-medium leading-tight drop-shadow-sm">
                          Tactile unboxing &amp; texture showcase
                        </p>
                      </div>
                    </div>

                    {/* Bottom Small Card: Jewellery & Fashion Products */}
                    <div className="relative group/jewel overflow-hidden border border-[#E5E5E5] bg-[#F5F5F2] aspect-[4/3] sm:aspect-auto sm:flex-1 shadow-sm">
                      <Image
                        src="/images/portfolio-ecommerce.webp"
                        alt="Jewellery and fashion product curation for creator styling"
                        fill
                        className="object-cover object-center group-hover/jewel:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5">
                        <span className="inline-block px-2 py-0.5 bg-white/95 text-[#111111] text-[9px] uppercase tracking-[0.2em] font-bold border border-[#E5E5E5] mb-1">
                          Jewellery &amp; Fashion
                        </span>
                        <p className="text-[11px] text-white font-medium leading-tight drop-shadow-sm">
                          Styling edits &amp; lookbook storytelling
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Illustrative Campaign Label */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#F5F5F2] border border-[#E5E5E5] text-[10px] text-[#686868] uppercase tracking-[0.18em]">
                  <span className="font-semibold text-[#111111]">
                    Illustrative Campaign Showcase
                  </span>
                  <span>Sample Creative Scopes</span>
                </div>
              </div>
            </div>
          </article>

          {/* --------------------------------------------------------------- */}
          {/* SERVICE BLOCK 02: Custom Website Development (MERN Stack)       */}
          {/* --------------------------------------------------------------- */}
          <article
            className="group relative pt-16 sm:pt-20 border-t border-[#E5E5E5]"
            aria-labelledby="service-webdev-heading"
          >
            {/* Service Kicker & Number Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#E5E5E5] mb-10 sm:mb-14">
              <div className="flex items-center space-x-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#D62545] font-bold">
                  Service 02
                </span>
                <span className="text-[#E5E5E5]">&middot;</span>
                <span
                  id="service-webdev-heading"
                  className="text-xs uppercase tracking-[0.25em] text-[#111111] font-bold"
                >
                  Custom Website Development
                </span>
              </div>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#111111] text-white text-[10px] uppercase tracking-[0.2em] font-semibold">
                <span>MERN STACK ARCHITECTURE</span>
              </span>
            </div>

            <div className="space-y-12 sm:space-y-16">
              {/* Top Row: Copy & Tech Stack Matrix */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left: Headline & Description */}
                <div className="lg:col-span-6 space-y-6">
                  <h3 className="text-3xl sm:text-5xl font-light text-[#111111] tracking-tight leading-[1.15]">
                    Your Vision. Your Website.{' '}
                    <span className="font-editorial italic font-normal text-[#D62545] block sm:inline">
                      Built with the MERN Stack.
                    </span>
                  </h3>
                  <p className="text-base sm:text-lg text-[#686868] leading-relaxed">
                    We design and develop custom websites tailored to your business, brand
                    identity, and goals. From premium e-commerce storefronts to modern business
                    websites, we build responsive digital experiences using the MERN stack.
                  </p>

                  {/* Compact Technology Row */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
                      <Layers size={13} />
                      <span>Core Technology Stack</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {mernTechnologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="px-3.5 py-2.5 bg-[#F5F5F2] border border-[#E5E5E5] flex flex-col"
                        >
                          <span className="text-xs font-bold text-[#111111]">{tech.name}</span>
                          <span className="text-[10px] text-[#8A8A8A] uppercase tracking-wider">
                            {tech.role}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Key Offerings & Primary CTA */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Visual Showcase: Web Development Workstation */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#E5E5E5] bg-[#F5F5F2] shadow-sm group/webvis">
                    <Image
                      src="/images/web-development.webp"
                      alt="Modern web design workstation displaying luxury responsive e-commerce on desktop and smartphone"
                      fill
                      className="object-cover object-center group-hover/webvis:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-white/95 backdrop-blur-md border border-[#E5E5E5] flex items-center justify-between text-[10px]">
                      <span className="uppercase tracking-[0.2em] text-[#D62545] font-bold">Responsive Flagships</span>
                      <span className="text-[#686868] font-medium">Bespoke UI &middot; MERN Stack</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 bg-[#F5F5F2] border border-[#E5E5E5] space-y-4 shadow-sm">
                    <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#111111] font-bold">
                        Key Offerings
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#8A8A8A]">
                        Development Scope
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#111111]">
                      {webDevOfferings.map((offering) => (
                        <div key={offering} className="flex items-start space-x-2.5">
                          <span className="mt-0.5 inline-flex items-center justify-center w-4 h-4 bg-white border border-[#E5E5E5] text-[#D62545] shrink-0">
                            <Check size={11} strokeWidth={2.5} />
                          </span>
                          <span className="leading-snug text-[#333333] font-medium">
                            {offering}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="group/btn inline-flex items-center space-x-2 px-8 py-4 bg-[#D62545] hover:bg-[#E94A14] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-200 shadow-sm"
                    >
                      <span>Let&apos;s Build Your Website</span>
                      <ArrowRight
                        size={14}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Previous Work Showcase (Two Real Projects: ZYLARA & AMRIN) */}
              <div className="space-y-6 pt-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#E5E5E5]">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#D62545] font-bold block mb-1">
                      Proof of Development Work
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-light text-[#111111]">
                      Previous Work Showcase
                    </h4>
                  </div>
                  <p className="text-xs text-[#8A8A8A] max-w-md">
                    Explore live website projects developed for real brands. Click below to inspect
                    the live production experiences.
                  </p>
                </div>

                {/* Asymmetric Portfolio Grid: ZYLARA & AMRIN */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {featuredWebProjects.map((project) => (
                    <div
                      key={project.id}
                      className={`${project.spanClass} group/proj flex flex-col justify-between border border-[#E5E5E5] bg-white hover:border-[#D62545] transition-all duration-300 shadow-sm overflow-hidden`}
                    >
                      {/* Browser Window Chrome Header */}
                      <div className="px-4 py-3 bg-[#F5F5F2] border-b border-[#E5E5E5] flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5] group-hover/proj:bg-[#D62545] transition-colors" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5]" />
                        </div>
                        <div className="px-3 py-1 bg-white border border-[#E5E5E5] rounded-none text-[10px] font-mono text-[#686868] flex items-center space-x-1.5 shadow-2xs">
                          <Globe size={11} className="text-[#8A8A8A]" />
                          <span>https://{project.domain}</span>
                        </div>
                        <div className="flex items-center space-x-1.5 text-[10px] uppercase tracking-wider text-emerald-600 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="hidden sm:inline">Live</span>
                        </div>
                      </div>

                      {/* Large Project Visual Showcase Preview */}
                      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#111111]">
                        <Image
                          src={project.image}
                          alt={`${project.title} live website showcase preview`}
                          fill
                          className="object-cover object-center group-hover/proj:scale-105 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Top Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-[#111111] text-[10px] uppercase tracking-[0.2em] font-bold border border-[#E5E5E5] shadow-sm">
                            {project.category}
                          </span>
                        </div>

                        {/* Bottom Tag */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                          <span className="text-white text-xs font-medium tracking-wide drop-shadow-md">
                            {project.accentTag}
                          </span>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#F5F5F2] font-semibold bg-black/60 px-2.5 py-1 backdrop-blur-sm border border-white/20">
                            {project.badgeTone}
                          </span>
                        </div>
                      </div>

                      {/* Project Meta Details & CTA */}
                      <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between bg-white">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h5 className="text-2xl sm:text-3xl font-light text-[#111111] tracking-tight group-hover/proj:text-[#D62545] transition-colors">
                              {project.title}
                            </h5>
                            <span className="text-[11px] font-mono text-[#8A8A8A]">
                              {project.domain}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#686868] leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A] font-semibold">
                            Production Deployment
                          </span>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1.5 px-4 py-2 border border-[#111111] bg-white group-hover/proj:bg-[#D62545] group-hover/proj:border-[#D62545] group-hover/proj:text-white text-xs uppercase tracking-[0.18em] font-semibold text-[#111111] transition-all duration-200"
                          >
                            <span>{project.ctaText}</span>
                            <ArrowUpRight
                              size={13}
                              className="text-[#D62545] group-hover/proj:text-white transition-colors"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
