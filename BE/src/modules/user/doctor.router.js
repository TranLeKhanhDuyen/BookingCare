import { Router } from 'express';
import { doctorController } from './doctor.controller';
import { AuthHelper } from '../../core/helpers/auth.helper';

const doctorRouter = Router();

doctorRouter.get('/', doctorController.getDoctors);
doctorRouter.get(
  '/appointments',
  AuthHelper.authMiddleware,
  AuthHelper.doctorMiddleware,
  doctorController.getDoctorAppointments
);
doctorRouter.get('/:id', doctorController.getDoctorDetails);

export default doctorRouter;
