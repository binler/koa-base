var environment = process.env.NODE_ENV || 'development'
var config = require('../../knexconfig.js')[environment]

module.exports = require('knex')(config)
