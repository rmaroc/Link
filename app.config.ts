export default defineAppConfig({
  title: 'Rmaroc Safe Link',
  email: 'welcome@rmaroc.com',
  github: 'https://github.com/',
  twitter: 'https://x.com',
  telegram: 'https://telegram.com',
  mastodon: '/',
  blog: 'https://rmaroc.com',
  description: 'A Secure Link Shortener.',
  image: '/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
