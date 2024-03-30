import Joi from 'joi';
import { ValidatorHelper } from '../../../core/helpers/validator.helper';

export const updateAppointmentValidator = ValidatorHelper.create({
  status: Joi.string().max(255).optional(),
  diagnosis: Joi.string().max(255).optional(),
  prescription: Joi.string().max(255).optional(),
  description: Joi.string().optional()
});
