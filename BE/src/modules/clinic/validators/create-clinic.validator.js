import Joi from 'joi';
import { ValidatorHelper } from '../../../core/helpers/validator.helper';

export const createClinicValidator = ValidatorHelper.create({
  name: Joi.string().email().max(255).required(),
  description: Joi.string().optional(),
  phone: Joi.string().optional(),
  address: Joi.string().required(),
  image: Joi.string().optional(),
  openingTime: Joi.string().required(),
  closingTime: Joi.string().required(),
  doctorId: Joi.number().required()
});
