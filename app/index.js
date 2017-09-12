'use strict';

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('kcors');
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

//For cors with options
app.use(cors({ origin: '*' }));

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app
