const app = require('../../src/app');

describe('\'UsersProfiles\' service', () => {
  it('registered the service', () => {
    const service = app.service('users-profiles');
    expect(service).toBeTruthy();
  });
});
