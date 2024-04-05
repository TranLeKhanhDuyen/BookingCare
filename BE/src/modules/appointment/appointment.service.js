import { Sequelize, Op } from 'sequelize';
import { ApiHelper } from '../../core/helpers/api.helper';
import { Patient } from '../patient/patient.model';
import { Appointment } from './appointment.model';

/**
 * @param {object} data
 */
const createAppointment = async (data) => {
  const patient = await Patient.create({
    fullName: data.fullName,
    email: data.email,
    phoneNumber: data.phoneNumber,
    dob: data.dob
  });
  return Appointment.create({
    doctorId: data.doctorId,
    patientId: patient.id,
    date: data.date,
    reasonForMedicalExam: data.reasonForMedicalExam
  });
};

/**
 * @param {number} doctorId
 * @param {object} pagination
 */
const getAppointmentsByDoctorWithPaging = async (
  doctorId,
  status,
  pagination
) => {
  const where = { doctorId };
  if (status) where.status = status;

  return Appointment.findAndCountAll({
    where,
    include: [
      Patient
      // {
      //   model: User,
      //   as: 'doctor',
      //   attributes: {
      //     exclude: ['password']
      //   }
      // }
    ],
    limit: pagination.limit,
    offset: ApiHelper.getPaginationOffset(pagination)
  });
};

/**
 * @param {number} doctorId
 * @param {object} pagination
 */
const getAppointmentsScheduleByDoctorWithPaging = async (
  doctorId,
  status,
  pagination
) => {
  const where = {
    doctorId,
    date: {
      [Op.gt]: new Date().toISOString()
    }
  };
  if (status) where.status = status;

  return Appointment.findAndCountAll({
    where,
    include: [Patient],
    limit: pagination.limit,
    offset: ApiHelper.getPaginationOffset(pagination)
  });
};

/**
 * @param {number} patientId
 * @param {object} data
 */
const updateAppointment = async (patientId, data) => {
  return Appointment.update(data, {
    where: { patientId }
  });
};

/**
 * @param {number} patientId
 */
const appointmentByPatientId = (patientId) => {
  return Appointment.findOne({ where: { patientId } });
};

export const appointmentService = {
  createAppointment,
  updateAppointment,
  appointmentByPatientId,
  getAppointmentsByDoctorWithPaging,
  getAppointmentsScheduleByDoctorWithPaging
};
