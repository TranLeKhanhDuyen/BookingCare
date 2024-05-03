import { usePagination } from '@hooks/use-pagination'
import { useGetDoctorAppointments } from './use-get-doctor-appointments'
import AppointmentTable from './appointment-table'
import { Heading } from '@components/common'

const DoctorAppointments = () => {
  const { page, limit, onPageChange } = usePagination()
  const { data, pagination } = useGetDoctorAppointments({ page, limit })

  return (
    <div className='container'>
      <Heading
        variant='h1'
        content='APPOINTMENTS HISTORY'
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
      />
    </div>
  )
}

export default DoctorAppointments
