export interface CreateAppointmentRequest {
  fullName: string
  email?: string
  phoneNumber: string
  dob: Date
  date: Date
  reasonForMedicalExam: string
  doctorId: number
}
