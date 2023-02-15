module.exports = {
  items: [
    {
      href: '/login',
      label: 'Sign In',
      when: 'logged-out',
      modifiers: ['user'],
    },
    {
      href: '/logout',
      label: 'Sign Out',
      when: 'logged-in',
      modifiers: ['user'],
    },
  ],
  tools: [
    {
      href: '/login',
      label: 'Sign In',
      when: 'logged-out',
      modifiers: ['user'],
    },
    {
      href: '/user/profile',
      label: 'Modify profile',
      when: 'logged-in',
      modifiers: ['user'],
    },
    {
      href: '/logout',
      label: 'Sign Out',
      when: 'logged-in',
      modifiers: ['user'],
    },
  ],
};
