
/**
 * Controller
 */
class HomeController {
  constructor() {}

  // index
  async index(ctx) {
    await ctx.render( 'home/index', {title: 'Koajs', content: 'Hello world'} );
  }

}

module.exports = HomeController
