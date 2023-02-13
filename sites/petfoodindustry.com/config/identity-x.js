const configureIdentityX = require('@watt-global-media/package-global/config/identity-x');

module.exports = configureIdentityX({
  appId: '63e9759a11972614d1af0a8c',
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
