import { Router } from 'express';
import authRouter from './modules/auth/auth.router';
import userRouter from './modules/user/user.router';

export const routes = Router();

routes.use('/auth', authRouter);
routes.use('/users', userRouter);
