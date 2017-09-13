'use strict';

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const render = require('koa-ejs');
const cors = require('kcors');
const path = require('path');
const config = require(path.join(__dirname, 'config/app'));
const serve = require('koa-static');
const app = new Koa();

const router = require('./route');

app.use(bodyParser({ enableTypes: ['json'] }));

// return response time in X-Response-Time header
app.use(async function responseTime(ctx, next) {
    const t1 = Date.now();
    await next();
    const t2 = Date.now();
    ctx.set('X-Response-Time', Math.ceil(t2 - t1) + 'ms');
});

render(app, {
  root: path.join(__dirname, 'view'),
  layout: config.ejs_layout,
  viewExt: config.viewExt,
  cache: config.ejs_cache,
  debug: config.ejs_debug
});
//For cors with options
app.use(cors({ origin: '*' }));

//For assets (Js, Css, Font, image)
app.use(serve(path.join('.', 'public', config.assets)));

// Use config in view
app.context.config = config;

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app
