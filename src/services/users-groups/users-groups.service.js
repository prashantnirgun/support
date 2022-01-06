// Initializes the `UserGroup` service on path `/user-group`
const { UsersGroups } = require('./users-groups.class');
const createModel = require('../../models/users-groups.model');
const hooks = require('./users-groups.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/users-groups', new UsersGroups(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users-groups');

  service.hooks(hooks);
};
