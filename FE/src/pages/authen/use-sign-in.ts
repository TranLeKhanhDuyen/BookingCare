import { authService } from '@services/authService'
import { SignInRequest } from '@services/requests/authRequest'
import { useAuthStore } from '@store/auth-store'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

// ════════════════════════════════════════════

export const useSignIn = () => {
  const signInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email is invalid format')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be more than 6 characters')
  })

  const defaultValues: SignInRequest = {
    email: '',
    password: ''
  }

  const methods = useForm<SignInRequest>({
    resolver: yupResolver(signInSchema),
    defaultValues
  })

  const handleSignIn = async (data: SignInRequest) => {
    try {
      const { user } = await authService.signIn(data)
      useAuthStore.setState({ user, isAuthenticated: true })
    } catch (error) {
      console.error(error)
    }
  }

  return { handleSignIn, methods }
}
