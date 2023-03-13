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
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.petfoodindustry.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://p1-cms-assets.imgix.net/files/base/wattglobalmedia/all/image/static/petfoodindustry/petfoodindustry-logo.svg?h=45&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/wattglobalmedia/all/image/static/petfoodindustry/petfoodindustry-logo.svg?h=45&auto=format,compress&dpr=2 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets.imgix.net/files/base/wattglobalmedia/all/image/static/petfoodindustry/petfoodindustry-logo.svg?h=60&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/wattglobalmedia/all/image/static/petfoodindustry/petfoodindustry-logo.svg?h=60&auto=format,compress&dpr=2 2x',
      ],
    },
    corporate: corporate.logo,
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/PetfoodIndustryCommunity' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/5099353/' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/PetFoodIndustryTV' },
  ],
  podcastLinks: [],
  gtm: {
    containerId: 'GTM-52MDT49',
  },
  inquiry: {
    enabled: false,
    directSend: false,
    sendTo: 'support@parameter1.com',
    // sendFrom: 'www.feedandgrain.com <noreply@parameter1.com>',
    // logo: 'https://p1-cms-assets.imgix.net/files/base/wattglobalmedia/all/image/static/petfoodindustry/petfoodindustry-logo.svg?h=45&auto=format,compress&bg=000000&pad=5',
    // bgColor: '#000000',
  },
  setSearchSortFieldToScore: true,
  magazine: {
    publicationIds: ['NOT_SET'],
    subscribe: {
      id: 'NOT_SET',
      name: 'Petfood Industry Magazine',
      new: {
        omedasite: 'PET_land',
      },
    },
  },
};
