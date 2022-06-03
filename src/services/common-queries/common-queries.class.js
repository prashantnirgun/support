//const { Service } = require('feathers-objection');
const { uniqueEmail } = require('../../libs/utility/commonQueries');

exports.CommonQueries = class CommonQueries {
  //constructor(options) {
  //const {  ...otherOptions } = options;
  // super({
  //   ...otherOptions,
  //   model: Model
  // });
  //}

  async find(params) {
    try {
      console.log('params', params.query);
      switch (params.query.controller) {
        case 'emailExists':
          const result = await uniqueEmail(params.query.email);
          return result;
          break;
        default:
          break;
      }
    } catch (error) {
      return error;
    }
  }
};
