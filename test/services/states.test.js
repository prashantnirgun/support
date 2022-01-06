const app = require('../../src/app');

describe('\'states\' service', () => {
  it('registered the service', () => {
    const service = app.service('states');
    expect(service).toBeTruthy();
  });
});
