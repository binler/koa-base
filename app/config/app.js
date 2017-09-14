/**
 * Config Application
 */
require('dotenv').config();
module.exports = {

  // Name app
  app_name: "binler",

  // Cache ejs template
  ejs_cache: false,

  // Debug ejs template
  ejs_debug: false,

  // Directory layout file
  ejs_layout: 'layout/template',

  // Type file view ejs
  viewExt: 'html',

  // Directory assets folder
  assets: 'assets',

  database : {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: "mysql"
  }

}
