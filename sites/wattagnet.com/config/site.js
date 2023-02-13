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
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.wattagnet.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://p1-cms-assets.imgix.net/files/base/wattglobalmedia/all/image/static/wattagnet/WATTPoultry-com_logo4c-1.png?h=45&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/wattglobalmedia/all/image/static/wattagnet/WATTPoultry-com_logo4c-1.png?h=45&auto=format,compress&dpr=2 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets.imgix.net/files/base/wattglobalmedia/all/image/static/wattagnet/WATTPoultry-com_logo4c-1.png?h=60&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/wattglobalmedia/all/image/static/wattagnet/WATTPoultry-com_logo4c-1.png?h=60&auto=format,compress&dpr=2 2x',
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
    // logo: 'https://p1-cms-assets.imgix.net/files/base/wattglobalmedia/all/image/static/wattagnet/WATTPoultry-com_logo4c-1.png?h=45&auto=format,compress&bg=000000&pad=5',
    // bgColor: '#000000',
  },
  setSearchSortFieldToScore: true,
};
