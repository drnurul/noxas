'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { navigationLinks } from '@/data/navigation';
import { siteConfig } from '@/lib/site-config';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] py-3.5 shadow-sm'
          : 'bg-white/90 backdrop-blur-sm border-b border-[#E5E5E5]/70 py-4.5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* NOXAS Wordmark */}
        <Link
          href="/"
          className="group flex items-center space-x-2 focus:outline-none"
          aria-label="NOXAS Home"
        >
          <span className="text-2xl sm:text-[26px] font-extrabold tracking-[0.22em] text-[#111111] transition-colors duration-200 group-hover:text-[#D62545]">
            NOXAS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D62545] inline-block mb-1 group-hover:scale-125 transition-transform duration-200" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
          {navigationLinks.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);

            if (item.hasDropdown) {
              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1.5 text-xs uppercase tracking-[0.18em] py-2 transition-colors duration-150 ${isActive ? 'text-[#D62545] font-bold' : 'text-[#111111] hover:text-[#D62545]'
                      }`}
                    aria-expanded={servicesDropdownOpen}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#D62545]' : 'text-[#686868]'
                        }`}
                    />
                  </Link>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 w-84 pt-2 transition-all duration-200 ${servicesDropdownOpen
                        ? 'opacity-100 pointer-events-auto translate-y-0'
                        : 'opacity-0 pointer-events-none -translate-y-2'
                      }`}
                  >
                    <div className="bg-white border border-[#E5E5E5] rounded-none p-4 shadow-xl">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-[#D62545] font-bold px-3 py-1.5 border-b border-[#E5E5E5] mb-2">
                        Core Capabilities
                      </div>
                      <div className="space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className="block p-3 rounded-none hover:bg-[#F5F5F2] transition-colors group/item"
                          >
                            <div className="flex items-center justify-between text-xs font-semibold text-[#111111] group-hover/item:text-[#D62545] transition-colors">
                              <span>{child.title}</span>
                              <ArrowUpRight
                                size={12}
                                className="opacity-0 group-hover/item:opacity-100 text-[#D62545] transition-opacity"
                              />
                            </div>
                            <p className="text-[11px] text-[#686868] mt-1 leading-relaxed line-clamp-2">
                              {child.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xs uppercase tracking-[0.18em] py-2 transition-colors duration-150 ${isActive ? 'text-[#D62545] font-bold' : 'text-[#111111] hover:text-[#D62545]'
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <a
            href={siteConfig.creatorFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] uppercase tracking-[0.15em] font-medium text-[#686868] hover:text-[#D62545] transition-colors"
          >
            Join as Creator
          </a>
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-white bg-[#111111] hover:bg-[#D62545] transition-colors duration-200"
          >
            <span>Let&apos;s Talk</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-3 lg:hidden">
          <Link
            href="/contact"
            className="px-3.5 py-1.5 text-[10px] uppercase tracking-[0.15em] font-semibold text-white bg-[#D62545]"
          >
            Talk
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#111111] hover:text-[#D62545] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-[#E5E5E5] h-[calc(100vh-65px)] overflow-y-auto px-6 py-8 flex flex-col justify-between shadow-2xl">
          <div className="space-y-6">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#D62545] font-bold border-b border-[#E5E5E5] pb-2">
              Menu
            </div>
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map((item) => (
                <div key={item.label} className="border-b border-[#E5E5E5] pb-3">
                  <Link
                    href={item.href}
                    className="text-lg font-editorial italic tracking-wide text-[#111111] hover:text-[#D62545] transition-colors block"
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <div className="mt-3 pl-4 space-y-2 border-l border-[#D62545]">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block text-xs text-[#686868] hover:text-[#D62545] transition-colors py-1"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile Footer CTAs */}
          <div className="pt-8 border-t border-[#E5E5E5] space-y-4">
            <a
              href={siteConfig.creatorFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-[#F5F5F2] border border-[#E5E5E5] text-xs uppercase tracking-[0.15em] text-[#111111] hover:border-[#D62545] transition-colors"
            >
              <span>Join Creator Network (Google Form)</span>
              <ArrowUpRight size={14} className="text-[#D62545]" />
            </a>
            <Link
              href="/contact"
              className="block w-full text-center py-4 bg-[#D62545] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E94A14] transition-colors"
            >
              Start a Project With Us
            </Link>
            <div className="text-center text-[10px] uppercase tracking-[0.2em] text-[#686868] pt-2">
              NOXAS &copy; {new Date().getFullYear()} &middot; Digital Growth &amp; Influence
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
