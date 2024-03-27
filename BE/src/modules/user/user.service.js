import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

// TODO(duyen)
async function getUserByEmail(email) {
  return null;
}

// TODO(duyen)
async function getUserById(id) {
  return null;
}

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
async function getProfile(req, res, next) {
  // TODO(duyen)
  res.status(StatusCodes.OK).json(req.user);
}

export const userService = {
  getUserByEmail,
  getUserById,
  getProfile
};
