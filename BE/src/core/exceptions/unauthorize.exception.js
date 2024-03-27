import { StatusCodes } from 'http-status-codes';
import { AppException } from './app.exception';
import { ERROR_CODE } from '../constants/error-code';

export class UnauthorizeException extends AppException {
  constructor() {
    super(
      StatusCodes.UNAUTHORIZED,
      'Authorization',
      ERROR_CODE.UNAUTHORIZED,
      'Unauthorized'
    );
  }
}
