import { Router } from 'express';
import { specialtyController } from './specialty.controller';

const specialtyRouter = Router();

specialtyRouter.get('/', specialtyController.getSpecialties);

export default specialtyRouter;
