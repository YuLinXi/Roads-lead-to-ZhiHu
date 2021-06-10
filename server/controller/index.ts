import { controller, get, DarukContext } from 'daruk';

@controller()
class Index {
  @get('/')
  public async index(ctx: DarukContext) {
    ctx.body = 'he1llo 2sss11144';
  }
}
