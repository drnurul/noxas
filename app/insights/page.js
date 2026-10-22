'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Clock, Tag, X } from 'lucide-react';
import { insightsData } from '@/data/insights';
import FinalCta from '@/components/home/FinalCta';

export default function InsightsPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="pt-28 pb-20">
      {/* Editorial Header */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
              <BookOpen size={14} />
              <span>Editorial Journal &amp; Perspectives</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-[#111111] tracking-tight leading-tight">
              Perspectives for{' '}
              <span className="font-editorial italic font-normal text-[#D62545]">
                What&apos;s Next.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#686868] leading-relaxed">
              Strategic essays, creative analyses, and observations from the studio on digital craft, authentic creator relationships, and modern e-commerce architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-[#F5F5F2]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {insightsData.map((article) => (
              <article
                key={article.slug}
                id={article.slug}
                className="bg-white border border-[#E5E5E5] hover:border-[#D62545] transition-all duration-200 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  {/* Article Visual */}
                  <div
                    onClick={() => setSelectedArticle(article)}
                    className="cursor-pointer relative aspect-[16/10] overflow-hidden bg-[#F5F5F2]"
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-[#111111] font-bold border border-[#E5E5E5] shadow-sm">
                      {article.status}
                    </div>
                  </div>

                  {/* Content Meta */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em]">
                      <span className="text-[#D62545] font-bold">{article.category}</span>
                      <span className="flex items-center space-x-1 text-[#8A8A8A] font-medium">
                        <Clock size={11} />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h2
                      onClick={() => setSelectedArticle(article)}
                      className="text-xl sm:text-2xl font-light text-[#111111] group-hover:text-[#D62545] transition-colors cursor-pointer leading-snug"
                    >
                      {article.title}
                    </h2>

                    <p className="text-xs text-[#686868] line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#D62545] hover:text-[#E94A14] font-bold transition-colors"
                  >
                    <span>Read Perspective</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Editorial Note */}
          <div className="mt-16 p-6 border border-[#E5E5E5] bg-white text-center text-xs text-[#8A8A8A] max-w-2xl mx-auto shadow-sm">
            Essays above represent upcoming editorial perspectives prepared by the NOXAS creative &amp; technical strategy team. No fabricated author personas or backdated timestamps.
          </div>
        </div>
      </section>

      {/* Reader Modal */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
        >
          <div className="bg-white border border-[#E5E5E5] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-12 relative space-y-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 bg-[#F5F5F2] border border-[#E5E5E5] text-[#111111] hover:text-[#D62545] transition-colors focus:outline-none"
              aria-label="Close article"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="space-y-3 pr-10">
              <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.2em]">
                <span className="text-[#D62545] font-bold">{selectedArticle.category}</span>
                <span className="text-[#8A8A8A]">&middot;</span>
                <span className="text-[#111111] font-semibold">{selectedArticle.status}</span>
                <span className="text-[#8A8A8A]">&middot;</span>
                <span className="text-[#8A8A8A]">{selectedArticle.readTime}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-light text-[#111111] leading-tight">
                {selectedArticle.title}
              </h1>
            </div>

            {/* Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#E5E5E5] bg-[#F5F5F2]">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* Excerpt Lead */}
            <div className="p-4 sm:p-6 bg-[#F5F5F2] border-l-4 border-[#D62545] text-sm sm:text-base text-[#111111] italic font-editorial">
              &ldquo;{selectedArticle.excerpt}&rdquo;
            </div>

            {/* Body Sections */}
            <div className="space-y-6 text-xs sm:text-sm text-[#686868] leading-relaxed">
              {selectedArticle.content.map((sec) => (
                <div key={sec.heading} className="space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-[#111111]">
                    {sec.heading}
                  </h3>
                  <p>{sec.body}</p>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/contact"
                onClick={() => setSelectedArticle(null)}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#D62545] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E94A14] transition-colors"
              >
                <span>Discuss This Strategy</span>
                <ArrowUpRight size={14} />
              </Link>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-xs uppercase tracking-[0.18em] text-[#686868] hover:text-[#111111] transition-colors font-medium"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      <FinalCta />
    </div>
  );
}
