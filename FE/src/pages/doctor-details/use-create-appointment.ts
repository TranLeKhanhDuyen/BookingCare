import { yupResolver } from '@hookform/resolvers/yup'
import { appointmentService } from '@services/appointment-service'
import { CreateAppointmentRequest } from '@services/requests/create-appointment-request'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import * as Yup from 'yup'

export const useCreateAppointment = (onCloseModal: VoidFunction) => {
  const { id } = useParams()
  const schema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Email is invalid format'),
    phoneNumber: Yup.string().required('Phone number is required'),
    dob: Yup.date().required('Date of birth is required'),
    date: Yup.date().required('Date is required'),
    reasonForMedicalExam: Yup.string().required(
      'Reason for Medical examination is required'
    )
  })

  const methods = useForm<Omit<CreateAppointmentRequest, 'doctorId'>>({
    resolver: yupResolver(schema)
  })

  const handleCreateAppointment = async (
    data: Omit<CreateAppointmentRequest, 'doctorId'>
  ) => {
    try {
      await appointmentService.create({ ...data, doctorId: parseInt(id!) })
      methods.reset()
      onCloseModal()
      alert('Appointment was created Successfully')
    } catch (error) {
      console.error(error)
    }
  }

  return { methods, handleCreateAppointment }
}
