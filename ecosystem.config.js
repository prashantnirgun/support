module.exports = {
  apps: [
    {
      name: 'API',
      exec_mode: 'cluster',
      instances: 1, // Or a number of instances
      script: 'src/',
      args: 'start',
      env_production: {
        NODE_ENV: 'production'
      },
      env_development: {
        NODE_ENV: 'development'
      }
    }
  ]
};
