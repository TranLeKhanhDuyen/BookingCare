import { Router } from 'express';
import { authService } from './auth.service';
import { signUpValidator } from './validators/sign-up.validator';
import { signInValidator } from './validators/sign-in.validator';

const authRouter = Router();

authRouter.post('/sign-up', signUpValidator, authService.signUp);
authRouter.post('/sign-in', signInValidator, authService.signIn);

export default authRouter;
