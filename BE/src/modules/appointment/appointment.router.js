import { Router } from 'express';
import { createAppointmentValidator } from './validators/create-appointment.validator';
import { appointmentController } from './appointment.controller';
import { AuthHelper } from '../../core/helpers/auth.helper';
import { updateAppointmentValidator } from './validators/update-appointment.validator';

const appointmentRouter = Router();

appointmentRouter.post(
  '/',
  createAppointmentValidator,
  appointmentController.createAppointment
);

appointmentRouter.put(
  '/:patientId',
  AuthHelper.authMiddleware,
  AuthHelper.canModifyAppointment,
  updateAppointmentValidator,
  appointmentController.updateAppointment
);

export default appointmentRouter;
