const { Service } = require('feathers-objection');

exports.Pincodes = class Pincodes extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
