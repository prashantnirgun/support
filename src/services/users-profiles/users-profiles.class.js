const { Service } = require('feathers-objection');

exports.UsersProfiles = class UsersProfiles extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
