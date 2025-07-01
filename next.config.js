// next.config.js
const { i18n } = require('./next-i18next.config')

// allow data: in font-src and snazzymaps.com in frames
const ContentSecurityPolicy = `
  default-src 'self';
  script-src  'self' 'unsafe-inline' https:;
  style-src   'self' 'unsafe-inline' https:;
  img-src     'self' data:;
  connect-src 'self' https:;
  font-src    'self' data:;
  frame-src   'self' https://snazzymaps.com;
  frame-ancestors 'none';
`.replace(/\s{2,}/g, ' ').trim()

module.exports = {
  i18n,
  trailingSlash: false,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: ContentSecurityPolicy },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
        ],
      },
    ]
  },
}
