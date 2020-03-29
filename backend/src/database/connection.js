const knex = require('knex');
const configuration = require('../../knexfile.js');

const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

const conn = knex(config);

module.exports = conn;