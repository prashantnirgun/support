const { Service } = require('feathers-objection');

exports.Categories = class Categories extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model,
      whitelist: ['$eager', '$joinRelation', '$select' /*, '$sort'*/]
    });
  }

  async find(params) {
    console.log(params.query);
    if (!params.query.controller) {
      return await super.find(params);
    } else {
      if (params.query.controller === 'category-list') {
        delete params.query.controller;

        return await this.Model.query()
          .select('categories.*', 'a.category_name as group_name')
          .join('categories as a', 'categories.id', 'a.id')
          .where('categories.company_id', 3);
      }
    }
  }
};
