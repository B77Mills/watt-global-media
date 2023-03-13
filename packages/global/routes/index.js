const htmlSitemap = require('@parameter1/base-cms-marko-web-html-sitemap/routes');
const renderBlock = require('@parameter1/base-cms-marko-web-theme-monorail/routes/render-block');
const magazine = require('@parameter1/base-cms-marko-web-theme-monorail-magazine/routes');
const search = require('@parameter1/base-cms-marko-web-theme-monorail/routes/search');
const taxonomy = require('@parameter1/base-cms-marko-web-theme-monorail/routes/taxonomy');
const omedaNewsletters = require('@parameter1/base-cms-marko-web-omeda/routes/omeda-newsletters');
const rss = require('./rss');
const nativeX = require('./native-x');
const printContent = require('./print-content');
const publicFiles = require('./public-files');
const redirects = require('./redirects');
const staticPage = require('./static-page');
const subscribe = require('./subscribe');

const magazineIndex = require('../templates/magazine/index');

module.exports = (app, siteConfig) => {
  // Magazine
  magazine(app, { index: magazineIndex });

  // rss
  rss(app);

  // Omeda newsletter signup
  omedaNewsletters(app);

  // NativeX (Story rendering)
  nativeX(app);

  // Shared Print Content
  printContent(app);

  // Shared Public Files (e.g. ads.txt)
  publicFiles(app);

  // Redirects
  redirects(app);

  // Remote component/block loader
  renderBlock(app);

  // Taxonomy pages (for handling redirects from old WP sites)
  taxonomy(app);

  // Search routes
  search(app, siteConfig);

  // Static pages
  staticPage(app);

  // Subscribe
  subscribe(app);

  // HTML Sitemap
  htmlSitemap(app);
};
