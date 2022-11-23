const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const search = require('./search');

module.exports = {
  navigation,
  gam,
  nativeX,
  identityX,
  idxNavItems: {
    enable: process.env.IDX_NAV_ENABLE || false,
  },
  search,
  company: 'Full Account Name',
  p1events: {
    tenant: 'dasherized-account-name',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'parameter1.dev' : '',
  },
  logos: {
    navbar: {
      src: 'https://p1-cms-assets.imgix.net/files/base/p1/sandbox/image/static/sandbox-logo.png?h=45&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/p1/sandbox/image/static/sandbox-logo.png?h=90&auto=format,compress 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets.imgix.net/files/base/p1/sandbox/image/static/sandbox/sandbox-logo.png?h=60&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/p1/sandbox/image/static/sandbox-logo.png?h=120&auto=format,compress 2x',
      ],
    },
    corporate: {
      alt: 'Full Account Name Logo',
      href: 'https://example.com',
      src: 'https://p1-cms-assets.imgix.net/files/base/p1/sandbox/image/static/parameter1-logo.png?w=200&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/p1/sandbox/image/static/parameter1-logo.png?w=200&auto=format,compress&dpr=2 2x',
      ],
    },
  },
  socialMediaLinks: [
  ],
  podcastLinks: [],
  gcse: {
    id: 'NOT_SET',
  },
  gtm: {
    containerId: 'NOT_SET',
  },
  inquiry: {
    enabled: false,
    directSend: false,
    sendTo: 'support@parameter1.com',
    // sendFrom: 'parameter1.dev <noreply@parameter1.com>',
    // logo: 'https://p1-cms-assets.imgix.net/files/base/p1/sandbox/image/static/lab/lab-logo.png?h=45&auto=format,compress&bg=000000&pad=5',
    // bgColor: '#000000',
  },
  setSearchSortFieldToScore: true,
};
