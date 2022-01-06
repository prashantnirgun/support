// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql2',
    connection:
      'mysql://tssnetin_webroot:MwDpI0118$@162.241.69.248:3306/tssnetin_production',
    migrations: {
      directory: '../migrations'
    }
  },
  production: {
    client: 'mysql',
    connection:
      'mysql://tpadmin:Braingym!Prod!Admin!Prod@databasebraingym.ceeh8cuc6lkp.us-east-2.rds.amazonaws.com:3306/braingym_alpha_copy',
    migrations: {
      directory: '../migrations'
    }
  }
};
