/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://offer.cehpoint.co.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/_*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        userAgent: 'AhrefsBot',
        crawlDelay: 10,
      },
      {
        userAgent: 'SemrushBot',
        crawlDelay: 10,
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        userAgent: 'dotbot',
        disallow: '/',
      },
    ],
    additionalSitemaps: [
      'https://offer.cehpoint.co.in/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority for important pages
    const priorities = {
      '/': 1.0,
      '/use-cases': 0.9,
      '/legal/privacy': 0.5,
      '/legal/terms': 0.5,
      '/legal/refund': 0.5,
      '/legal/cookies': 0.5,
    };

    const changefreqs = {
      '/': 'daily',
      '/use-cases': 'weekly',
      '/legal/*': 'monthly',
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
