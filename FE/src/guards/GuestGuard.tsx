import Loading from '@components/Loading'
import { UserRole } from '@services/models/user-role'
import { useAuthStore } from '@store/auth-store'
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export const GuestGuard = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isInitialized, user } = useAuthStore()

  if (!isInitialized) return <Loading />

  if (isAuthenticated && user?.role) {
    if (
      user.role === UserRole.ADMIN ||
      user.role === UserRole.SUPER_ADMIN ||
      user.role === UserRole.DOCTOR
    ) {
      return <Navigate to='/manage' replace />
    }
    return <Navigate to='/' />
  }

  return <>{children}</>
}
