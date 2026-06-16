import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://inextremisconsulting.com.com';
  return [
    { url: base,              lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services`,lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
