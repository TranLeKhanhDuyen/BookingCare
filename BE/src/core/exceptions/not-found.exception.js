import { StatusCodes } from 'http-status-codes';
import { AppException } from './app.exception';
import { ERROR_CODE } from '../constants/error-code';

export class NotFoundException extends AppException {
  /**
   * @param {string} key
   */
  constructor(key) {
    super(StatusCodes.NOT_FOUND, key, ERROR_CODE.NOT_FOUND, `${key} not found`);
  }
}
