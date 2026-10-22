import Image from 'next/image';
import { ArrowUpRight, Camera, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export default function CreatorRecruitment() {
  return (
    <section className="py-24 sm:py-32 bg-[#171717] border-t border-[#2A2A2A] relative overflow-hidden">
      {/* Subtle warm ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#D62545]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="bg-[#202020] border border-[#2A2A2A] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Copy & Form Trigger */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 border border-[#333333] bg-[#2A2A2A] text-[10px] uppercase tracking-[0.22em] text-[#D62545] font-bold">
                <Camera size={13} />
                <span>Noxas Creator Roster &middot; Open Applications</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-light text-[#F7F7F7] tracking-tight leading-tight">
                Creators,{' '}
                <span className="font-editorial italic font-normal text-[#D62545] block sm:inline">
                  Let&apos;s Make Something Matter.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#B5B5B5] leading-relaxed max-w-xl">
                We&apos;re building a network of creators for potential brand collaborations, product campaigns, and UGC opportunities.
              </p>

              {/* Creator benefits checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#B5B5B5]">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={14} className="text-[#D62545] shrink-0" />
                  <span className="text-[#F7F7F7]">Access to luxury beauty &amp; D2C briefs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={14} className="text-[#D62545] shrink-0" />
                  <span className="text-[#F7F7F7]">Fair compensation &amp; clear creative scopes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={14} className="text-[#D62545] shrink-0" />
                  <span className="text-[#F7F7F7]">Direct agency relationship without middlemen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={14} className="text-[#D62545] shrink-0" />
                  <span className="text-[#F7F7F7]">Long-term ambassador roster opportunities</span>
                </div>
              </div>

              {/* Primary CTA to Google Form */}
              <div className="pt-4 space-y-3">
                <a
                  href={siteConfig.creatorFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-3 px-8 py-4 bg-[#D62545] hover:bg-[#E94A14] text-white text-xs uppercase tracking-[0.2em] font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D62545] focus:ring-offset-2"
                >
                  <span>Join the Noxas Creator Network</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Important Disclaimer */}
                <p className="text-[11px] text-[#8A8A8A] leading-relaxed italic max-w-lg">
                  Registration does not guarantee an immediate campaign or paid collaboration. Submissions are reviewed based on current client briefs and creator niche alignment.
                </p>
              </div>
            </div>

            {/* Right Creator Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden border border-[#2A2A2A] bg-[#171717]">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
                  alt="Creator filming short-form video content"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#171717]/95 backdrop-blur-md border border-[#2A2A2A]">
                  <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-[#D62545] font-bold">
                    <Sparkles size={12} />
                    <span>UGC &amp; Influencer Talent Roster</span>
                  </div>
                  <div className="text-xs text-[#F7F7F7] mt-1 font-semibold">
                    Worldwide Creators &middot; Micro to Macro Tiers
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
