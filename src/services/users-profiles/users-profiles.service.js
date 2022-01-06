// Initializes the `UsersProfiles` service on path `/users-profiles`
const { UsersProfiles } = require('./users-profiles.class');
const createModel = require('../../models/users-profiles.model');
const hooks = require('./users-profiles.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/users-profiles', new UsersProfiles(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users-profiles');

  service.hooks(hooks);
};
