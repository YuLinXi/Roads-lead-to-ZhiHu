import * as $ from '../controllers/users';

export default router => ({
  login: router.post('/users/login', $.usersLogin),
});
