import UserForm from '@components/UserForm/UserForm'
import { Heading } from '@components/common'
import { createUsers } from '@services/usersService'
import { useNavigate } from 'react-router-dom'
import './create-user.css'

const CreateUser = () => {
  const navigate = useNavigate()
  const handleSubmit = (formData: any) => {
    createUsers(formData).then(() => navigate('/manage/all-users'))
  }

  return (
    <>
      <Heading className='allusers' variant='h1' content='TẠO NGƯỜI DÙNG' />
      <UserForm onSubmit={handleSubmit} mode='create' />
    </>
  )
}

export default CreateUser
