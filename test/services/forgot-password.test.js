const app = require('../../src/app');

describe('\'ForgotPassword\' service', () => {
  it('registered the service', () => {
    const service = app.service('forgot-password');
    expect(service).toBeTruthy();
  });
});
