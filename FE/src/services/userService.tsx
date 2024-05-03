import axios from '../axios'
import { Appointment } from './models/appointment'
import { AppointmentStatus } from './models/appointment-status'
import { User } from './models/user'
import { GetListParams } from './requests/get-list-request'
import { GetListResponse } from './responses/get-list-reponse'

export const handleLoginApi = (email: string, password: string) => {
  return axios.post('/api/login', { email, password })
}

export const getAllUsers = (inputId: string) => {
  return axios.get(`/api/get-all-users?id=${inputId}`)
}

export const CreateNewUserServiceAPI = (data: string) => {
  return axios.post('/api/create-new-user', data)
}

export const DeleteUserServiceAPI = (userId: string) => {
  return axios.delete('/api/delete-user', {
    data: {
      id: userId
    }
  })
}

export const EditUserServiceAPI = (dataEdit: string) => {
  return axios.put('/api/edit-user', dataEdit)
}

const getProfile = async (): Promise<User> => {
  return axios.get(`/api/v1/users/me`)
}

const getDoctors = async (
  params: GetListParams
): Promise<GetListResponse<User>> => {
  return axios.get(`/api/v1/doctors`, { params })
}

const getDoctorDetails = (id: number): Promise<User> => {
  return axios.get(`/api/v1/doctors/${id}`)
}

export interface GetDoctorAppointmentsParams extends GetListParams {
  status?: AppointmentStatus
}

const getDoctorAppointments = async (
  id: number,
  params: GetDoctorAppointmentsParams
): Promise<GetListResponse<Appointment>> => {
  return axios.get(`/api/v1/doctors/${id}/appointments`, { params })
}

const getDoctorAppointmentsSchedule = async (
  params: GetDoctorAppointmentsParams
): Promise<GetListResponse<Appointment>> => {
  return axios.get(`/api/v1/doctors/appointments/schedule`, { params })
}

const getMyAppointments = async (
  params: GetDoctorAppointmentsParams
): Promise<GetListResponse<Appointment>> => {
  return axios.get(`/api/v1/doctors/appointments`, { params })
}

export const userService = {
  getProfile,
  getDoctors,
  getDoctorDetails,
  getMyAppointments,
  getDoctorAppointments,
  getDoctorAppointmentsSchedule
}
