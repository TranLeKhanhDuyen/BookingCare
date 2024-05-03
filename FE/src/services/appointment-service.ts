import axiosInstance from '@axios'
import { CreateAppointmentRequest } from './requests/create-appointment-request'
import { UpdateAppointmentRequest } from './requests/update-appointment-request'
import { removeFalsy } from '@utils/object'

const create = async (data: CreateAppointmentRequest) => {
  return axiosInstance.post('/api/v1/appointments', data)
}

const updateAppointment = async (
  patientId: number,
  data: UpdateAppointmentRequest
) => {
  return axiosInstance.put(
    `/api/v1/appointments/${patientId}`,
    removeFalsy(data)
  )
}

export const appointmentService = { create, updateAppointment }
