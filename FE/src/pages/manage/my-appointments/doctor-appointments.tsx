import { usePagination } from '@hooks/use-pagination'
import { useGetMyAppointments } from './use-get-my-appointments'
import { Heading } from '@components/common'
import AppointmentTable from '../doctor-appointments/appointment-table'

const MyAppointments = () => {
  const { page, limit, onPageChange } = usePagination()
  const { data, pagination } = useGetMyAppointments({ page, limit })

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

export default MyAppointments
