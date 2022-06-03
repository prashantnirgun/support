// Initializes the `products-details` service on path `/products-details`
const { ProductsDetails } = require('./products-details.class');
const createModel = require('../../models/products-details.model');
const hooks = require('./products-details.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/products-details', new ProductsDetails(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('products-details');

  service.hooks(hooks);
};
