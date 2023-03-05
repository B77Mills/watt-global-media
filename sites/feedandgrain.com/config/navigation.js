const privacyPolicy = require('@watt-global-media/package-global/config/privacy-policy');
const user = require('@watt-global-media/package-global/config/user');

const subscribe = {
  href: '/subscribe',
  label: 'Subscribe',
};

const topics = [
  { href: '/grain-handling-processing', label: 'Grain Handling & Processing' },
  { href: '/animal-feed-manufacturing', label: 'Animal Feed Manufacturing' },
  { href: '/grain-supply-chain', label: 'Grain Supply Chain' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/safety', label: 'Safety' },
  { href: '/business-markets', label: 'Business & Markets' },
];

const resources = [
  // { href: '#', label: 'Webinars' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/directory', label: 'Buyer\'s Guide' },
];

// const utilities = [
//   { href: '/utility-1', label: 'Utility 1' },
//   { href: '/utility-2', label: 'Utility 2' },
//   { href: '/utility-3', label: 'Utility 3' },
// ];

const grainHandlingProcessing = [
  { href: '/grain-handling-processing/grain-elevators', label: 'Grain Elevators' },
  { href: '/grain-handling-processing/grain-milling', label: 'Milling' },
  { href: '/grain-handling-processing/grain-processing', label: 'Processing' },
  { href: '/grain-handling-processing/grain-merchandising', label: 'Merchandising' },
  { href: '/grain-handling-processing/grain-facility-management', label: 'Facility Management' },
  { href: '/grain-handling-processing/grain-facility-equipment', label: 'Facility Equipment' },
  { href: '/grain-handling-processing/grain-facility-renovations-builds', label: 'Facility Renovations & Builds' },
  { href: '/grain-handling-processing/mycotoxin-management', label: 'Mycotoxin Mangagement' },
  { href: '/grain-handling-processing/biotech-crops', label: 'Biotech Crops' },
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
    {
      when: ['/grain-handling-processing'],
      secondary: {
        items: topics,
      },
      tertiary: { items: [] },
      primary: {
        items: grainHandlingProcessing,
      },
    },
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
