const app = require('../../src/app');

describe('\'UserGroup\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-group');
    expect(service).toBeTruthy();
  });
});
