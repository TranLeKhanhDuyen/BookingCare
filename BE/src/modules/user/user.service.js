import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { Model } from 'sequelize';
import { USER_ROLE } from '../../core/constants/user-role';
import { ApiHelper } from '../../core/helpers/api.helper';
import { Appointment } from '../appointment/appointment.model';
import { Specialty } from '../specialty/specialty.model';
import { User } from './user.model';

/**
 * @param {string} email
 * @returns {Promise<Model<User> | undefined>}
 */
async function getUserByEmail(email) {
  return User.findOne({ where: { email } });
}

/**
 * @param {string} phoneNumber
 * @returns {Promise<Model<User> | undefined>}
 */
async function getUserByPhoneNumber(phoneNumber) {
  return User.findOne({ where: { phoneNumber } });
}

/**
 * @param {number} id
 * @returns {Promise<Model<User> | undefined>}
 */
async function getUserById(id) {
  return User.findByPk(id, {
    include: [Specialty]
  });
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
async function getProfile(req, res, next) {
  const model = await getUserById(req.user.id);
  res.status(StatusCodes.OK).json(model);
}

/**
 * @param {object} data
 */
async function createUser(data) {
  return User.create(data);
}

/**
 * @param {object} pagination
 */
async function getDoctorsWithPaging(pagination) {
  return User.findAndCountAll({
    where: {
      role: USER_ROLE.DOCTOR
    },
    limit: pagination.limit,
    offset: ApiHelper.getPaginationOffset(pagination)
  });
}

export const userService = {
  getUserByEmail,
  getUserById,
  getProfile,
  createUser,
  getUserByPhoneNumber,
  getDoctorsWithPaging
};
