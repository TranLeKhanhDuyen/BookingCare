import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ERROR_CODE } from '../../core/constants/error-code';
import { BadRequestException } from '../../core/exceptions/bad-request.exception';
import { NotFoundException } from '../../core/exceptions/not-found.exception';
import { BcryptHelper } from '../../core/helpers/bcrypt.helper';
import { JwtHelper } from '../../core/helpers/jwt.helper';
import { userService } from '../user/user.service';

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
async function signIn(req, res, next) {
  const { email, password } = req.body;
  const user = await userService.getUserByEmail(email);

  if (!user) {
    return next(
      new NotFoundException('User', ERROR_CODE.NOT_FOUND, 'User not found')
    );
  }

  const isValidPassword = BcryptHelper.verifyHash(password, user.password);
  if (!isValidPassword) {
    return next(
      new BadRequestException('User', 'PASSWORD', 'Invalid password')
    );
  }

  // TODO(duyen)
  return res.status(StatusCodes.OK).json({
    status: 'OK'
  });
}

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export default async function signUp(req, res, next) {
  const { email, password } = req.body;

  const accessToken = JwtHelper.sign({
    email,
    id: email,
    password
  });

  // TODO(duyen)
  res.status(StatusCodes.OK).json({
    accessToken
  });
}

export const authService = {
  signIn,
  signUp
};
