import { StatusCodes } from 'http-status-codes';
import { AppException } from './app.exception';
import { ERROR_CODE } from '../constants/error-code';

export class ForbiddenException extends AppException {
  constructor() {
    super(
      StatusCodes.FORBIDDEN,
      'Forbidden',
      ERROR_CODE.FORBIDDEN,
      'Forbidden'
    );
  }
}
