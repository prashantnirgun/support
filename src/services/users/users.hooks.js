const { authenticate } = require('@feathersjs/authentication').hooks;

const { hashPassword, protect } =
  require('@feathersjs/authentication-local').hooks;
const errors = require('@feathersjs/errors');

module.exports = {
  before: {
    all: [],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [
      async (context) => {
        const user = await context.app
          .service('users')
          .find({ query: { email: { email: context.data.email } } });
        if (user && user.total > 0) {
          throw new errors.BadRequest('User already exist', {
            id: user.data[0].id
          });
        }
      },
      hashPassword('password')
    ],
    update: [hashPassword('password'), authenticate('jwt')],
    patch: [hashPassword('password'), authenticate('jwt')],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
