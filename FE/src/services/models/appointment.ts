import { AppointmentStatus } from './appointment-status'
import { BaseModel } from './base-model'
import { Patient } from './patient'

export interface Appointment extends BaseModel {
  doctorId: number
  patientId: number
  status: AppointmentStatus
  date: Date
  diagnosis?: string
  prescription?: string
  description?: string
  reasonForMedicalExam: string
  patient: Patient
}
