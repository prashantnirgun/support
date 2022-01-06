const app = require('../../src/app');

describe('\'CompaniesUsers\' service', () => {
  it('registered the service', () => {
    const service = app.service('companies-users');
    expect(service).toBeTruthy();
  });
});
