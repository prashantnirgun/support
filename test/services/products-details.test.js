const app = require('../../src/app');

describe('\'products-details\' service', () => {
  it('registered the service', () => {
    const service = app.service('products-details');
    expect(service).toBeTruthy();
  });
});
