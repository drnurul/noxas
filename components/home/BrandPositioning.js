import Link from 'next/link';
import { ArrowRight, Code2, Users } from 'lucide-react';

export default function BrandPositioning() {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F5F2] border-b border-[#E5E5E5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Statement Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
              Our Positioning
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111111] leading-tight">
              Strategy Meets Creativity.{' '}
              <span className="font-editorial italic font-normal text-[#D62545] block mt-1">
                Digital Meets Influence.
              </span>
            </h2>
            <p className="text-base text-[#686868] leading-relaxed pt-2">
              We bring brands, digital experiences, and creators together to build work with purpose.
            </p>
          </div>

          {/* Right: Two Primary Capabilities */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pt-6">

            {/* Capability 01: Digital Experiences */}
            <div className="p-8 bg-white border border-[#E5E5E5] space-y-5 hover:border-[#D62545] transition-all duration-200 relative group shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
                  01 &middot; CAPABILITY
                </span>
                <Code2 size={20} className="text-[#D62545]" />
              </div>

              <h3 className="text-xl font-semibold text-[#111111]">
                Digital Experiences
              </h3>

              <p className="text-xs text-[#686868] leading-relaxed">
                From bespoke brand flagships to conversion-engineered e-commerce storefronts, we craft responsive digital touchpoints that captivate discerning audiences and drive commercial performance.
              </p>

              <div className="pt-2">
                <Link
                  href="/web-development"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#111111] group-hover:text-[#D62545] transition-colors"
                >
                  <span>Explore Digital</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Capability 02: Creator Partnerships */}
            <div className="p-8 bg-white border border-[#E5E5E5] space-y-5 hover:border-[#D62545] transition-all duration-200 relative group shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
                  02 &middot; CAPABILITY
                </span>
                <Users size={20} className="text-[#D62545]" />
              </div>

              <h3 className="text-xl font-semibold text-[#111111]">
                Creator Partnerships
              </h3>

              <p className="text-xs text-[#686868] leading-relaxed">
                We unite high-caliber creators with ambitious brands through authentic influencer campaigns, tactile UGC production, and narrative-driven social storytelling that drives genuine resonance.
              </p>

              <div className="pt-2">
                <Link
                  href="/influencer-marketing"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#111111] group-hover:text-[#D62545] transition-colors"
                >
                  <span>Explore Creator Network</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
