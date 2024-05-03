import facebookIcon from '@assets/icons/ic-facebook.svg'
import googleIcon from '@assets/icons/ic-google.svg'
import { ItemLink } from '@components'
import { Button, Heading, Text } from '@components/common'
import { useNavigate } from 'react-router-dom'
import './authen.css'
import { useSignIn } from './use-sign-in'
import { FormProvider } from '@components/HookFormFields/FormProvider'
import { RHFTextField } from '@components/HookFormFields/RHFTextField'

const Login = () => {
  const navigate = useNavigate()
  const { handleSignIn, methods } = useSignIn()
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods

  return (
    <div className='authen-background'>
      <div className='authen-container sign-in-container'>
        <Heading
          variant='h1'
          content='ĐĂNG NHẬP'
          style={{
            fontSize: 'var(--font-5xl)',
            textAlign: 'center',
            color: 'var(--turquoise-color)'
          }}
        />

        <FormProvider methods={methods} onSubmit={handleSubmit(handleSignIn)}>
          <RHFTextField name='email' label='Email' placeholder='Email' />
          <br />
          <RHFTextField
            name='password'
            label='Password'
            type='password'
            placeholder='Mật khẩu'
          />
          <br />
          <Button
            disabled={isSubmitting}
            title='Đăng nhập'
            type='submit'
            variant='secondary'
            additionalClass='sign-in'
            style={{ width: '100%' }}
          />
        </FormProvider>

        <Text
          className='forgot-password'
          content='Quên mật khẩu?'
          style={{ textAlign: 'center' }}
        />

        <Button
          title='Đăng ký tài khoản'
          variant='primary'
          additionalClass='register'
          onClick={() => {
            navigate('/auth/register')
          }}
        />

        <Text className='option-text' content='Hoặc đăng nhập với:' />

        <div className='afternative-login'>
          <ItemLink
            path='#'
            additionalClass='login-google'
            image={facebookIcon}
          />
          <ItemLink
            path='#'
            additionalClass='login-facebook'
            image={googleIcon}
          />
        </div>
      </div>
    </div>
  )
}

export default Login
