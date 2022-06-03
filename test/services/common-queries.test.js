const app = require('../../src/app');

describe('\'commonQueries\' service', () => {
  it('registered the service', () => {
    const service = app.service('common-queries');
    expect(service).toBeTruthy();
  });
});
