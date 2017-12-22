const Route = require('koa-router');
const router  = new Route();
const HomeController = new HomeController();

router.get('/', HomeController.index);

module.exports = router
