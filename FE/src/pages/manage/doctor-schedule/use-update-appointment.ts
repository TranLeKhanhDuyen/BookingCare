import { yupResolver } from '@hookform/resolvers/yup'
import { appointmentService } from '@services/appointment-service'
import { Appointment } from '@services/models/appointment'
import { UpdateAppointmentRequest } from '@services/requests/update-appointment-request'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

export const useUpdateAppointment = (
  appointment: Appointment,
  onCloseModal: VoidFunction
) => {
  const schema = Yup.object().shape({
    status: Yup.string().required('Status is required'),
    diagnosis: Yup.string().optional(),
    prescription: Yup.string().optional(),
    description: Yup.string().optional()
  })

  const methods = useForm<UpdateAppointmentRequest>({
    resolver: yupResolver(schema),
    defaultValues: {
      // status: appointment.status,
      diagnosis: appointment.diagnosis ?? '',
      prescription: appointment.prescription ?? '',
      description: appointment.description ?? ''
    }
  })

  const handleUpdate = async (data: UpdateAppointmentRequest) => {
    try {
      await appointmentService.updateAppointment(appointment.patientId, data)
      methods.reset()
      onCloseModal()
      alert('Appointment was updated Successfully')
    } catch (error) {
      console.error(error)
    }
  }

  return { methods, handleUpdate }
}
