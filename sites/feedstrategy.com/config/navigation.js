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
  { href: '/top-feed-companies', label: 'Top Feed Companies' },
  { href: '/webinars', label: 'Webinars' },
];

const utilities = [
  { href: '/utility-1', label: 'Utility 1' },
  { href: '/utility-2', label: 'Utility 2' },
  { href: '/utility-3', label: 'Utility 3' },
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

const desktopMenu = {
  about: [...utilities],
  user: [],
  sections: [
    ...topics,
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
  desktopMenu,
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
  footer: {
    items: [
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/page/copyright-information', label: 'Copyright Information' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: topics.primary,
    more: [
      ...utilities,
    ],
  },
};
