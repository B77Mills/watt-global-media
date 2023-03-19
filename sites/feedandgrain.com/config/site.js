const corporate = require('@watt-global-media/package-global/config/corporate');
const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const newsletter = require('./newsletter');
const identityX = require('./identity-x');
const search = require('./search');

module.exports = {
  navigation,
  gam,
  nativeX,
  newsletter,
  identityX,
  idxNavItems: {
    enable: process.env.IDX_NAV_ENABLE || false,
  },
  search,
  company: corporate.name,
  p1events: {
    tenant: 'watt',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.feedandgrain.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.feedandgrain.com/files/base/wattglobalmedia/all/image/static/feedandgrain/fg-logo-blue-green.svg?h=45&auto=format,compress',
      srcset: [
        'https://img.feedandgrain.com/files/base/wattglobalmedia/all/image/static/feedandgrain/fg-logo-blue-green.svg?h=90&auto=format,compress 2x',
      ],
    },
    footer: {
      src: 'https://img.feedandgrain.com/files/base/wattglobalmedia/all/image/static/feedandgrain/fg-logo-blue-green.svg?h=60&auto=format,compress',
      srcset: [
        'https://img.feedandgrain.com/files/base/wattglobalmedia/all/image/static/feedandgrain/fg-logo-blue-green.svg?h=120&auto=format,compress 2x',
      ],
    },
    corporate: corporate.logo,
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/feedandgrain/' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/feed-&-grain/' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCGqzQInmKn0woX9iYDG9Uzg/featured' },
  ],
  podcastLinks: [],
  gtm: {
    containerId: 'GTM-NDZPQ8V',
  },
  inquiry: {
    enabled: false,
    directSend: false,
    sendTo: 'support@parameter1.com',
    // sendFrom: 'www.feedandgrain.com <noreply@parameter1.com>',
    // logo: 'https://img.feedandgrain.com/files/base/wattglobalmedia/all/image/static/feedandgrain/fg-logo-blue-green.svg?h=45&auto=format,compress&bg=000000&pad=5',
    // bgColor: '#000000',
  },
  setSearchSortFieldToScore: true,
  magazine: {
    publicationIds: ['640519b0a33405882b1ff5d7'],
    subscribe: {
      id: '640519b0a33405882b1ff5d7',
      name: 'Feed and Grain Magazine',
      new: {
        omedasite: 'FGJ_new', // FS_land
      },
    },
  },
};
