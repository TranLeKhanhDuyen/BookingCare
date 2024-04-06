import { Router } from 'express';
import { doctorController } from './doctor.controller';
import { AuthHelper } from '../../core/helpers/auth.helper';

const doctorRouter = Router();

doctorRouter.get('/', doctorController.getDoctors);
doctorRouter.get(
  '/appointments',
  AuthHelper.authMiddleware,
  AuthHelper.doctorMiddleware,
  doctorController.getMyAppointments
);
doctorRouter.get(
  '/appointments/schedule',
  AuthHelper.authMiddleware,
  AuthHelper.doctorMiddleware,
  doctorController.getMyAppointmentsSchedule
);
doctorRouter.get('/:id', doctorController.getDoctorDetails);
doctorRouter.get(
  '/:doctorId/appointments',
  AuthHelper.authMiddleware,
  AuthHelper.adminMiddleware,
  doctorController.getDoctorAppointments
);

export default doctorRouter;
