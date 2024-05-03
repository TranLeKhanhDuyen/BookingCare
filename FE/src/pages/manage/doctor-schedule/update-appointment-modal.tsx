import { Button, Heading } from '@components/common'
import { Appointment } from '@services/models/appointment'
import { FC } from 'react'
import { useUpdateAppointment } from './use-update-appointment'
import { RHFSelect } from '@components/HookFormFields/Select'
import { AppointmentStatus } from '@services/models/appointment-status'
import { RHFTextField } from '@components/HookFormFields/RHFTextField'
import { FormProvider } from '@components/HookFormFields/FormProvider'

export interface UpdateAppointmentModalProps {
  appointment: Appointment
  onClose: VoidFunction
}

const UpdateAppointmentModal: FC<UpdateAppointmentModalProps> = ({
  appointment,
  onClose
}) => {
  const { methods, handleUpdate } = useUpdateAppointment(appointment, onClose)
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods
  return (
    <div className='overlay'>
      <FormProvider methods={methods} onSubmit={handleSubmit(handleUpdate)}>
        <div className='booking-form'>
          <Heading content='Update Appointment' />
          <RHFSelect name='status' label='Status'>
            {Object.values(AppointmentStatus).map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </RHFSelect>
          <RHFTextField
            name='diagnosis'
            label='Diagnosis'
            placeholder='Diagnosis'
          />
          <RHFTextField
            name='prescription'
            label='Prescription'
            placeholder='Prescription'
          />
          <RHFTextField
            name='description'
            label='Description'
            placeholder='Description'
          />

          <div style={{ marginLeft: 'auto' }}>
            <Button
              title='Cancel'
              type='button'
              onClick={onClose}
              style={{ marginRight: 16 }}
            />
            <Button
              title='Submit'
              disabled={isSubmitting}
              type='submit'
              variant='secondary'
            />
          </div>
        </div>
      </FormProvider>
    </div>
  )
}

export default UpdateAppointmentModal
