const UserModel = require('../../models/users.model')();

exports.uniqueEmail = async (email) => {
  try {
    const user = await UserModel.query().select('email').where('email', email);
    return user;
  } catch (error) {
    console.log('common-queries.uniqueEmail', error);
    return error;
  }
  //console.log('unique email', user);
  // if (user && user.total > 0) {
  //   throw new errors.BadRequest("User already exist", {
  //     id: user.data[0].id,
  //   });
  //}
};
