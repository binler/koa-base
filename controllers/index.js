var router = require('koa-route');
router.get('/', ctx => {
    ctx.body = 'A random URL';
  });
module.exports = router;