import Joi from 'joi';
import { ValidatorHelper } from '../../../core/helpers/validator.helper';

export const signUpValidator = ValidatorHelper.create({
  firstName: Joi.string().max(255).required(),
  lastName: Joi.string().max(255).required(),
  email: Joi.string().email().max(255).required(),
  password: Joi.string().max(255).required(),
  address: Joi.string().max(255).required(),
  phoneNumber: Joi.string().max(255).required(),
  dob: Joi.date().iso().required(),
  gender: Joi.string().required(),
  specialtyId: Joi.number().optional(),
  avatar: Joi.any().meta({}).optional(),
  role: Joi.string().optional()
});
