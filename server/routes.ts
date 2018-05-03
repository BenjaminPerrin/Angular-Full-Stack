import * as express from 'express';

import CatController from './controllers/CatController';
import UserController from './controllers/UserController';
import DevController from './controllers/DevController';
// import cat from './models/cat';
// import user from './models/user';

export default function routes(app) {

  const router = express.Router();

  const cat = new CatController();
  const user = new UserController();
  const dev = new DevController();

  // cats
  router.route('/cats').get(cat.getAll);
  router.route('/cats/count').get(cat.count);
  router.route('/cat').post(cat.insert);
  router.route('/cat/:id').get(cat.get);
  router.route('/cat/:id').put(cat.update);
  router.route('/cat/:id').delete(cat.delete);
  // dev
  router.route('/devs').get(dev.getAll);
  router.route('/devs/count').get(dev.count);
  router.route('/dev').post(dev.insert);
  router.route('/dev/:id').get(dev.get);
  router.route('/dev/:id').put(dev.update);
  router.route('/dev/:id').delete(dev.delete);
  // users
  router.route('/login').post(user.login);
  router.route('/users').get(user.getAll);
  router.route('/users/count').get(user.count);
  router.route('/user').post(user.insert);
  router.route('/user/:id').get(user.get);
  router.route('/user/:id').put(user.update);
  router.route('/user/:id').delete(user.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
