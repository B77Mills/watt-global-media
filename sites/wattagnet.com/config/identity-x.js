const configureIdentityX = require('@watt-global-media/package-global/config/identity-x');

module.exports = configureIdentityX({
  appId: '63e975871197262b01af0a8b',
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
