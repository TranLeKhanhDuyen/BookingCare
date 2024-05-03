import TableCell from '@components/Table/TableCell'
import TableRow from '@components/Table/TableRow'
import IconButton from '@components/common/Button/IconButton'
import { fDate } from '@utils/time-formatter'
import { FC } from 'react'

export interface PatientTableRowProps {
  patient: any
  onEdit: VoidFunction
  onDelete: VoidFunction
}

const PatientTableRow: FC<PatientTableRowProps> = ({
  patient,
  onEdit,
  onDelete
}) => {
  return (
    <TableRow hover key={patient.id}>
      <TableCell style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ fontWeight: 'bold' }}>{patient.fullName}</p>
      </TableCell>
      <TableCell>{patient.email}</TableCell>
      <TableCell>{patient.phoneNumber}</TableCell>
      <TableCell>{patient?.dob ? fDate(patient!.dob) : '_'}</TableCell>
      <TableCell>{patient.status}</TableCell>
      <TableCell>{patient.reasonForMedicalExam}</TableCell>
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
        <IconButton color='error' onClick={onDelete}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={20}
            height={20}
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2M10 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Zm0-11.67c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4ZM16 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Z'
            />
          </svg>
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default PatientTableRow
