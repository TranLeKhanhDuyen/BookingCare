import { Router } from 'express';
import { AuthHelper } from '../../core/helpers/auth.helper';
import { userService } from './user.service';

const userRouter = Router();

userRouter.get('/me', AuthHelper.authMiddleware, userService.getProfile);

export default userRouter;
