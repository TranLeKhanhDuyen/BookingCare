import Joi from 'joi';
import { ValidatorHelper } from '../../../core/helpers/validator.helper';

export const signUpValidator = ValidatorHelper.create({
  firstName: Joi.string().max(255).required(),
  lastName: Joi.string().max(255).required(),
  email: Joi.string().email().max(255).required(),
  password: Joi.string().max(255).required(),
  address: Joi.string().max(255).optional(),
  phoneNumber: Joi.string().max(255).optional(),
  dob: Joi.date().iso().optional(),
  gender: Joi.string().optional(),
  specialtyId: Joi.number().optional(),
  avatar: Joi.any().meta({}).optional(),
  role: Joi.string().optional()
});
