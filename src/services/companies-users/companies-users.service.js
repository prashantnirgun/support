// Initializes the `CompaniesUsers` service on path `/companies-users`
const { CompaniesUsers } = require('./companies-users.class');
const createModel = require('../../models/companies-users.model');
const hooks = require('./companies-users.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/companies-users', new CompaniesUsers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('companies-users');

  service.hooks(hooks);
};
