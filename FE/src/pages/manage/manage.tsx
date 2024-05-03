import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Headermanage from './header/header'

const Manage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('')
  const navigate = useNavigate()

  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = event.target.value
    setSelectedOption(optionValue)

    switch (optionValue) {
      case 'Tạo người dùng':
        navigate('/manage/create-users')
        break
      case 'Tất cả người dùng':
        navigate('/manage/all-users')
        break
      case 'Danh sách lịch hẹn':
        navigate('/manage/doctors/me/appointments')
        break
      case 'Danh sách lịch khám của bác sĨ':
        navigate('doctor-examination-schedule/create')
        break
      default:
        break
    }
  }

  return (
    <>
      <Headermanage
        onSelectOption={handleSelectOption}
        selectedOption={selectedOption}
        role={JSON.parse(localStorage.getItem('user') || '{}').role}
      />
      <Outlet />
    </>
  )
}

export default Manage
