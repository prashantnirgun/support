const { Service } = require('feathers-objection');
const Company = require('../../models/companies.model')();
exports.Companies = class Companies extends Service {
  constructor(options, app) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model,
      whitelist: ['$eager', '$joinRelation', '$select' /*, '$sort'*/]
    });
    this.app = app;
  }
};
