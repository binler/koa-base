const Route = require('koa-router');
const router  = new Route();

const HomeCtl = require('./controller/home');
const HomeController = new HomeCtl();

router.get('/', HomeController.index);

module.exports = router
