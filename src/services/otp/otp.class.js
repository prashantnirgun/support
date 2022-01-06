const { Service } = require('feathers-objection');

exports.Otp = class Otp extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
