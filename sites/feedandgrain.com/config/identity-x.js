const configureIdentityX = require('@watt-global-media/package-global/config/identity-x');

module.exports = configureIdentityX({
  appId: '5d1b86070ce467bff670a052',
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
