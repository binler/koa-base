'use strict';
require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 4000;
const src = env === 'production' ? './build/index' : './app/index';
const app = require(src);
const server = app.listen(port);
console.log('Server running at ' + port);
console.log("Running in "  + process.env.NODE_ENV + " v" + process.env.npm_package_version);
module.exports = {server: server}
