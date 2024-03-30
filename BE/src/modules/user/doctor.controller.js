import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { ApiHelper } from '../../core/helpers/api.helper';
import { userService } from './user.service';
import { appointmentService } from '../appointment/appointment.service';

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function getDoctors(req, res) {
  const pagination = ApiHelper.parsePaging(req.query);
  const data = await userService.getDoctorsWithPaging(pagination);

  res.status(StatusCodes.OK).json({
    items: data.rows,
    pagination: ApiHelper.setPaginationTotal(pagination, data.count)
  });
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function getDoctorDetails(req, res) {
  const doctorDetails = await userService.getUserById(req.params.id);
  res.status(StatusCodes.OK).json(doctorDetails);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function getDoctorAppointments(req, res) {
  const pagination = ApiHelper.parsePaging(req.query);
  const data = await appointmentService.getAppointmentsByDoctorWithPaging(
    req.user.id,
    req.query.status,
    pagination
  );

  res.status(StatusCodes.OK).json({
    items: data.rows,
    pagination: ApiHelper.setPaginationTotal(pagination, data.count)
  });
}

export const doctorController = {
  getDoctors,
  getDoctorDetails,
  getDoctorAppointments
};
