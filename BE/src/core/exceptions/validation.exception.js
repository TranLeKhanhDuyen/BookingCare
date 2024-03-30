import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import { AppException } from './app.exception';

export class ValidationException extends AppException {
  /**
   * @param {Joi.ValidationError} error
   */
  constructor(error) {
    super(StatusCodes.UNPROCESSABLE_ENTITY);
    this.error = error;
  }

  getError() {
    const errorDetails = this.error.details[0];
    const key = errorDetails.path[0].toString();
    let code = errorDetails.type.toUpperCase();
    if (code.includes('.')) code = code.split('.').at(-1);
    const message = errorDetails.message;

    return { key, code, message };
  }
}
