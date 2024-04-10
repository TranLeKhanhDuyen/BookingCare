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

export default userRouter;
