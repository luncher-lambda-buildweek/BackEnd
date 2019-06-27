const knex = require('knex');

const knexConfig = require('../knexfile.js');

// const db = knex(knexConfig.development)

// module.exports = db;

const db = process.env.DB_ENV || 'development';

module.exports = knex(knexConfig[db]);