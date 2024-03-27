import { Request, Response, NextFunction } from 'express';
import { ERROR_CODE } from '../constants/error-code';
import { AppException } from '../exceptions/app.exception';
import { StatusCodes } from 'http-status-codes';

export class ExceptionHandler {
  static notFoundHandler(express) {
    /**
     * @param {Request} req
     * @param {Response} res
     */
    express.use('*', (req, res) => {
      return res.status(StatusCodes.NOT_FOUND).json({
        code: ERROR_CODE.NOT_FOUND,
        message: 'Resource not found'
      });
    });

    return express;
  }

  /**
   * @param {Error} error
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   * @example
   * ```js
   * {
   *   code: 'NOT_FOUND',
   *   message: 'User not found'
   * }
   * ```
   */
  static errorHandler(error, req, res, next) {
    if (error instanceof AppException) {
      return res.status(error.httpStatus).json(error.getError());
    } else if (error['type'] === 'entity.parse.failed') {
      return res.status(StatusCodes.BAD_REQUEST).send({
        code: ERROR_CODE.DATA_REQUEST_INVALID_FORMAT,
        message: 'Body payload invalid format'
      });
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      code: ERROR_CODE.INTERNAL_SERVER_ERROR,
      message: 'Internal server error'
    });
  }
}
