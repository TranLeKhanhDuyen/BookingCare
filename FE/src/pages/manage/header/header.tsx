import { OptionList } from '@components/common'
import { UserRole } from '@services/models/user-role'
import './header.css'
import { useAuthStore } from '@store/auth-store'

interface IHeaderManageProps {
  onSelectOption?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  selectedOption?: string
  role?: UserRole
}

const HeaderManage = ({
  onSelectOption,
  selectedOption
}: IHeaderManageProps) => {
  const { signOut, user } = useAuthStore()

  const getUserRole = (): UserRole | undefined => {
    return user?.role
  }

  const optionsForRole = (): { value: string }[] => {
    const role = getUserRole()
    switch (role) {
      case UserRole.ADMIN:
      case UserRole.SUPER_ADMIN:
        return [{ value: 'Tất cả người dùng' }, { value: 'Tạo người dùng' }]
      case UserRole.DOCTOR:
        return [{ value: 'Danh sách lịch hẹn' }]
      default:
        return []
    }
  }

  return (
    <header className='header-manage-container'>
      <nav className='text-white header-manage'>
        <div className='nav-left'>
          <OptionList
            className='optionlist'
            items={optionsForRole()}
            onChange={onSelectOption}
            value={selectedOption}
          />
        </div>
        <div className='nav-right'>
          <span>
            Welcome {user?.firstName} {user?.lastName}
          </span>
          <button className='cursor logout-manage' onClick={signOut}></button>
        </div>
      </nav>
    </header>
  )
}

export default HeaderManage
