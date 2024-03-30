import { ApiHelper } from '../../core/helpers/api.helper';
import { Patient } from '../patient/patient.model';
import { Appointment } from './appointment.model';

/**
 * @param {object} data
 */
async function createAppointment(data) {
  const patient = await Patient.create({
    fullName: data.fullName,
    email: data.email,
    phoneNumber: data.phoneNumber
  });
  return Appointment.create({
    doctorId: data.doctorId,
    patientId: patient.id,
    date: data.date
  });
}

/**
 * @param {number} doctorId
 * @param {object} pagination
 */
async function getAppointmentsByDoctorWithPaging(doctorId, status, pagination) {
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
}

/**
 * @param {number} patientId
 * @param {object} data
 */
async function updateAppointment(patientId, data) {
  return Appointment.update(data, {
    where: { patientId }
  });
}

/**
 * @param {number} patientId
 */
async function appointmentByPatientId(patientId) {
  return Appointment.findOne({ where: { patientId } });
}

export const appointmentService = {
  createAppointment,
  updateAppointment,
  appointmentByPatientId,
  getAppointmentsByDoctorWithPaging
};
