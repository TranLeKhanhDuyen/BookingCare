import { Router } from 'express';
import { AuthHelper } from '../../core/helpers/auth.helper';
import { patientController } from './patient.controller';

const patientRouter = Router();

patientRouter.get(
  '/patient/:id',
  AuthHelper.authMiddleware,
  patientController.getDetail
);

patientRouter.get(
  '/',
  AuthHelper.authMiddleware,
  patientController.getListPatient
);

patientRouter.put(
  '/patient/:id',
  AuthHelper.authMiddleware,
  patientController.updatePatient
);
patientRouter.delete(
  '/patient/:id',
  AuthHelper.authMiddleware,
  patientController.deletePatient
);

export default patientRouter;
