const { Service } = require('feathers-objection');

exports.States = class States extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
