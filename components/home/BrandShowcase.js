import { conceptBrands } from '@/data/projects';

export default function BrandShowcase() {
  return (
    <section className="py-20 bg-white border-b border-[#E5E5E5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
              Industry Focus &amp; Concepts
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-[#111111] mt-1">
              Built for Ambitious Brands.
            </h2>
          </div>
          <div className="text-xs text-[#686868] max-w-xs leading-relaxed">
            Concept brand labs &amp; strategic archetypes engineered across beauty, jewelry, fashion, and modern commerce.
          </div>
        </div>
      </div>

      {/* Concept Brand Strip */}
      <div className="border-y border-[#E5E5E5] bg-[#F5F5F2] py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center text-center">
            {conceptBrands.map((brand) => (
              <div
                key={brand.name}
                className="p-5 border border-[#E5E5E5] bg-white hover:border-[#D62545] transition-all duration-200 group shadow-sm"
              >
                <div className="text-xl font-bold tracking-[0.25em] text-[#111111] group-hover:text-[#D62545] transition-colors">
                  {brand.name}
                </div>
                <div className="text-[10px] text-[#686868] tracking-wider mt-1 truncate">
                  {brand.niche}
                </div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-[#8A8A8A] mt-1.5 font-medium">
                  Concept Lab
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
