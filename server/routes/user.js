import * as $ from '../controllers/users';

export default router => ({
  register: router.post('/users/login/', $.usersLogin),
});
