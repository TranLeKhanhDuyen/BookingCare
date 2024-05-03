import TableCell from '@components/Table/TableCell'
import TableRow from '@components/Table/TableRow'
import IconButton from '@components/common/Button/IconButton'
import { Appointment } from '@services/models/appointment'
import { fDate } from '@utils/time-formatter'
import { FC } from 'react'

export interface AppointmentTableRowProps {
  appointment: Appointment
  onEdit: VoidFunction
}

const AppointmentTableRow: FC<AppointmentTableRowProps> = ({
  appointment,
  onEdit
}) => {
  return (
    <TableRow hover key={appointment.id}>
      <TableCell style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ fontWeight: 'bold' }}>{appointment.patient.fullName}</p>
      </TableCell>
      <TableCell>{appointment.patient.email}</TableCell>
      <TableCell>{appointment.patient.phoneNumber}</TableCell>
      <TableCell>{fDate(appointment.patient.dob)}</TableCell>
      <TableCell>{appointment.reasonForMedicalExam}</TableCell>
      <TableCell>{fDate(appointment.date)}</TableCell>
      <TableCell>{appointment.status}</TableCell>
      <TableCell>{appointment.diagnosis ?? '_'}</TableCell>
      <TableCell>{appointment.prescription ?? '_'}</TableCell>
      <TableCell>{appointment.description ?? '_'}</TableCell>
      <TableCell textAlign='center'>
        <IconButton onClick={onEdit} style={{ marginRight: 8 }}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={20}
            height={20}
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71M16 10.68L13.32 8l1.95-2L18 8.73Z'
            />
          </svg>
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default AppointmentTableRow
