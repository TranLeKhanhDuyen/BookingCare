import express from 'express';
import { userService } from '../../modules/user/user.service';
import { USER_ROLE } from '../constants/user-role';
import { ForbiddenException } from '../exceptions/forbidden.exception';
import { UnauthorizeException } from '../exceptions/unauthorize.exception';
import { NotFoundException } from '../exceptions/not-found.exception';
import { JwtHelper } from './jwt.helper';
import { appointmentService } from '../../modules/appointment/appointment.service';
import { ERROR_CODE } from '../constants/error-code';

export class AuthHelper {
  /**
   *
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
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
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  static canModifyUser(req, res, next) {
    const user = req.user;
    if ([USER_ROLE.SUPER_ADMIN, USER_ROLE.ADMIN].includes(user.role)) {
      return next();
    }

    return next(new ForbiddenException());
  }

  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  static async canModifyAppointment(req, res, next) {
    const user = req.user;
    const appointment = await appointmentService.appointmentByPatientId(
      req.params.patientId
    );

    if (!appointment) return next(new NotFoundException('Appointment'));
    if ([USER_ROLE.SUPER_ADMIN, USER_ROLE.ADMIN].includes(user.role)) {
      return next();
    }

    if (USER_ROLE.DOCTOR === user.role && appointment.doctorId === user.id) {
      return next();
    }

    return next(new ForbiddenException());
  }

  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  static doctorMiddleware(req, res, next) {
    if (USER_ROLE.DOCTOR === req.user.role) return next();

    return next(new ForbiddenException());
  }
}
