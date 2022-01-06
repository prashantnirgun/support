const { Service } = require('feathers-objection');

exports.Countries = class Countries extends Service {
  constructor(options, app) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });

    //console.log('host=>', app.get('host'));
  }
};
