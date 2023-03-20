const privacyPolicy = require('@watt-global-media/package-global/config/privacy-policy');
// const subscribe = require('./subscribe');
const user = require('@watt-global-media/package-global/config/user');

const subscribe = {
  href: '/subscribe',
  label: 'Subscribe',
};

const topics = [
  { href: '/nutrition', label: 'Nutrition' },
  { href: '/safety-quality', label: 'Safety & Quality' },
  { href: '/production', label: 'Production' },
  { href: '/packaging', label: 'Packaging' },
  { href: '/marketing-branding', label: 'Marketing/Branding' },
  { href: '/lawsuits', label: 'Lawsuits' },
  { href: '/sustainability', label: 'Sustainability' },
];

const resources = [
  { href: '#', label: 'Webinars' },
  { href: '#', label: 'White Papers' },

];

const utilities = [
  { href: 'https://www.wattglobalmedia.com/advertising/advertising-pet-food/', label: 'Advertise', target: '_blank' },
];

const mobileMenu = {
  user: [],
  primary: [
    ...topics,
  ],
  secondary: [
    ...resources,
    subscribe,
    { href: '/', label: 'Advertise', target: '_blank' },
  ],
};

// const desktopMenu = {
//   about: [...utilities],
//   user: [],
//   sections: [
//     ...topics,
//   ],
// };

module.exports = {
  type: 'navbar-c',
  promos: [
    {
      title: subscribe.label,
      callToAction: subscribe.label,
      link: subscribe.href,
    },
  ],
  user,
  mobileMenu,
  topics,
  primary: {
    items: topics,
  },
  secondary: {
    items: resources,
  },
  tertiary: {
    items: [],
  },
  contexts: [
    // {
    //   when: ['/grain-handling-processing'],
    //   secondary: {
    //     items: resources,
    //   },
    //   tertiary: { items: [] },
    //   primary: {
    //     items: grainHandlingProcessing,
    //   },
    // },
  ],
  toggleMenu: {
    about: {
      // label: 'About',
      // items: utilities,
    },
    leftColumn: {
      label: 'Topics',
      items: [
        ...topics,
      ],
    },
    midColumn: {
      items: [
        ...resources,
      ],
    },
    rightColumn: {
      label: 'User Tools',
      items: utilities,
    },
  },
  footer: {
    topics,
    more: resources,
    items: [
      privacyPolicy,
      // termsConditions,
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
