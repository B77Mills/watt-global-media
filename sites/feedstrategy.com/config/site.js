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
    tenant: 'watt',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.feedstrategy.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.feedstrategy.com/files/base/wattglobalmedia/all/image/static/feedstrategy/FSlogo_small_R_200.png?h=45&auto=format,compress',
      srcset: [
        'https://img.feedstrategy.com/files/base/wattglobalmedia/all/image/static/feedstrategy/FSlogo_small_R_200.png?h=45&auto=format,compress&dpr=2 2x',
      ],
    },
    footer: {
      src: 'https://img.feedstrategy.com/files/base/wattglobalmedia/all/image/static/feedstrategy/FSlogo_small_R_200.png?h=60&auto=format,compress',
      srcset: [
        'https://img.feedstrategy.com/files/base/wattglobalmedia/all/image/static/feedstrategy/FSlogo_small_R_200.png?h=60&auto=format,compress&dpr=2 2x',
      ],
    },
    corporate: corporate.logo,
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/feedstrategy' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/12055651/' },
  ],
  podcastLinks: [],
  gtm: {
    containerId: 'GTM-W3XJQ98',
  },
  inquiry: {
    enabled: false,
    directSend: false,
    sendTo: 'support@parameter1.com',
    // sendFrom: 'www.feedandgrain.com <noreply@parameter1.com>',
    // logo: 'https://img.feedstrategy.com/files/base/wattglobalmedia/all/image/static/feedstrategy/FSlogo_small_R_200.png?h=45&auto=format,compress&bg=000000&pad=5',
    // bgColor: '#000000',
  },
  setSearchSortFieldToScore: true,
  magazine: {
    publicationIds: ['NOT_SET'],
    subscribe: {
      id: 'NOT_SET',
      name: 'Feed Strategy Magazine',
      new: {
        omedasite: 'FS_land',
      },
    },
  },
};
