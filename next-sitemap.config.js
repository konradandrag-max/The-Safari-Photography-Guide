module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.photographersafari.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
