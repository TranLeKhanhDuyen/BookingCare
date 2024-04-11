import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { ERROR_CODE } from '../../core/constants/error-code';
import { BadRequestException } from '../../core/exceptions/bad-request.exception';
import { NotFoundException } from '../../core/exceptions/not-found.exception';
import { BcryptHelper } from '../../core/helpers/bcrypt.helper';
import { JwtHelper } from '../../core/helpers/jwt.helper';
import { userService } from '../user/user.service';

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userService.getUserByEmail(email);

  if (!user) return next(new NotFoundException('User'));

  const isValidPassword = await BcryptHelper.verifyHash(
    password,
    user.password
  );
  if (!isValidPassword) {
    return next(
      new BadRequestException(
        'User',
        ERROR_CODE.INVALID_PASSWORD,
        'Invalid password'
      )
    );
  }

  res.status(StatusCodes.OK).json(await signAuthResponse(user));
};

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const signUp = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existedUser = await userService.getUserByEmail(email);

    if (existedUser) {
      return next(
        new BadRequestException(
          'User',
          ERROR_CODE.EMAIL_ALREADY_EXISTS,
          'Email already exists'
        )
      );
    }

    const hashedPassword = await BcryptHelper.hash(password);
    const user = await userService.createUser({
      ...req.body,
      // role: USER_ROLE.DOCTOR,
      password: hashedPassword
    });

    res.status(StatusCodes.OK).json(await signAuthResponse(user));
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const signAuthResponse = (user) => {
  try {
    return {
      user: user,
      accessToken: JwtHelper.sign({ id: user.id })
    };
  } catch (error) {
    console.log(error);
  }
};

export const authService = {
  signIn,
  signUp
};
