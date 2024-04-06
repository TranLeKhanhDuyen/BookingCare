import { Router } from 'express';
import { createClinicValidator } from './validators/create-clinic.validator';
import { clinicController } from './clinic.controller';

const clinicRouter = Router();

clinicRouter.post('/', createClinicValidator);
clinicRouter.get('/:id', clinicController.getClinicDetails);

export default clinicRouter;
