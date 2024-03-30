import express from 'express';
import Joi from 'joi';

import { ValidationException } from '../exceptions/validation.exception';

export class ValidatorHelper {
  /**
   * @param {Joi.SchemaMap} schemaMap
   */
  static create(schemaMap) {
    const schema = Joi.object(schemaMap).required();
    /**
     * @param {express.Request} req
     * @param {express.Response} res
     * @param {express.NextFunction} next
     */
    return (req, res, next) => {
      const { error, value } = schema.validate(req.body);
      if (error) return next(new ValidationException(error));

      req.body = value;
      next();
    };
  }
}
