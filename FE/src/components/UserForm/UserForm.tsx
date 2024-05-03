import { AvatarUpload } from '@components'
import { Button } from '@components/common'
import { getDetailUsers } from '@services/usersService'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './UserForm.css'

interface IUserFormProps {
  onSubmit: (formData: FormData) => void
  onClose?: () => void
  mode?: any
  heading?: string
  dataEdit?: any
}

const UserForm = ({
  onClose,
  mode,
  onSubmit: handleSubmitProps,
  dataEdit
}: IUserFormProps) => {
  const [avatar, setAvatar] = useState<File | null>(null)
  const { register, handleSubmit, setValue } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if (!dataEdit) return
    getDetailUsers(dataEdit?.id).then((res) => {
      setValue('firstName', res.firstName)
      setValue('lastName', res.lastName)
      setValue('email', res.email)
      setValue('phoneNumber', res.phoneNumber)
      setValue('role', res.role)
      setValue('address', res.address)
      setValue('password', res.password)
      setValue('dob', res.dob)
      setValue('gender', res.gender)
      setAvatar(res.avatar)
    })
  }, [setValue])

  const onSubmit = (data: any) => {
    handleSubmitProps({
      ...data,
      avatar: '',
      role: data.role === '1' ? 'DOCTOR' : 'USER'
    })
  }

  return (
    <form
      className='container form-create-user'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor='lastName'>Họ</label>
        <input
          type='text'
          placeholder='Họ'
          required
          {...register('lastName')}
          id='lastName'
        />
      </div>
      <div>
        <label htmlFor='firstName'>Tên</label>
        <input
          type='text'
          placeholder='Tên'
          {...register('firstName')}
          required
          id='firstName'
        />
      </div>
      <div>
        <label htmlFor='email'>Nhập Email</label>
        <input
          type='email'
          placeholder='Nhập Email'
          {...register('email')}
          required
          id='email'
        />
      </div>
      <div>
        <label htmlFor='phoneNumber'>Số điện thoại liên hệ</label>
        <input
          type='number'
          placeholder='Số điện thoại liên hệ'
          {...register('phoneNumber')}
          required
          id='phoneNumber'
        />
      </div>
      <div>
        <label htmlFor='password'>Nhập mật khẩu</label>
        <input
          type='password'
          placeholder='Nhập mật khẩu'
          {...register('password')}
          required
          id='password'
        />
      </div>
      <div>
        <label htmlFor='dob'>Ngày sinh</label>
        <input type='date' {...register('dob')} required id='dob' />
      </div>
      <div>
        <label htmlFor='address'>Địa chỉ</label>
        <input
          type='text'
          placeholder='Địa chỉ'
          required
          id='address'
          {...register('address')}
        />
      </div>
      <div>
        <label htmlFor='gender'>Giới tính</label>
        <select {...register('gender')} defaultValue={1}>
          <option value={1}>Nam</option>
          <option value={2}>Nữ</option>
        </select>
      </div>
      <div>
        <label htmlFor='role'>Phân quyền</label>
        <select {...register('role')} defaultValue={1}>
          <option value={1}>Bác sĩ</option>
          <option value={2}>Bệnh nhân</option>
        </select>
      </div>
      <div>
        <label htmlFor='avatar'>Avatar</label>
        <AvatarUpload onAvatarSelect={setAvatar} />
      </div>

      {mode === 'create' ? (
        <Button
          variant='secondary'
          additionalClass='create-user'
          title='Tạo'
          style={{ padding: '10px' }}
          type='submit'
        />
      ) : (
        <>
          <Button
            variant='primary'
            additionalClass='close-form'
            onClick={() => onClose?.() || navigate(-1)}
            title='Đóng form'
            style={{ width: '40%' }}
          />
          <Button
            type='submit'
            variant='secondary'
            additionalClass='update-user'
            title='Cập nhật'
            style={{ width: '40%' }}
          />
        </>
      )}
    </form>
  )
}

export default UserForm
