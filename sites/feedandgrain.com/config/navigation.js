const privacyPolicy = require('@watt-global-media/package-global/config/privacy-policy');
// const subscribe = require('./subscribe');
const user = require('@watt-global-media/package-global/config/user');

const subscribe = {
  href: '/subscribe',
  label: 'Subscribe',
};

const topics = [
  { href: '/grains', label: 'Grains' },
  { href: '/feed', label: 'Feed' },
  { href: '/safety', label: 'Safety' },
  { href: '/government', label: 'Government' },
  { href: '/commerce', label: 'Commerce' },
];

const resources = [
  { href: '#', label: 'Webinars' },
  { href: '#', label: 'Videos' },
  { href: '#', label: 'Buyer\'s Guide' },
];

// const utilities = [
//   { href: '/utility-1', label: 'Utility 1' },
//   { href: '/utility-2', label: 'Utility 2' },
//   { href: '/utility-3', label: 'Utility 3' },
// ];

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
    //   when: ['/business-insights'],
    //   secondary: {
    //     items: topics,
    //   },
    //   tertiary: { items: [] },
    //   primary: {
    //     items: businessInsights,
    //   },
    // },
  ],
  toggleMenu: {
    // col1: {
    //   label: 'Business Insights',
    //   items: businessInsights,
    // },
    // col2: {
    //   label: 'Research & Development',
    //   items: researchDevelopment,
    // },
    // col3: {
    //   label: 'Diagnostic Technologies',
    //   items: diagnosticTechnologies,
    // },
    // col4: {
    //   label: 'Diseases',
    //   items: diseases,
    // },
    // col5: {
    //   label: 'Resources',
    //   items: resources,
    // },
  },
  footer: {
    col1: {
      label: 'Topics',
      colspan: 3,
      items: topics,
    },
    col2: {
      label: 'Resources',
      colspan: 3,
      items: resources,
    },
    col3: {
      label: 'More',
      colspan: 2,
      items: [],
    },
    items: [
      privacyPolicy,
      // termsConditions,
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
