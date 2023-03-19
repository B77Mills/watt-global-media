const privacyPolicy = require('@watt-global-media/package-global/config/privacy-policy');

const baseConfig = {
  action: 'https://watt.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'FS_land' },
  ],
};

const defaults = {
  name: 'Stay in the Know',
  description: 'Get industry news updates and product information to help you stay up to date.',
  defaultNewsletter: {
    deploymentTypeId: 0,
    name: 'TBD',
    eventCategory: 'TBD',
  },
  privacyPolicy,
};

module.exports = {
  // uses inline omeda form
  signupBanner: {
    ...defaults,
    imagePath: 'files/base/wattglobalmedia/all/image/static/newsletter-pushdown/fs-full.png',
  },
  pushdown: {
    ...defaults,
    imagePath: 'files/base/wattglobalmedia/all/image/static/newsletter-pushdown/fs-half.png',
    description: '',
  },

  // links off to seperate omeda dragonform
  signupBannerLarge: {
    ...baseConfig,
  },
  signupFooter: {
    ...baseConfig,
  },
};
