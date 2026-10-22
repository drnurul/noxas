import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Camera, Check, FileCheck, Layers, Sparkles, Users, Video } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import FinalCta from '@/components/home/FinalCta';

export const metadata = {
  title: 'Influencer Marketing & UGC Campaigns',
  description:
    'Curated creator partnerships, high-retention UGC video production, and end-to-end influencer campaign coordination for beauty, jewellery, and D2C brands.',
};

const campaignPhases = [
  {
    step: '01',
    title: 'Creator Discovery & Rigorous Vetting',
    desc: 'We filter beyond vanity metrics. We analyze audience demographics, comment sentiment authenticity, geographic distribution, and brand affinity to identify creators whose followers genuinely buy.',
  },
  {
    step: '02',
    title: 'Direct Outreach & Agreement Negotiation',
    desc: 'We manage all talent communications, negotiate deliverables, and secure agreed timelines without frustrating agency lag. We protect brand interests through clear commercial contracts.',
  },
  {
    step: '03',
    title: 'Creative Briefing & Visual Art Direction',
    desc: 'We build detailed creative briefs outlining hook concepts, visual framing, sensory product highlights, and brand guidelines, while allowing creators the freedom to stay authentic.',
  },
  {
    step: '04',
    title: 'Content Review & Deliverable QA',
    desc: 'Every video, reel, story, and unboxing draft is reviewed before public posting to verify messaging accuracy, audio clarity, lighting standards, and FTC/compliance tags.',
  },
  {
    step: '05',
    title: 'Usage Rights Licensing & Performance Tracking',
    desc: 'We track engagement rates, audience reach, link click-throughs, and coordinate content usage extensions for your paid social advertising campaigns.',
  },
];

export default function InfluencerMarketingPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
              <Users size={14} />
              <span>Creator Strategy &amp; Social Narrative</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-[#111111] tracking-tight leading-tight">
              Creator Partnerships That{' '}
              <span className="font-editorial italic font-normal text-[#D62545]">
                Actually Connect.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#686868] leading-relaxed">
              We connect ambitious brands with vetted creators across beauty, jewellery, fashion, and lifestyle. No scripted clich&eacute;s—just authentic narratives and tactile content that inspires action.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact?service=Influencer+Marketing"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-[#D62545] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E94A14] transition-colors"
              >
                <span>Launch a Creator Campaign</span>
                <ArrowUpRight size={14} />
              </Link>
              <a
                href={siteConfig.creatorFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 border border-[#111111] bg-white text-xs uppercase tracking-[0.2em] font-semibold text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
              >
                <span>Join Roster as Creator</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Process Architecture */}
      <section className="py-20 bg-[#F5F5F2] border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-14 space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
              How We Execute
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#111111]">
              End-to-End Creator Management
            </h2>
            <p className="text-xs sm:text-sm text-[#686868]">
              From initial talent curation to final usage licensing, we handle every detail so your internal team never has to chase creators or manage messy DMs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaignPhases.map((phase) => (
              <div
                key={phase.step}
                className="p-8 bg-white border border-[#E5E5E5] hover:border-[#D62545] transition-all duration-200 space-y-4 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-3">
                  <div className="text-3xl font-light font-editorial italic text-[#D62545]">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-[#111111]">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-[#686868] leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E5E5E5] text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]">
                  Noxas Campaign Protocol
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Content Production Deep Dive */}
      <section id="ugc" className="py-20 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
                <Video size={14} />
                <span>Tactile Social Assets</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-light text-[#111111] tracking-tight">
                UGC &amp; Short-Form{' '}
                <span className="font-editorial italic font-normal text-[#D62545]">
                  Creative Studio.
                </span>
              </h2>
              <p className="text-sm text-[#686868] leading-relaxed">
                Modern consumers ignore polished television-style commercials on TikTok and Instagram. They crave tactile textures, authentic bathroom shelf routines, macro jewelry unboxings, and relatable voiceovers.
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#111111] font-bold">
                  UGC Asset Formats We Produce
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#111111]">
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-[#D62545] shrink-0" />
                    <span>Sensory Skincare Texture Demos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-[#D62545] shrink-0" />
                    <span>Macro Jewelry Styling &amp; Sparkle</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-[#D62545] shrink-0" />
                    <span>Unboxing &amp; First-Impression Hooks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-[#D62545] shrink-0" />
                    <span>High-Retention TikTok / Reel Edits</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact?service=UGC+Production"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-[#D62545] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E94A14] transition-colors"
                >
                  <span>Commission a UGC Suite</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#E5E5E5] bg-[#F5F5F2] shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
                  alt="UGC cosmetic product demonstration"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md border border-[#E5E5E5] text-xs text-[#686868] shadow-sm">
                  Tactile UGC: Real creators, high-resolution sensor captures, real engagement.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Transparent Fee & Financial Clarification (Dark Feature Section for Contrast) */}
      <section className="py-20 bg-[#171717] border-y border-[#2A2A2A]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="p-8 sm:p-10 bg-[#202020] border border-[#2A2A2A] space-y-6 shadow-xl">
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
              <FileCheck size={15} />
              <span>Commercial Transparency</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-[#F7F7F7]">
              Campaign Fees &amp; Production Scope Breakdown
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-[#B5B5B5] leading-relaxed">
              <p>
                At NOXAS, we maintain absolute commercial transparency. To ensure clean accounting and alignment with your marketing budget, our client proposals clearly itemize:
              </p>
              <ul className="space-y-2.5 list-disc pl-5 text-[#F7F7F7]">
                <li>
                  <strong className="text-[#D62545]">Agency Management &amp; Creative Direction:</strong> Covers creator discovery, negotiation, contract preparation, briefing, and review.
                </li>
                <li>
                  <strong className="text-[#D62545]">Creator Compensation (Talent Fees):</strong> Paid directly or passed transparently to creators based on their tier, reach, and agreed deliverables.
                </li>
                <li>
                  <strong className="text-[#D62545]">Content Usage Rights &amp; Paid Whitelisting:</strong> Licensing rights for running creator content as paid ads (Meta, TikTok, YouTube) are negotiated and itemized separately based on duration (e.g. 30, 90, or 365 days).
                </li>
                <li>
                  <strong className="text-[#D62545]">Advertising Media Spend &amp; Shipping:</strong> Paid media spend budgets and product seeding samples are handled separately based on your target marketing budget.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Roster Callout Box */}
      <section className="py-16 bg-[#F5F5F2] border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
            Are You a Content Creator?
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-[#111111]">
            Join the NOXAS Creator Network
          </h2>
          <p className="text-xs sm:text-sm text-[#686868] max-w-xl mx-auto leading-relaxed">
            We partner with passionate creators across beauty, jewelry, fashion, and lifestyle for paid campaigns, gifted seeding, and long-term brand ambassador roles.
          </p>
          <div className="pt-2">
            <a
              href={siteConfig.creatorFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-[#D62545] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E94A14] transition-colors"
            >
              <span>Submit Google Application Form</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
          <p className="text-[10px] text-[#8A8A8A] italic max-w-md mx-auto">
            Registration does not guarantee an immediate campaign or paid collaboration. Submissions are reviewed regularly against active brand briefs.
          </p>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
