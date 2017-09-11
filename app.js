'use strict';

const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = module.exports = new koa();
const index = require('./controllers/index');
const router = require('koa-route');

app.use(bodyParser());
app.use(router(app));
if(!module.parent) app.listen('3000');
console.log('Localhost 3000');