import Image from 'next/image';
import { industryFocusData } from '@/data/services';

export default function IndustryFocus() {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F5F2] border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 pb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
            Vertical Specialization
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-[#111111] tracking-tight">
            Built Around the Brands{' '}
            <span className="font-editorial italic font-normal text-[#D62545]">
              We Believe In.
            </span>
          </h2>
          <p className="text-sm text-[#686868] leading-relaxed pt-2">
            We focus our digital craftsmanship and creator relationships on sectors where tactile beauty, visual prestige, and emotional storytelling matter most.
          </p>
        </div>

        {/* 4 Editorial Vertical Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industryFocusData.map((ind) => (
            <div
              key={ind.id}
              className="bg-white border border-[#E5E5E5] hover:border-[#D62545] transition-all duration-200 flex flex-col justify-between group overflow-hidden shadow-sm"
            >
              {/* Vertical Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F5F2]">
                <Image
                  src={ind.image}
                  alt={ind.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Text Body */}
              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#111111] group-hover:text-[#D62545] transition-colors">
                    {ind.title}
                  </h3>
                  <div className="text-[11px] text-[#D62545] font-medium italic mt-0.5 mb-2 font-editorial">
                    {ind.subtitle}
                  </div>
                  <p className="text-xs text-[#686868] leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E5E5] mt-4 space-y-1">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[#8A8A8A] font-semibold">Focus Points</div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {ind.focusPoints.map((pt) => (
                      <span
                        key={pt}
                        className="text-[10px] px-2 py-0.5 bg-[#F5F5F2] border border-[#E5E5E5] text-[#111111] font-medium"
                      >
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
