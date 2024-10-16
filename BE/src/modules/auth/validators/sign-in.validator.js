import Joi from 'joi';
import { ValidatorHelper } from '../../../core/helpers/validator.helper';

export const signInValidator = ValidatorHelper.create({
  email: Joi.string().email().max(255).required(),
  password: Joi.string().max(255).required()
});
