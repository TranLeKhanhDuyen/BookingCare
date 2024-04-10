import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { Model } from 'sequelize';
import { USER_ROLE } from '../../core/constants/user-role';
import { ApiHelper } from '../../core/helpers/api.helper';
import { BcryptHelper } from '../../core/helpers/bcrypt.helper';
import { Clinic } from '../clinic/clinic.model';
import { Specialty } from '../specialty/specialty.model';
import { User } from './user.model';

/**
 * @param {string} email
 * @returns {Promise<Model<User> | undefined>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({ where: { email } });
};

/**
 * @param {string} phoneNumber
 * @returns {Promise<Model<User> | undefined>}
 */
const getUserByPhoneNumber = (phoneNumber) => {
  return User.findOne({ where: { phoneNumber } });
};

/**
 * @param {number} id
 * @returns {Promise<Model<User> | undefined>}
 */
const getUserById = (id) => {
  return User.findByPk(id, {
    attributes: {
      exclude: ['clinicId', 'specialtyId']
    },
    include: [
      Specialty,
      {
        model: Clinic,
        as: 'clinic',
        attributes: {
          exclude: 'doctorId'
        }
      }
    ]
  });
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getProfile = async (req, res, next) => {
  const model = await getUserById(req.user.id);
  res.status(StatusCodes.OK).json(model);
};

/**
 * @param {object} data
 */
const createUser = async (data) => {
  const hashedPassword = await BcryptHelper.hash(data.password);

  return User.create({ ...data, password: hashedPassword });
};

/**
 * @param {object} pagination
 */
const getDoctorsWithPaging = (pagination) => {
  return User.findAndCountAll({
    where: {
      role: USER_ROLE.DOCTOR
    },
    attributes: {
      exclude: ['clinicId', 'specialtyId']
    },
    include: [
      Specialty,
      {
        model: Clinic,
        as: 'clinic',
        attributes: {
          exclude: 'doctorId'
        }
      }
    ],
    limit: pagination.limit,
    offset: ApiHelper.getPaginationOffset(pagination)
  });
};

export const userService = {
  getUserByEmail,
  getUserById,
  getProfile,
  createUser,
  getUserByPhoneNumber,
  getDoctorsWithPaging
};
