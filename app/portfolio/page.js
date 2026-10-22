'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check, Sparkles, X, ChevronRight } from 'lucide-react';
import { projectsData, projectCategories } from '@/data/projects';
import FinalCta from '@/components/home/FinalCta';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.filterCategories.includes(activeFilter));

  return (
    <div className="pt-28 pb-20">
      {/* Portfolio Header */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
              <Sparkles size={14} />
              <span>Selected Portfolio &amp; Concept Labs</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-[#111111] tracking-tight leading-tight">
              Work That Makes{' '}
              <span className="font-editorial italic font-normal text-[#D62545]">
                People Look Twice.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#686868] leading-relaxed">
              Explore our architectural website concepts, luxury e-commerce platforms, tactile UGC suites, and creator campaign architectures. Every concept is engineered to push creative boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs Bar */}
      <section className="sticky top-[65px] z-30 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto no-scrollbar py-1">
            {projectCategories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-[0.18em] font-bold whitespace-nowrap transition-all duration-200 focus:outline-none ${isActive
                      ? 'bg-[#D62545] text-white shadow-sm'
                      : 'bg-[#F5F5F2] text-[#111111] border border-[#E5E5E5] hover:text-[#D62545] hover:border-[#111111]'
                    }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className={`${project.gridSpan || 'col-span-12 lg:col-span-6'} group flex flex-col justify-between`}
              >
                {/* Visual Card Trigger */}
                <div
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Open concept details for ${project.title}`}
                  className="cursor-pointer block relative overflow-hidden bg-white border border-[#E5E5E5] group-hover:border-[#D62545] transition-all duration-200 focus:outline-none shadow-sm"
                >
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

                    {/* Floating Click Label */}
                    <div className="absolute bottom-6 right-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 hidden sm:flex items-center space-x-1.5 px-4 py-2 bg-[#D62545] text-white text-[11px] uppercase tracking-[0.18em] font-semibold shadow-md">
                      <span>View Concept Specs</span>
                      <ArrowUpRight size={13} />
                    </div>
                  </div>
                </div>

                {/* Details Meta Below */}
                <div className="pt-5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em]">
                    <span className="text-[#D62545] font-bold">{project.category}</span>
                    <span className="text-[#8A8A8A] font-medium">{project.brand}</span>
                  </div>

                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl sm:text-2xl font-light text-[#111111] group-hover:text-[#D62545] transition-colors cursor-pointer leading-snug"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#686868] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center space-x-1 text-xs uppercase tracking-[0.18em] text-[#D62545] hover:text-[#E94A14] font-bold transition-colors"
                    >
                      <span>Explore Project Specs</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fictional Disclaimer */}
          <div className="mt-20 p-6 border border-[#E5E5E5] bg-[#F5F5F2] text-center text-xs text-[#686868] leading-relaxed max-w-3xl mx-auto shadow-sm">
            <span className="text-[#D62545] font-bold uppercase tracking-wider block mb-1">
              Creative Agency Transparency
            </span>
            Projects showcased above are proprietary creative concept archetypes developed by the NOXAS design studio to demonstrate technical capability, art direction, and brand strategy standards.
          </div>
        </div>
      </section>

      {/* Project Detail Modal / Drawer */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
        >
          <div className="bg-white border border-[#E5E5E5] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative space-y-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 bg-[#F5F5F2] border border-[#E5E5E5] text-[#111111] hover:text-[#D62545] transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="space-y-3 pr-10">
              <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.2em]">
                <span className="text-[#D62545] font-bold">{selectedProject.category}</span>
                <span className="text-[#8A8A8A]">&middot;</span>
                <span className="text-[#686868] font-medium">{selectedProject.type}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-[#111111]">
                {selectedProject.title}
              </h2>
              <div className="text-xs text-[#D62545] font-semibold uppercase tracking-wider">
                {selectedProject.brand} &middot; {selectedProject.year}
              </div>
            </div>

            {/* Modal Primary Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#E5E5E5] bg-[#F5F5F2]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* Narrative & Concept Description */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.25em] text-[#D62545] font-bold">
                Concept Architecture &amp; Rationale
              </h4>
              <p className="text-sm text-[#686868] leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Deliverables Checklist */}
            <div className="p-6 bg-[#F5F5F2] border border-[#E5E5E5] space-y-3">
              <div className="text-xs uppercase tracking-[0.2em] text-[#111111] font-bold">
                Engineered Deliverables
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#111111]">
                {selectedProject.deliverables.map((del) => (
                  <div key={del} className="flex items-start space-x-2">
                    <Check size={14} className="text-[#D62545] mt-0.5 shrink-0" />
                    <span className="font-medium">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E5E5]">
              <Link
                href={`/contact?service=${encodeURIComponent(selectedProject.category)}`}
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#D62545] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E94A14] transition-colors"
              >
                <span>Inquire About Similar Work</span>
                <ArrowUpRight size={14} />
              </Link>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs uppercase tracking-[0.18em] text-[#686868] hover:text-[#111111] transition-colors font-medium"
              >
                Back to Gallery
              </button>
            </div>
          </div>
        </div>
      )}

      <FinalCta />
    </div>
  );
}
