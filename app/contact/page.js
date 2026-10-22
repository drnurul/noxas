'use client';

import { useState } from 'react';
import { ArrowUpRight, Check, Copy, ExternalLink, Mail, MessageSquare, Send, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Website Design & Development',
    budget: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [submittedAction, setSubmittedAction] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email format.';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please tell us briefly about your project or inquiry.';
    }
    return errs;
  };

  const getInquiryDetails = () => {
    const brandName = formData.company.trim() || 'New Brand';
    const subject = `[Project Inquiry] ${brandName} — ${formData.service}`;
    const budgetText = formData.budget.trim() ? formData.budget.trim() : 'Flexible / To be discussed';
    const companyText = formData.company.trim() ? formData.company.trim() : 'Independent / Direct Client';

    const body =
      `NOXAS Studio Project Inquiry\n` +
      `-----------------------------------------\n` +
      `Name: ${formData.name.trim()}\n` +
      `Email: ${formData.email.trim()}\n` +
      `Brand / Company: ${companyText}\n` +
      `Required Service: ${formData.service}\n` +
      `Estimated Budget: ${budgetText}\n\n` +
      `Project Scope & Objectives:\n` +
      `${formData.description.trim()}\n\n` +
      `-----------------------------------------\n` +
      `Sent via NOXAS Client Inquiry Interface`;

    return { subject, body };
  };

  const getMailtoUri = () => {
    const { subject, body } = getInquiryDetails();
    return `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const getGmailUri = () => {
    const { subject, body } = getInquiryDetails();
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.contactEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const triggerMailto = () => {
    const mailto = getMailtoUri();
    try {
      const a = document.createElement('a');
      a.href = mailto;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
      window.location.href = mailto;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmittedAction(true);
    triggerMailto();
  };

  const handleOpenGmail = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmittedAction(true);
    window.open(getGmailUri(), '_blank', 'noopener,noreferrer');
  };

  const handleCopyInquiry = () => {
    const { subject, body } = getInquiryDetails();
    const text =
      `To: ${siteConfig.contactEmail}\n` +
      `Subject: ${subject}\n\n` +
      body;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
              <MessageSquare size={14} />
              <span>Direct Studio Inquiries</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-[#111111] tracking-tight leading-tight">
              Let&apos;s Build Something{' '}
              <span className="font-editorial italic font-normal text-[#D62545]">
                Unforgettable.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#686868] leading-relaxed">
              We take on a limited number of brand engagements each quarter to preserve uncompromising craft and direct principal attention. Complete the brief below to start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Studio Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-[#F5F5F2] border border-[#E5E5E5] p-8 sm:p-12 shadow-sm">
              <div className="space-y-2 mb-8 border-b border-[#E5E5E5] pb-6">
                <h2 className="text-2xl font-semibold text-[#111111]">
                  Project Brief &amp; Inquiry
                </h2>
                <p className="text-xs text-[#686868]">
                  Fill out your project details. You can send it directly via your mail client, open in Gmail, or copy the brief text.
                </p>
              </div>

              {/* Status Alert if action was triggered */}
              {submittedAction && (
                <div className="mb-8 p-6 bg-white border-2 border-[#D62545] space-y-4 shadow-md">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D62545] flex items-center space-x-1.5">
                        <Check size={14} />
                        <span>Inquiry Ready to Dispatch</span>
                      </span>
                      <h4 className="text-sm sm:text-base font-semibold text-[#111111]">
                        Select How You&apos;d Like to Send Your Brief:
                      </h4>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSubmittedAction(false)}
                      className="text-[11px] text-[#8A8A8A] hover:text-[#111111] underline transition-colors"
                    >
                      Close
                    </button>
                  </div>

                  <p className="text-xs text-[#686868] leading-relaxed">
                    We triggered your system mail app. If your browser didn&apos;t open an email automatically, click below to open in Gmail Web or copy your formatted brief to send directly to{' '}
                    <strong className="text-[#111111]">{siteConfig.contactEmail}</strong>.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={getGmailUri()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2.5 bg-[#D62545] hover:bg-[#E94A14] text-white text-xs uppercase tracking-[0.18em] font-bold transition-colors"
                    >
                      <span>Open in Gmail (Web)</span>
                      <ArrowUpRight size={13} />
                    </a>

                    <button
                      type="button"
                      onClick={triggerMailto}
                      className="inline-flex items-center space-x-1.5 px-4 py-2.5 bg-[#111111] hover:bg-black text-white text-xs uppercase tracking-[0.18em] font-semibold transition-colors"
                    >
                      <Send size={12} />
                      <span>Launch Mail App</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyInquiry}
                      className="inline-flex items-center space-x-1.5 px-4 py-2.5 border border-[#111111] bg-white hover:bg-[#111111] hover:text-white text-xs uppercase tracking-[0.18em] font-semibold text-[#111111] transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check size={13} className="text-[#D62545]" />
                          <span className="text-[#D62545]">Brief Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy Brief Text</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-[0.18em] text-[#111111] font-semibold">
                      Your Name <span className="text-[#D62545]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Julian Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#E5E5E5] p-3 text-xs text-[#111111] placeholder-[#8A8A8A] focus:border-[#D62545] focus:outline-none transition-colors"
                    />
                    {errors.name && <p className="text-[11px] text-[#E94A14] font-medium">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-[0.18em] text-[#111111] font-semibold">
                      Email Address <span className="text-[#D62545]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="julian@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#E5E5E5] p-3 text-xs text-[#111111] placeholder-[#8A8A8A] focus:border-[#D62545] focus:outline-none transition-colors"
                    />
                    {errors.email && <p className="text-[11px] text-[#E94A14] font-medium">{errors.email}</p>}
                  </div>
                </div>

                {/* Company & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-[0.18em] text-[#111111] font-semibold">
                      Brand / Company <span className="text-[#8A8A8A] font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Brand or Studio Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border border-[#E5E5E5] p-3 text-xs text-[#111111] placeholder-[#8A8A8A] focus:border-[#D62545] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-[0.18em] text-[#111111] font-semibold">
                      Required Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white border border-[#E5E5E5] p-3 text-xs text-[#111111] focus:border-[#D62545] focus:outline-none transition-colors"
                    >
                      <option>Website Design &amp; Development</option>
                      <option>Custom MERN Stack Web Application</option>
                      <option>E-commerce Development &amp; Storefronts</option>
                      <option>Influencer Marketing &amp; Creator Campaigns</option>
                      <option>UGC &amp; Social Video Content</option>
                      <option>Brand Redesign &amp; Strategy Audit</option>
                    </select>
                  </div>
                </div>

                {/* Budget (Blank by default, no rigid options) */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-[0.18em] text-[#111111] font-semibold">
                    Estimated Budget <span className="text-[#8A8A8A] font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter estimated budget (or leave blank)"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-white border border-[#E5E5E5] p-3 text-xs text-[#111111] placeholder-[#8A8A8A] focus:border-[#D62545] focus:outline-none transition-colors"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-[0.18em] text-[#111111] font-semibold">
                    Project Scope &amp; Objectives <span className="text-[#D62545]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your brand, current challenges, key deliverables, and target timeline..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-white border border-[#E5E5E5] p-3 text-xs text-[#111111] placeholder-[#8A8A8A] focus:border-[#D62545] focus:outline-none transition-colors"
                  />
                  {errors.description && <p className="text-[11px] text-[#E94A14] font-medium">{errors.description}</p>}
                </div>

                {/* Submit & Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center space-x-2.5 px-7 py-4 bg-[#D62545] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E94A14] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D62545] focus:ring-offset-2 shadow-sm"
                  >
                    <Send size={14} />
                    <span>Send via Mail App</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenGmail}
                    className="inline-flex items-center justify-center space-x-2 px-6 py-4 border border-[#111111] bg-white text-xs uppercase tracking-[0.18em] font-semibold text-[#111111] hover:bg-[#111111] hover:text-white transition-colors shadow-sm"
                  >
                    <Mail size={14} className="text-[#D62545]" />
                    <span>Open in Gmail (Web)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyInquiry}
                    className="inline-flex items-center justify-center space-x-2 px-5 py-4 border border-[#E5E5E5] bg-white text-xs uppercase tracking-[0.18em] font-semibold text-[#686868] hover:text-[#111111] hover:border-[#111111] transition-colors shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-[#D62545]" />
                        <span className="text-[#D62545]">Brief Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy Brief</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>

            {/* Right: Studio Details & Direct Information */}
            <div className="lg:col-span-5 space-y-8">

              {/* Direct Inquiries Card */}
              <div className="p-8 bg-[#F5F5F2] border border-[#E5E5E5] space-y-4 shadow-sm">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
                  Direct Studio Email
                </div>
                <div className="text-xl sm:text-2xl font-light text-[#111111]">
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="hover:text-[#D62545] transition-colors"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
                <p className="text-xs text-[#686868] leading-relaxed">
                  We review incoming briefs daily and respond within 24 to 48 business hours with next steps or discovery call scheduling.
                </p>

                <div className="pt-3 border-t border-[#E5E5E5] flex flex-wrap items-center gap-4 text-xs">
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-[#111111] hover:text-[#D62545] font-semibold transition-colors"
                  >
                    <span>Instagram (@its.noxas)</span>
                    <ArrowUpRight size={12} className="text-[#8A8A8A]" />
                  </a>
                  <span className="text-[#D1D1D1]">&middot;</span>
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-[#111111] hover:text-[#D62545] font-semibold transition-colors"
                  >
                    <span>LinkedIn (noxas-marketing)</span>
                    <ArrowUpRight size={12} className="text-[#8A8A8A]" />
                  </a>
                </div>
              </div>

              {/* Creator Inquiries Card (Dark Feature Section for Contrast) */}
              <div className="p-8 bg-[#171717] border border-[#2A2A2A] space-y-4 relative overflow-hidden shadow-xl">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#D62545] font-bold">
                  For Content Creators &amp; Influencers
                </div>
                <h3 className="text-xl font-light text-[#F7F7F7]">
                  Applying to the Creator Roster?
                </h3>
                <p className="text-xs text-[#B5B5B5] leading-relaxed">
                  Creators seeking campaign collaborations should apply exclusively through our verified Google Form roster. Please do not submit talent applications through the client brief above.
                </p>
                <div className="pt-2">
                  <a
                    href={siteConfig.creatorFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-[#D62545] text-white text-xs uppercase tracking-[0.18em] font-bold hover:bg-[#E94A14] transition-colors"
                  >
                    <span>Open Creator Google Form</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* Operating Philosophy */}
              <div className="p-8 bg-[#F5F5F2] border border-[#E5E5E5] space-y-2 text-xs text-[#686868] shadow-sm">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#111111] font-bold">
                  Studio Standards
                </div>
                <p className="leading-relaxed">
                  Transparent fee structures. No offshore subcontracting surprises. Meticulous code and bespoke design systems.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
