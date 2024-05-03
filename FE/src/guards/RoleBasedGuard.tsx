import HeaderManage from '@pages/manage/header/header'
import { UserRole } from '@services/models/user-role'
import { useAuthStore } from '@store/auth-store'
import { ReactNode } from 'react'

export interface RoleBasedGuardProps {
  accessibleRoles: Array<UserRole>
  children: ReactNode
}

export const RoleBasedGuard = ({
  children,
  accessibleRoles
}: RoleBasedGuardProps) => {
  const { user } = useAuthStore()
  if (!user) {
    return <></>
  }

  if (accessibleRoles.includes(user?.role)) {
    return <>{children}</>
  }
  return (
    <>
      <HeaderManage />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div>
          Permission Denied
          <br />
          You do not have permission to access this page
        </div>
      </div>
    </>
  )
}
