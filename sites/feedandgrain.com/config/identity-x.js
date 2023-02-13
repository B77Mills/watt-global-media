const configureIdentityX = require('@watt-global-media/package-global/config/identity-x');

module.exports = configureIdentityX({
  appId: '63e9757511972697a2af0a8a',
  requiredServerFields: [
    'givenName',
    'familyName',
    'countryCode',
  ],
  requiredClientFields: [
    'givenName',
    'familyName',
    'countryCode',
    'regionCode',
    'postalCode',
  ],
});
