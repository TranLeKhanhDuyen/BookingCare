import { Router } from 'express';
import appointmentRouter from './modules/appointment/appointment.router';
import authRouter from './modules/auth/auth.router';
import clinicRouter from './modules/clinic/clinic.router';
import patientRouter from './modules/patient/patient.router';
import specialtyRouter from './modules/specialty/specialty.router';
import doctorRouter from './modules/user/doctor.router';
import userRouter from './modules/user/user.router';

export const routes = Router();

routes.use('/auth', authRouter);
routes.use('/specialties', specialtyRouter);
routes.use('/users', userRouter);
routes.use('/doctors', doctorRouter);
routes.use('/clinics', clinicRouter);
routes.use('/patients', patientRouter);

routes.use('/appointments', appointmentRouter);