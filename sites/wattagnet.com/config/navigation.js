const subscribe = {
  href: '/subscribe',
  label: 'Subscribe',
};

const topics = [
  { href: '/poultry-meat', label: 'Poultry Meat' },
  { href: '/egg', label: 'Egg' },
];

const resources = [
  { href: '/webinars', label: 'Webinars' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/resources', label: 'Resources' },
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
