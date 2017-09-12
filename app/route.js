const Route = require('koa-router');
const router  = new Route();

const HomeCtl = require('./controller/home');
const HomeController = new HomeCtl();

router.get('/', async (ctx, next) => {
  await HomeController.index(ctx);
});

module.exports = router
