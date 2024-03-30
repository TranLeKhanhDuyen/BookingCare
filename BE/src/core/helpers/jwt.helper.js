import express from 'express';
import jwt from 'jsonwebtoken';
import { userService } from '../../modules/user/user.service';
import { JWT_EXPIRES_IN, JWT_SECRET } from '../config/env-config';
import { UnauthorizeException } from '../exceptions/unauthorize.exception';

export class JwtHelper {
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
    return options?.secret || JWT_SECRET;
  }

  /**
   * @param {JwtSignOptions | undefined} options
   * @returns {string | number | undefined}
   */
  static #getExpiresIn(options) {
    return options?.expiresIn || JWT_EXPIRES_IN;
  }
}
