import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { ApiHelper } from '../../core/helpers/api.helper';
import { appointmentService } from '../appointment/appointment.service';
import { userService } from './user.service';

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getDoctors = async (req, res) => {
  try {
    const pagination = ApiHelper.parsePaging(req.query);
    const data = await userService.getDoctorsWithPaging(pagination);

    res.status(StatusCodes.OK).json({
      items: data.rows,
      pagination: ApiHelper.setPaginationTotal(pagination, data.count)
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const pagination = ApiHelper.parsePaging(req.query);
    const data = await userService.getAllUsers(pagination);

    res.status(StatusCodes.OK).json({
      items: data.rows,
      pagination: ApiHelper.setPaginationTotal(pagination, data.count)
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getDoctorDetails = async (req, res) => {
  try {
    const doctorDetails = await userService.getUserById(req.params.id);
    res.status(StatusCodes.OK).json(doctorDetails);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getMyAppointments = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getDoctorAppointments = async (req, res) => {
  try {
    const pagination = ApiHelper.parsePaging(req.query);
    const data = await appointmentService.getAppointmentsByDoctorWithPaging(
      parseInt(req.params.doctorId),
      req.query.status,
      pagination
    );

    res.status(StatusCodes.OK).json({
      items: data.rows,
      pagination: ApiHelper.setPaginationTotal(pagination, data.count)
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getMyAppointmentsSchedule = async (req, res) => {
  try {
    const pagination = ApiHelper.parsePaging(req.query);
    const data =
      await appointmentService.getAppointmentsScheduleByDoctorWithPaging(
        req.user.id,
        req.query.status,
        pagination
      );

    res.status(StatusCodes.OK).json({
      items: data.rows,
      pagination: ApiHelper.setPaginationTotal(pagination, data.count)
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

export const doctorController = {
  getDoctors,
  getDoctorDetails,
  getMyAppointments,
  getDoctorAppointments,
  getMyAppointmentsSchedule,
  getAllUsers
};
