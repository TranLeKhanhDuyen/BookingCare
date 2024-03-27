import { StatusCodes } from 'http-status-codes';
import { AppException } from './app.exception';

export class BadRequestException extends AppException {
  /**
   * @param {string} key
   * @param {string} code
   * @param {string} message
   */
  constructor(key, code, message) {
    super(StatusCodes.BAD_REQUEST, key, code, message);
  }
}
