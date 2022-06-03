// Initializes the `commonQueries` service on path `/common-queries`
const { CommonQueries } = require('./common-queries.class');

const hooks = require('./common-queries.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/common-queries', new CommonQueries(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('common-queries');

  service.hooks(hooks);
};
