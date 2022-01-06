const users = require('./users/users.service.js');
const address = require('./address/address.service.js');
const usersGroups = require('./users-groups/users-groups.service.js');
const countries = require('./countries/countries.service.js');
const states = require('./states/states.service.js');
const companies = require('./companies/companies.service.js');
const pincodes = require('./pincodes/pincodes.service.js');
const usersProfiles = require('./users-profiles/users-profiles.service.js');
const companiesUsers = require('./companies-users/companies-users.service.js');
const uploads = require('./uploads/uploads.service.js');
const otp = require('./otp/otp.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(address);
  app.configure(usersGroups);
  app.configure(countries);
  app.configure(states);
  app.configure(companies);
  app.configure(pincodes);
  app.configure(usersProfiles);
  app.configure(companiesUsers);
  app.configure(uploads);
  app.configure(otp);
};
