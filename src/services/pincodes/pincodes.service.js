// Initializes the `pincodes` service on path `/pincodes`
const { Pincodes } = require('./pincodes.class');
const createModel = require('../../models/pincodes.model');
const hooks = require('./pincodes.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/pincodes', new Pincodes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('pincodes');

  service.hooks(hooks);
};
