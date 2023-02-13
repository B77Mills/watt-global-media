const corporate = require('@watt-global-media/package-global/config/corporate');
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
  company: corporate.name,
  p1events: {
    tenant: 'watt-global-media',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.feedandgrain.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://p1-cms-assets.imgix.net/files/base/wattglobalmedia/all/image/static/feedandgrain/logo-fg-white.svg?h=45&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/wattglobalmedia/all/image/static/feedandgrain/logo-fg-white.svg?h=90&auto=format,compress 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets.imgix.net/files/base/wattglobalmedia/all/image/static/feedandgrain/sandbox/logo-fg-white.svg?h=60&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/wattglobalmedia/all/image/static/feedandgrain/logo-fg-white.svg?h=120&auto=format,compress 2x',
      ],
    },
    corporate: corporate.logo,
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
    // sendFrom: 'www.feedandgrain.com <noreply@parameter1.com>',
    // logo: 'https://p1-cms-assets.imgix.net/files/base/wattglobalmedia/all/image/static/feedandgrain/logo-fg-white.svg?h=45&auto=format,compress&bg=000000&pad=5',
    // bgColor: '#000000',
  },
  setSearchSortFieldToScore: true,
};
