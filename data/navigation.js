import { siteConfig } from '@/lib/site-config';

export const navigationLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    hasDropdown: true,
    children: [
      {
        title: 'Website Design & Development',
        href: '/web-development',
        desc: 'Bespoke high-performance digital flagships, responsive platforms & interactive landing pages.',
      },
      {
        title: 'E-commerce Growth Experiences',
        href: '/web-development#ecommerce',
        desc: 'High-conversion storefronts, curated product journeys & checkout optimization.',
      },
      {
        title: 'Influencer Marketing',
        href: '/influencer-marketing',
        desc: 'End-to-end creator scouting, strategy, coordination & authentic reach.',
      },
      {
        title: 'UGC Content & Creative Production',
        href: '/influencer-marketing#ugc',
        desc: 'Short-form video assets, unboxing, product demos & high-engagement social creative.',
      },
    ],
  },
  { label: 'Our Work', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export const footerServiceLinks = [
  { label: 'Website Design & Development', href: '/web-development' },
  { label: 'E-commerce Storefronts', href: '/web-development#ecommerce' },
  { label: 'Influencer Marketing', href: '/influencer-marketing' },
  { label: 'UGC & Content Campaigns', href: '/influencer-marketing#ugc' },
  { label: 'All Services Overview', href: '/services' },
];

export const footerCompanyLinks = [
  { label: 'Our Work / Portfolio', href: '/portfolio' },
  { label: 'About NOXAS', href: '/about' },
  { label: 'Editorial Insights', href: '/insights' },
  { label: 'Creator Network (Google Form)', href: siteConfig.creatorFormUrl, external: true },
  { label: 'Contact & Inquiries', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];
