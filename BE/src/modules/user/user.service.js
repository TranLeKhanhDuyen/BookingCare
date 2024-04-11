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
const getUserById = async (id) => {
  return User.findByPk(id);
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getProfile = async (req, res, next) => {
  try {
    const model = await getUserById(req.user.id);
    res.status(StatusCodes.OK).json(model);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {object} data
 */
const createUser = async (data) => {
  try {
    const hashedPassword = await BcryptHelper.hash(data.password);

    return User.create({ ...data, password: hashedPassword });
  } catch (error) {
    console.log(error);
  }
};

/// delete user by id
const deleteUserById = async (id) => {
  try {
    await User.destroy({ where: { id } });
  } catch (error) {
    console.log(error);
  }
};

/// update user by id
const updateUserById = async (id, data) => {
  try {
    await User.update(data, { where: { id } });
  } catch (error) {
    console.log(error);
  }
};

/**
 * @param {object} pagination
 */
const getDoctorsWithPaging = (pagination) => {
  try {
    return User.findAndCountAll({
      where: {
        role: [USER_ROLE.DOCTOR]
      },
      limit: pagination.limit,
      offset: ApiHelper.getPaginationOffset(pagination)
    });
  } catch (error) {
    console.log(error);
  }
};

// get all users
const getAllUsers = (pagination) => {
  try {
    return User.findAndCountAll({
      where: {
        role: [USER_ROLE.DOCTOR, USER_ROLE.USER]
      },
      limit: pagination.limit,
      offset: ApiHelper.getPaginationOffset(pagination)
    });
  } catch (error) {
    console.log(error);
  }
};

export const userService = {
  getUserByEmail,
  getUserById,
  getProfile,
  createUser,
  getUserByPhoneNumber,
  getDoctorsWithPaging,
  deleteUserById,
  updateUserById,
  getAllUsers
};
