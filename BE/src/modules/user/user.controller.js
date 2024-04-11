import { StatusCodes } from 'http-status-codes';
import { userService } from './user.service';

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(StatusCodes.OK).json({ user });
  } catch (error) {
    console.log(error);
  }
};

// get user by id
const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(StatusCodes.OK).json({ user });
  } catch (error) {
    console.log(error);
  }
};

// delete user by id
const deleteUserById = async (req, res) => {
  try {
  const user = await userService.deleteUserById(req.params.id);
  res.status(StatusCodes.OK).json({ user });
  } catch (error) {
    console.log(error);
  }
};

// update user by id
const updateUserById = async (req, res) => {
  try {
  const user = await userService.updateUserById(req.params.id, req.body);
  res.status(StatusCodes.OK).json({ user });
  } catch (error) {
    console.log(error);
  }
};

// get all users
const getAllUsers = async (req, res) => {
  try {
  const users = await userService.getAllUsers();
  res.status(StatusCodes.OK).json({ users });
  } catch (error) {
    console.log(error);
  }
};

export const userController = {
  createUser: createUser,
  getUserById: getUserById,
  deleteUserById: deleteUserById,
  updateUserById: updateUserById,
  getAllUsers: getAllUsers
};
