// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'hayden',
      password : 'a',
      database : 'fortifyLicensing',
      port: 5432,
      ssl: true
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
