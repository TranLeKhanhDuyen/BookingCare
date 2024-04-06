import express from 'express';
import { clinicService } from './clinic.service';
import { StatusCodes } from 'http-status-codes';

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getClinicDetails = async (req, res) => {
  const clinicDetails = await clinicService.getClinicById(req.params.id);
  res.status(StatusCodes.OK).json(clinicDetails);
};

export const clinicController = { getClinicDetails };
