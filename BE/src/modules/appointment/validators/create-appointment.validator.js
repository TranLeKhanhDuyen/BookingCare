import Joi from 'joi';
import { ValidatorHelper } from '../../../core/helpers/validator.helper';

export const createAppointmentValidator = ValidatorHelper.create({
  fullName: Joi.string().max(255).required(),
  email: Joi.string().email().max(255).optional(),
  phoneNumber: Joi.string().max(255).required(),
  dob: Joi.date().iso().required(),
  date: Joi.date().iso().required(),
  reasonForMedicalExam: Joi.string().required(),
  doctorId: Joi.number().required()
});
