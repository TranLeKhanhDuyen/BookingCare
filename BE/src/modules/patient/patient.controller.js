import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { ApiHelper } from '../../core/helpers/api.helper';
import { Appointment } from '../appointment/appointment.model';
import { User } from '../user/user.model';
import { Patient } from './patient.model';

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
// const createPatient = async (req, res) => {
//   const res = await Patient.create({ ...payload });
//   res.status(StatusCodes.OK).json({ data: res });
// };

const getListPatient = async (req, res) => {
  const pagination = ApiHelper.parsePaging(req.query);

  const data = await Appointment.findAndCountAll({
    where: { doctorId: req.user.id },
    //join with table user
    include: [
      {
        model: User,
        as: 'doctor' // This 'as' must match the alias defined in the association
      },
      {
        model: Patient,
        as: 'patient' // This 'as' must match the alias defined in the association
      }
    ],
    limit: pagination.limit || 99999,
    offset: ApiHelper.getPaginationOffset(pagination)
  });
  res.status(StatusCodes.OK).json({
    items: data.rows,
    pagination: ApiHelper.setPaginationTotal(pagination, data.count)
  });
};

const getDetail = async (req, res) => {
  const data = await Appointment.findByPk(req.params.id, {
    include: [
      {
        model: User,
        as: 'doctor' // This 'as' must match the alias defined in the association
      },
      {
        model: Patient,
        as: 'patient' // This 'as' must match the alias defined in the association
      }
    ]
  });
  res.status(StatusCodes.OK).json(data);
};

const updatePatient = async (req, res) => {
  const data = await Patient.update(req.body, {
    where: { id: req.params.id }
  });
  res.status(StatusCodes.OK).json(data);
};

const deletePatient = async (req, res) => {
  const data = await Patient.destroy({
    where: { id: req.params.id }
  });
  res.status(StatusCodes.OK).json(data);
};

export const patientController = {
  getListPatient,
  getDetail,
  updatePatient,
  deletePatient
};
