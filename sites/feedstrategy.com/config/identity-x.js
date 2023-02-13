const configureIdentityX = require('@watt-global-media/package-global/config/identity-x');

module.exports = configureIdentityX({
  appId: '63e974fa8d899bdc4b8df617',
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
