// Initializes the `countries` service on path `/countries`
const { Countries } = require('./countries.class');
const createModel = require('../../models/countries.model');
const hooks = require('./countries.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/countries', new Countries(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('countries');

  service.hooks(hooks);
};
