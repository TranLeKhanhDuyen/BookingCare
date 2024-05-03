import { Heading } from "@components/common"
import AppointmentTable from '../doctor-appointments/appointment-table'
import { usePagination } from '@hooks/use-pagination'
import { useGetAppointmentsSchedule } from './use-get-appointments-schedule'
import UpdateAppointmentModal from './update-appointment-modal'
import { useState } from 'react'
import { Appointment } from '@services/models/appointment'
import { useToggle } from "@hooks/use-toggle"

const DoctorSchedule = () => {
  const { page, limit, onPageChange } = usePagination()
  const { data, pagination } = useGetAppointmentsSchedule({ page, limit })
  const [openModal, toggleModal] = useToggle()
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment>()

  return (
    <div className='container'>
      <Heading
        variant='h1'
        content='APPOINTMENTS SCHEDULE'
        className='text-3xl text-turquoise'
        style={{
          margin: '30px 0',
          textAlign: 'center',
          color: 'var(--turquoise-color)',
          fontSize: 'var(--font-3xl)'
        }}
      />
      <AppointmentTable
        appointments={data}
        pagination={pagination}
        onPageChange={onPageChange}
        onEdit={(appointment) => {
          setSelectedAppointment(appointment)
          toggleModal()
        }}
      />
      {openModal && selectedAppointment && (
        <UpdateAppointmentModal
          appointment={selectedAppointment!}
          onClose={toggleModal}
        />
      )}
    </div>
  )
}

export default DoctorSchedule
