const privacyPolicy = require('@watt-global-media/package-global/config/privacy-policy');
// const subscribe = require('./subscribe');
const user = require('@watt-global-media/package-global/config/user');

const subscribe = {
  href: '/subscribe',
  label: 'Subscribe',
};

const topics = [
  { href: '/antibiotic-free-meat-production', label: 'Antibiotic-free Meat Production' },
  { href: '/animal-nutrition-formulation', label: 'Nutrition & Formulation' },
  { href: '/livestock-feed-manufacturing', label: 'Feed Manufacturing' },
  { href: '/animal-feed-additives', label: 'Feed Additives' },
  // { href: '/global-feed-production-trends', label: 'Global Feed Production Trends' },
  { href: '/animal-diseases-health', label: 'Diseases & Health' },
];

const resources = [
  { href: '#', label: 'Top Feed Companies' },
  { href: '#', label: 'Webinars' },
  { href: '/magazine', label: 'Magazine' },
];

const utilities = [
  { href: 'https://www.wattglobalmedia.com/advertising/advertising-feed/', label: 'Advertise', target: '_blank' },
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
