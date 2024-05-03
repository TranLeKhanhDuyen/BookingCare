import Loading from '@components/Loading'
import { useAuthStore } from '@store/auth-store'
import { ReactNode } from 'react'
import {
  Navigate,
  Outlet,
  useLocation,
  useOutletContext
} from 'react-router-dom'

export const AuthGuard = ({ children }: { children: ReactNode }) => {
  const location = useLocation()
  const ctx = useOutletContext()
  const { isAuthenticated, isInitialized } = useAuthStore()

  if (!isInitialized) return <Loading />

  if (!isAuthenticated)
    return <Navigate to='/auth/login' state={{ from: location }} replace />

  if (children) return <>{children}</>

  return <Outlet context={ctx} />
}
