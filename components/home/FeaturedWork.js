import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { projectsData } from '@/data/projects';

export default function FeaturedWork() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <section className="py-24 sm:py-32 bg-[#F5F5F2] border-t border-[#E5E5E5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
              <Sparkles size={13} />
              <span>Selected Portfolio Concepts</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-[#111111] tracking-tight">
              Work That Makes{' '}
              <span className="font-editorial italic font-normal text-[#D62545]">
                People Look Twice.
              </span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center space-x-2 px-6 py-3 border border-[#111111] bg-white text-xs uppercase tracking-[0.2em] font-semibold text-[#111111] hover:bg-[#111111] hover:text-white transition-all self-start md:self-end shadow-sm"
          >
            <span>Explore All Work</span>
            <ArrowUpRight size={14} className="text-[#D62545] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className={`${project.gridSpan} group relative flex flex-col justify-between`}
            >
              <Link
                href={`/portfolio#${project.id}`}
                className="block relative overflow-hidden bg-white border border-[#E5E5E5] group-hover:border-[#D62545] transition-all duration-300 focus:outline-none shadow-sm"
                aria-label={`View project concept: ${project.title}`}
              >
                {/* Visual Image with Aspect Ratio */}
                <div
                  className={`relative w-full ${project.aspect === 'portrait'
                      ? 'aspect-[4/5]'
                      : project.aspect === 'square'
                        ? 'aspect-square'
                        : 'aspect-[16/10]'
                    } overflow-hidden`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Concept Badge Top Right */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 border border-[#E5E5E5] text-[10px] uppercase tracking-[0.2em] text-[#111111] font-bold shadow-sm">
                    {project.type}
                  </div>

                  {/* Floating Explore Label on Hover */}
                  <div className="absolute bottom-6 right-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 hidden sm:flex items-center space-x-1.5 px-4 py-2 bg-[#D62545] text-white text-[11px] uppercase tracking-[0.18em] font-semibold shadow-md">
                    <span>Explore Project</span>
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </Link>

              {/* Project Meta Details Below Image */}
              <div className="pt-5 space-y-2">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em]">
                  <span className="text-[#D62545] font-bold">{project.category}</span>
                  <span className="text-[#8A8A8A] font-medium">{project.brand}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-light text-[#111111] group-hover:text-[#D62545] transition-colors leading-snug">
                  <Link href={`/portfolio#${project.id}`}>
                    {project.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#686868] line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Note */}
        <div className="mt-16 p-4 border border-[#E5E5E5] bg-white text-center text-[11px] text-[#8A8A8A] tracking-wide">
          Note: Concepts above represent architectural &amp; creative capability prototypes engineered by the NOXAS design lab.
        </div>
      </div>
    </section>
  );
}
