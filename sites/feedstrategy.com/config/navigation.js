const subscribe = {
  href: '/subscribe',
  label: 'Subscribe',
};

const topics = [
  { href: '/topic-1', label: 'Topic 1' },
  { href: '/topic-2', label: 'Topic 2' },
  { href: '/topic-3', label: 'Topic 3' },
  { href: '/topic-4', label: 'Topic 4' },
  { href: '/topic-5', label: 'Topic 5' },
];

const resources = [
  { href: '/resource-1', label: 'Resource 1' },
  { href: '/resource-2', label: 'Resource 2' },
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
  type: 'navbar2',
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
    items: [],
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
