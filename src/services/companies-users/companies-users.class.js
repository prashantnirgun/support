const { Service } = require('feathers-objection');

exports.CompaniesUsers = class CompaniesUsers extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
