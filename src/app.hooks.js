// Application hooks that run for every service

module.exports = {
  before: {
    all: [],
    find: [
      (hook) => {
        if (hook.params.query && hook.params.query.$paginate) {
          hook.params.paginate =
            hook.params.query.$paginate === 'false' ||
            hook.params.query.$paginate === false;
          delete hook.params.query.$paginate;
        }
        return hook;
      }
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [
      (hook) => {
        if (hook.app.settings.env.toUpperCase() === 'DEVELOPMENT') {
          console.log('application.hook ===>', hook.error);
        }
        return hook;
      }
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
