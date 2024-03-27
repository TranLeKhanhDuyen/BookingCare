import { Router } from 'express';
import { userService } from './user.service';
import { JwtHelper } from '../../core/helpers/jwt.helper';

const userRouter = Router();

userRouter.get('/me', JwtHelper.authMiddleware, userService.getProfile);

export default userRouter;
