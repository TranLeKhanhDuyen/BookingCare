import express from 'express';
import { appointmentService } from './appointment.service';
import { StatusCodes } from 'http-status-codes';

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const createAppointment = async (req, res) => {
  const data = await appointmentService.createAppointment(req.body);
  res.status(StatusCodes.CREATED).json(data);
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const updateAppointment = async (req, res) => {
  await appointmentService.updateAppointment(req.params.patientId, req.body);
  res.status(StatusCodes.OK).json();
};

export const appointmentController = { createAppointment, updateAppointment };
