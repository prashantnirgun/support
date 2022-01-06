const app = require('../../src/app');

describe('\'otp\' service', () => {
  it('registered the service', () => {
    const service = app.service('otp');
    expect(service).toBeTruthy();
  });
});
