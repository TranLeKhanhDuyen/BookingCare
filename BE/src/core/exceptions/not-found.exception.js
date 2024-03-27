import { StatusCodes } from 'http-status-codes';
import { AppException } from './app.exception';

export class NotFoundException extends AppException {
  /**
   * @param {string} key
   * @param {string} code
   * @param {string} message
   */
  constructor(key, code, message) {
    super(StatusCodes.NOT_FOUND, key, code, message);
  }
}
