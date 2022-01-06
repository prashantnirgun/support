const { Service } = require('feathers-objection');

exports.UsersGroups = class UserGroup extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
