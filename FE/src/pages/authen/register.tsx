import { FormProvider } from '@components/HookFormFields/FormProvider'
import { Button, Heading } from '@components/common'
import { useRegister } from './use-register'
import { authService } from '@services/authService'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const { methods } = useRegister()

  const {
    handleSubmit,
    formState: { isSubmitting },
    register
  } = methods
  const navigate = useNavigate()

  const onSubmit = (data: any) => {
    authService.registerApi(data).then(() => navigate('/auth/login'))
  }
  return (
    <div className='authen-background'>
      <div className='authen-container register-container'>
        <Heading
          variant='h1'
          content='ĐĂNG KÝ'
          style={{
            fontSize: 'var(--font-5xl)',
            textAlign: 'center',
            color: 'var(--turquoise-color)'
          }}
        />
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='lastName'>Họ</label>
            <input
              type='text'
              placeholder='Nhập tên của bạn'
              required
              {...register('lastName')}
              id='lastName'
              className='firstName text-field'
            />
          </div>
          <div>
            <label htmlFor='firstName'>Tên</label>
            <input
              type='text'
              placeholder='Nhập họ của bạn'
              {...register('firstName')}
              required
              id='firstName'
              className='firstName text-field'
            />
          </div>
          <div>
            <label htmlFor='email'>Nhập Email</label>
            <input
              type='email'
              className='email text-field'
              placeholder='Nhập email của bạn'
              {...register('email')}
            />
          </div>
          <div>
            <label htmlFor='address'>Địa chỉ</label>
            <input
              type='text'
              className='address text-field'
              placeholder='Nhập địa chỉ của bạn'
              {...register('address')}
            />
          </div>
          <div>
            <label htmlFor='phoneNumber'>Số điện thoại</label>
            <input
              type='number'
              placeholder='Nhập số điện thoại của bạn'
              {...register('phoneNumber')}
              required
              id='phoneNumber'
              className='phoneNumber text-field'
            />
          </div>
          <div>
            <label htmlFor='dob'>Ngày sinh</label>
            <input
              type='date'
              {...register('dob')}
              required
              id='dob'
              className='dob text-field'
            />
          </div>

          <div>
            <label htmlFor='password'>{'Đặt mật khẩu'}</label>
            <input
              type='password'
              className='password text-field'
              placeholder='Nhập số mật khẩu của bạn'
              {...register('password')}
            />
          </div>
          <div>
            <label htmlFor='address'>{'Xác nhận mật khẩu'}</label>
            <input
              type='password'
              className='password text-field'
              placeholder='Nhập lại mật khẩu của bạn'
              {...register('confirmPassword')}
            />
          </div>
          <div className='gender'>
            <label htmlFor='gender'>Giới tính</label>
            <select
              {...register('gender')}
              style={{
                padding: '10px',
                border: '1px solid var(--gray-color)',
                borderRadius: '5px',
                width: '100%',
                margin: '15px 0'
              }}
              defaultValue={1}
            >
              <option value={1}>Nam</option>
              <option value={2}>Nữ</option>
            </select>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20px'
            }}
          >
            <Button
              disabled={isSubmitting}
              title='Đăng ký'
              variant='secondary'
              additionalClass='register'
            />
          </div>
        </FormProvider>
      </div>
    </div>
  )
}

export default Register
