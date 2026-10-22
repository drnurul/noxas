import { processSteps } from '@/data/services';

export default function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 bg-white border-t border-[#E5E5E5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="max-w-2xl space-y-3 pb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
            Our Method
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-[#111111] tracking-tight">
            Good Work Starts With{' '}
            <span className="font-editorial italic font-normal text-[#D62545]">
              Good Questions.
            </span>
          </h2>
          <p className="text-sm text-[#686868] leading-relaxed pt-2">
            A disciplined, four-phase creative framework designed to eliminate guesswork and deliver work of enduring commercial value.
          </p>
        </div>

        {/* Editorial Horizontal Timeline on Desktop / Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-8 bg-white border border-[#E5E5E5] hover:border-[#D62545] transition-all duration-200 flex flex-col justify-between group shadow-sm"
            >
              {/* Top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#D62545] transition-colors duration-200" />

              <div>
                <div className="flex items-baseline justify-between pb-6">
                  <span className="text-4xl font-light font-editorial italic text-[#D62545]">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A] font-semibold">
                    Phase 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#111111] group-hover:text-[#D62545] transition-colors">
                  {step.title}
                </h3>
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#D62545] font-bold mt-1 mb-3">
                  {step.tagline}
                </div>

                <p className="text-xs text-[#686868] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-8 border-t border-[#E5E5E5] mt-6 text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]">
                Noxas Standard
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
