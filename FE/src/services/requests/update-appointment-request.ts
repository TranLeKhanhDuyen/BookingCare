export interface UpdateAppointmentRequest {
  status: string // AppointmentStatus
  diagnosis?: string
  prescription?: string
  description?: string
}
