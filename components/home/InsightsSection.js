import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { insightsData } from '@/data/insights';

export default function InsightsSection() {
  return (
    <section className="py-24 sm:py-32 bg-white border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
              <BookOpen size={13} />
              <span>Editorial &amp; Strategy</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-[#111111] tracking-tight">
              Perspectives for{' '}
              <span className="font-editorial italic font-normal text-[#D62545]">
                What&apos;s Next.
              </span>
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#111111] hover:text-[#D62545] transition-colors self-start md:self-end"
          >
            <span>Read All Perspectives</span>
            <ArrowUpRight size={14} className="text-[#D62545]" />
          </Link>
        </div>

        {/* 3 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((article) => (
            <article
              key={article.slug}
              className="bg-white border border-[#E5E5E5] hover:border-[#D62545] transition-all duration-200 flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Article Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F5F2]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm border border-[#E5E5E5] px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-[#111111] font-bold shadow-sm">
                    {article.status}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em]">
                    <span className="text-[#D62545] font-bold">{article.category}</span>
                    <span className="text-[#8A8A8A] font-medium">{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#111111] group-hover:text-[#D62545] transition-colors leading-snug">
                    <Link href={`/insights#${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-[#686868] line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Read Trigger */}
              <div className="p-6 pt-0">
                <Link
                  href={`/insights#${article.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.18em] text-[#D62545] hover:text-[#E94A14] font-semibold transition-colors"
                >
                  <span>Explore Perspective</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
