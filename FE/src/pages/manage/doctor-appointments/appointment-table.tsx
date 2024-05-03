import Card from '@components/Card'
import TableBody from '@components/Table/TableBody'
import TableCell from '@components/Table/TableCell'
import TableHead, { XTable } from '@components/Table/TableHead'
import TableRow from '@components/Table/TableRow'
import { Appointment } from '@services/models/appointment'
import { IPagination } from '@services/responses/pagination'
import { FC } from 'react'
import AppointmentTableRow from './appointment-table-row'
import Pagination from '@components/Pagination'

export interface AppointmentTableProps {
  appointments: Array<Appointment>
  pagination: IPagination
  onPageChange(page: number): void
  onEdit?(appointment: Appointment): void
}

const AppointmentTable: FC<AppointmentTableProps> = ({
  appointments,
  pagination,
  onPageChange,
  onEdit
}) => {
  return (
    <Card style={{ overflowX: 'auto' }}>
      <XTable
        style={{
          width: '100%',
          borderBottom: 'solid 1px gray'
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell elType='th'>Patient name</TableCell>
            <TableCell elType='th'>Patient email</TableCell>
            <TableCell elType='th'>Patient phone</TableCell>
            <TableCell elType='th'>Patient Dob</TableCell>
            <TableCell elType='th'>Reason</TableCell>
            <TableCell elType='th'>Date</TableCell>
            <TableCell elType='th' textAlign='center'>
              Status
            </TableCell>
            <TableCell elType='th'>Diagnosis</TableCell>
            <TableCell elType='th'>Prescription</TableCell>
            <TableCell elType='th'>Description</TableCell>
            <TableCell elType='th' />
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <AppointmentTableRow
              key={appointment.id}
              appointment={appointment}
              onEdit={() => {
                onEdit && onEdit(appointment)
              }}
            />
          ))}
        </TableBody>
      </XTable>
      <div
        style={{
          width: '100%',
          margin: '16px',
          position: 'relative'
        }}
      >
        <Pagination
          page={pagination.currentPage}
          totalPage={pagination.lastPage}
          onPageChange={onPageChange}
        />
      </div>
    </Card>
  )
}

export default AppointmentTable
