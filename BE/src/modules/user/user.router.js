import { Router } from 'express';
import { AuthHelper } from '../../core/helpers/auth.helper';
import { userController } from './user.controller';
import { userService } from './user.service';

const userRouter = Router();

userRouter.post(
  '/',
  AuthHelper.authMiddleware,
  AuthHelper.adminMiddleware,
  userService.getProfile
);
userRouter.get('/me', AuthHelper.authMiddleware, userService.getProfile);

userRouter.post('/create-new-user', userController.createUser);

// get user by id
userRouter.get('/:id', userController.getUserById);

// delete user by id
userRouter.delete('/:id', userController.deleteUserById);

// update user by id
userRouter.put('/:id', userController.updateUserById);

// get all users
userRouter.get('/all', userController.getAllUsers);

export default userRouter;
