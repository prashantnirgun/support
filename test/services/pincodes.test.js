const app = require('../../src/app');

describe('\'pincodes\' service', () => {
  it('registered the service', () => {
    const service = app.service('pincodes');
    expect(service).toBeTruthy();
  });
});
