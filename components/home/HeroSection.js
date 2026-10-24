'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white overflow-hidden border-b border-[#E5E5E5]">
      {/* Subtle warm ambient background glow */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#D62545]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-8">
            {/* Small Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 border border-[#E5E5E5] bg-[#F5F5F2]"
            >
              <span className="w-2 h-2 rounded-full bg-[#D62545] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#111111] font-bold">
                DIGITAL EXPERIENCES / CREATOR CULTURE / BRAND GROWTH
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.08] text-[#111111]"
            >
              Make Your Brand{' '}
              <span className="font-editorial italic font-normal text-[#D62545] block mt-1">
                Impossible to Ignore.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-base sm:text-lg text-[#686868] max-w-xl font-normal leading-relaxed"
            >
              {siteConfig.subheadline}
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-[#D62545] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E94A14] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D62545] focus:ring-offset-2"
              >
                <span>Start a Project</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center space-x-2 px-8 py-4 border border-[#111111] text-xs uppercase tracking-[0.2em] text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#111111] focus:ring-offset-2"
              >
                <span>Explore Our Work</span>
              </Link>
            </motion.div>

            {/* Value Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-[#E5E5E5] max-w-lg"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]">Focus Industries</div>
                <div className="text-xs sm:text-sm font-semibold text-[#111111] mt-1">Beauty, Luxury &amp; D2C</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]">Craft</div>
                <div className="text-xs sm:text-sm font-semibold text-[#111111] mt-1">Bespoke Engineering</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]">Reach</div>
                <div className="text-xs sm:text-sm font-bold text-[#D62545] mt-1">Global Client Roster</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Art-Directed Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden border border-[#E5E5E5] bg-[#F5F5F2] shadow-xl">
                <Image
                  src="/images/hero-noxas.webp"
                  alt="Indian skincare content creator filming a beauty collaboration video in a minimalist studio"
                  fill
                  priority
                  className="object-cover object-center hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                {/* Floating Micro-Badge: Concept Lab */}
                <div className="absolute top-4 left-4 border border-[#E5E5E5] bg-white/95 backdrop-blur-md px-3 py-1.5 flex items-center space-x-2 shadow-sm">
                  <Sparkles size={12} className="text-[#D62545]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#111111] font-semibold">
                    Creative Direction
                  </span>
                </div>

                {/* Lower Card Info */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md border border-[#E5E5E5] shadow-md">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
                    NOXAS STUDIO &middot; EDITORIAL
                  </div>
                  <div className="text-sm font-semibold text-[#111111] mt-1">
                    Creator Partnerships &amp; Digital Flagships
                  </div>
                </div>
              </div>

              {/* Offset Secondary Visual Overlap */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-44 aspect-square border border-[#E5E5E5] overflow-hidden shadow-xl bg-white">
                <Image
                  src="/images/creator-community.webp"
                  alt="Noxas creator community producing social media content"
                  fill
                  className="object-cover object-center"
                  sizes="180px"
                />
                <div className="absolute bottom-2 left-2 right-2 px-2 py-1 bg-[#111111] text-[9px] uppercase tracking-[0.18em] text-white font-bold text-center">
                  Creator Roster
                </div>
              </div>

              {/* Minimal Accent Corner Element */}
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#D62545] pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#D62545] pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 lg:mt-24 flex items-center justify-between pt-8 border-t border-[#E5E5E5]">
          <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.25em] text-[#8A8A8A]">
            <span>Scroll to explore</span>
            <ChevronDown size={14} className="animate-bounce text-[#D62545]" />
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A] hidden sm:block">
            NOXAS STUDIO &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </section>
  );
}
