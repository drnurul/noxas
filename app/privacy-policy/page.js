import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy and data handling practices for NOXAS Creative Agency.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#D62545] hover:text-[#E94A14] mb-6 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Return to Home</span>
          </Link>
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
              <Shield size={14} />
              <span>Legal &amp; Data Transparency</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-light text-[#111111] tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-[#8A8A8A]">
              Last updated: October 2025 &middot; Version 1.0
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-10 text-xs sm:text-sm text-[#686868] leading-relaxed">

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-[#111111]">1. Overview</h2>
            <p>
              NOXAS (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates this creative agency website. This policy outlines how information is collected, utilized, and safeguarded when you visit our website, submit client inquiries, or apply to our creator network.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-[#111111]">2. Client Project Inquiries</h2>
            <p>
              When prospective clients initiate project briefs through our contact page, information such as name, business email address, company name, required service, and project scope are collected strictly for the purpose of evaluating the project and replying to the inquiry. We never sell, rent, or distribute client inquiry data to third-party marketing brokers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-[#111111]">3. Creator Network Applications (Google Forms)</h2>
            <p>
              Creator registrations are conducted externally via official Google Forms. Any information you voluntarily submit—including your name, email, social media handles, follower statistics, and content portfolio links—is processed under Google&apos;s Privacy Policy and securely accessed by our talent curation team to match creators with brand campaigns. Submitting an application does not guarantee campaign placement or paid work.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-[#111111]">4. Cookies &amp; Performance Telemetry</h2>
            <p>
              This website is engineered as a privacy-first static site. We do not use intrusive cross-site tracking cookies. Basic technical session data (such as browser viewport width and user preferences like reduced motion) is processed locally on your device to optimize visual layout rendering.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-[#111111]">5. External Links</h2>
            <p>
              Our website may contain links to external platforms, including Google Forms, Instagram, LinkedIn, and client concept showcases. We have no direct control over the privacy policies or operational practices of third-party platforms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-[#111111]">6. Data Deletion &amp; Inquiries</h2>
            <p>
              If you have submitted an inquiry or creator application and wish to have your details removed from our records, please contact us directly at{' '}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-[#D62545] underline hover:text-[#E94A14] font-medium"
              >
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
