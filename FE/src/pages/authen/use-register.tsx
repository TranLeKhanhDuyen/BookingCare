import { authService } from '@services/authService'
import { RegisterRequest } from '@services/requests/authRequest'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

// ════════════════════════════════════════════

export const useRegister = () => {
  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email is invalid format')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be more than 6 characters'),
    confirmPassword: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be more than 6 characters'),
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    dob: Yup.date().required('Date of birth is required'),
    gender: Yup.string().required('Gender is required')
  })

  const defaultValues: RegisterRequest = {
    email: '',
    password: '',
    userName: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    dob: '',
    gender: '',
    confirmPassword: ''
  }

  const methods = useForm<RegisterRequest>({
    defaultValues
  })

  const handleRegister = async (data: RegisterRequest) => {}

  return { handleRegister, methods }
}
