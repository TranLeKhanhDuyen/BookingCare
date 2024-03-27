import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { userService } from '../../modules/user/user.service';
import { ENV_CONFIG } from '../config/env-config';
import { UnauthorizeException } from '../exceptions/unauthorize.exception';

export class JwtHelper {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   * @returns
   */
  static async authMiddleware(req, res, next) {
    try {
      const authorization = req.headers.authorization;
      if (!authorization) return next(new UnauthorizeException());

      const token = authorization.replace(/^Bearer\s+/, '');
      const data = JwtHelper.verify(token);
      if (!data?.id) return next(new UnauthorizeException());

      const user = await userService.getUserById(data.id);
      if (!user) return next(new UnauthorizeException());

      req.user = user;
      req.jwtToken = token;
      next();
    } catch (e) {
      next(e);
    }
  }

  /**
   * ```ts
   * interface JwtSignOptions extends SignOptions {
   *   secret?: string | Buffer;
   *   privateKey?: string | Buffer;
   * }
   * ```
   */

  /**
   * @param {string | Buffer | object} payload
   * @param {JwtSignOptions | undefined} options
   * ```js
   * {
   *   secret?: string | Buffer;
   *   privateKey?: string | Buffer;
   * }
   * ```
   */
  static sign(payload, options) {
    const secret = this.#getSecretKey(options);

    return jwt.sign(payload, secret, {
      ...options,
      expiresIn: this.#getExpiresIn(options)
    });
  }

  /**
   * @param {string} token
   * @param {object | undefined} options
   * ```js
   * {
   *   secret?: string | Buffer;
   *   privateKey?: string | Buffer;
   * }
   * ```
   * @returns {Record<string, unknown>}
   */
  static verify(token, options) {
    const secret = this.#getSecretKey(options);

    return jwt.verify(token, secret, options);
  }

  /**
   * @param {string} token
   * @param {jwt.DecodeOptions | undefined} options
   * @returns
   */
  static decode(token, options) {
    return jwt.decode(token, options);
  }

  /**
   * @param {JwtVerifyOptions | JwtSignOptions | undefined} options
   * @returns {string | Buffer | jwt.Secret}
   */
  static #getSecretKey(options) {
    return options?.secret || ENV_CONFIG.JWT_SECRET;
  }

  /**
   * @param {JwtSignOptions | undefined} options
   * @returns {string | number | undefined}
   */
  static #getExpiresIn(options) {
    return options?.expiresIn || ENV_CONFIG.JWT_EXPIRES_IN;
  }
}
