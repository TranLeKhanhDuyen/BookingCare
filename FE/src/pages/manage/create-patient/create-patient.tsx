import PatientForm from '@components/PatientForm/PatientForm'
import { Heading } from '@components/common'
import { createPatient } from '@services/patientService'
import { useNavigate } from 'react-router-dom'
import './create-user.css'

const CreatePatient = () => {
  const navigate = useNavigate()
  const handleSubmit = (value: any) => {
    createPatient(value).then(() =>
      navigate('/manage/patients')
    )
  }

  return (
    <>
      <Heading className='allusers' variant='h1' content='TẠO LỊCH KHÁM' />
      <PatientForm onSubmit={handleSubmit} mode='create' />
    </>
  )
}

export default CreatePatient
