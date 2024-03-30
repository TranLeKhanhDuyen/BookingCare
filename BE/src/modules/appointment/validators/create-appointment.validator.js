import Joi from 'joi';
import { ValidatorHelper } from '../../../core/helpers/validator.helper';

export const createAppointmentValidator = ValidatorHelper.create({
  fullName: Joi.string().max(255).required(),
  email: Joi.string().email().max(255).optional(),
  phoneNumber: Joi.string().max(255).required(),
  date: Joi.date().iso().required(),
  doctorId: Joi.number().required()
});
