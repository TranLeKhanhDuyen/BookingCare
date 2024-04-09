import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { Patient } from './patient.model';

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const createPatient = async (req, res) => {
  const res = await Patient.create({ ...payload });
  res.status(StatusCodes.OK).json({ data: res });
};

export const doctorController = {
  createPatient
};
