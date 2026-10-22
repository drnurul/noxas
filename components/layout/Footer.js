import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { footerServiceLinks, footerCompanyLinks } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="bg-[#171717] border-t border-[#2A2A2A] text-[#B5B5B5] pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#2A2A2A]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block group">
              <span className="text-3xl font-extrabold tracking-[0.22em] text-[#F7F7F7] group-hover:text-[#D62545] transition-colors">
                NOXAS
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D62545] inline-block mb-1 ml-1" />
            </Link>

            <p className="text-sm text-[#F7F7F7] max-w-sm leading-relaxed font-light">
              {siteConfig.statement}
            </p>

            <p className="text-xs text-[#8A8A8A] leading-relaxed max-w-sm">
              Digital Growth, Website Development &amp; Influencer Marketing Agency partnering with beauty, jewelry, fashion, and ambitious D2C brands worldwide.
            </p>

            {/* Quick Inquiry CTA */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#D62545] hover:text-[#E94A14] group transition-colors"
              >
                <span>Initiate an inquiry</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#F7F7F7] font-semibold border-b border-[#2A2A2A] pb-2">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerServiceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#D62545] hover:translate-x-1 inline-block transition-all duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Agency Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#F7F7F7] font-semibold border-b border-[#2A2A2A] pb-2">
              Agency
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerCompanyLinks.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D62545] inline-flex items-center space-x-1 group transition-colors"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight size={11} className="text-[#D62545]" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-[#D62545] hover:translate-x-1 inline-block transition-all duration-150"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Creator Roster */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#F7F7F7] font-semibold border-b border-[#2A2A2A] pb-2">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D62545] inline-flex items-center space-x-1.5 transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowUpRight size={11} className="text-[#8A8A8A]" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D62545] inline-flex items-center space-x-1.5 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={11} className="text-[#8A8A8A]" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="hover:text-[#D62545] inline-flex items-center space-x-1.5 transition-colors"
                >
                  <span>Email Studio</span>
                  <ArrowUpRight size={11} className="text-[#8A8A8A]" />
                </a>
              </li>
            </ul>

            {/* Creator badge */}
            <div className="pt-4">
              <a
                href={siteConfig.creatorFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-[#222222] border border-[#2A2A2A] rounded-none hover:border-[#D62545] transition-colors group"
              >
                <div className="text-[10px] uppercase tracking-[0.18em] text-[#D62545] font-bold">
                  Creators Wanted
                </div>
                <div className="text-xs text-[#F7F7F7] group-hover:text-[#D62545] font-medium mt-0.5 flex items-center justify-between">
                  <span>Apply to Roster</span>
                  <ArrowUpRight size={12} />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8A8A] space-y-4 sm:space-y-0">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-[#F7F7F7] transition-colors">
              Privacy Policy
            </Link>
            <span>&middot;</span>
            <Link href="/contact" className="hover:text-[#F7F7F7] transition-colors">
              Inquiries
            </Link>
            <span>&middot;</span>
            <span className="text-[#D62545]">Digital Craft &amp; Creator Culture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
