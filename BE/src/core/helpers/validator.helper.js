import { NextFunction, Request, Response } from 'express';
import Joi, { SchemaMap } from 'joi';

import { ValidationException } from '../exceptions/validation.exception';

export class ValidatorHelper {
  /**
   * @param {SchemaMap} schemaMap
   */
  static create(schemaMap) {
    const schema = Joi.object(schemaMap).required();
    /**
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     */
    return (req, res, next) => {
      const { error, value } = schema.validate(req.body);
      if (error) return next(new ValidationException(error));

      req.body = value;
      next();
    };
  }
}
