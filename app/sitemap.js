import { siteConfig } from '@/lib/site-config';

export default function sitemap() {
  const routes = [
    '',
    '/services',
    '/web-development',
    '/influencer-marketing',
    '/portfolio',
    '/about',
    '/insights',
    '/contact',
    '/privacy-policy',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
}
