import { Heading } from '@components/common'
import { useState } from 'react'

import Card from '@components/Card'
import Pagination from '@components/Pagination'
import PatientForm from '@components/PatientForm/PatientForm'
import TableBody from '@components/Table/TableBody'
import TableCell from '@components/Table/TableCell'
import TableHead, { XTable } from '@components/Table/TableHead'
import TableRow from '@components/Table/TableRow'
import { usePagination } from '@hooks/use-pagination'
import { deletePatient, updatePatient } from '@services/patientService'
import './all-patients.css'
import PatientTableRow from './docter-table-row'
import { useGetPatients } from './use-get-patients'

const Patients = () => {
  const { page, limit, onPageChange } = usePagination()
  const { data, pagination, setReLoadData } = useGetPatients({
    page,
    limit
  })
  const [showEditForm, setShowEditForm] = useState({
    open: false,
    data: {} as any
  })

  const handleEdit = (patient: any) => {
    setShowEditForm({
      open: true,
      data: patient
    })
  }

  const handleDelete = (id: number) => {
    deletePatient(id).then(() => setReLoadData(true))
  }

  const handleCloseForm = () => {
    setShowEditForm({
      open: false,
      data: {}
    })
  }

  const handleSubmit = (values: any) => {
    updatePatient(showEditForm?.data?.id, values).then(() => {
      handleCloseForm()
      setReLoadData(true)
    })
  }

  return (
    <div className=' container user-manage-container'>
      <Heading
        variant='h1'
        content='TẤT CẢ LỊCH KHÁM CỦA BÁC SĨ'
        className='text-3xl text-turquoise'
        style={{
          margin: '30px 0',
          textAlign: 'center',
          color: 'var(--turquoise-color)',
          fontSize: 'var(--font-3xl)'
        }}
      />
      {showEditForm.open === true && (
        <div className='overlay'>
          <div className='form-container'>
            <Heading
              className='user-form'
              variant='h2'
              content='CẬP NHẬT THÔNG TIN'
            />
            <PatientForm
              onSubmit={handleSubmit}
              onClose={handleCloseForm}
              mode='update'
              heading='Cập nhật thông tin'
              dataEdit={showEditForm.data}
            />
          </div>
        </div>
      )}

      <Card style={{ overflowX: 'auto' }}>
        <XTable
          style={{
            width: '100%',
            borderBottom: 'solid 1px gray'
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell elType='th'>FullName</TableCell>
              <TableCell elType='th'>Email</TableCell>
              <TableCell elType='th'>Phone number</TableCell>
              <TableCell elType='th'>Dob</TableCell>
              <TableCell elType='th'>Status</TableCell>
              <TableCell elType='th' textAlign='center'>
                Reason For Medical Exam
              </TableCell>
              <TableCell elType='th' />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <PatientTableRow
                key={item.id}
                patient={item}
                onEdit={() => {
                  handleEdit(item)
                }}
                onDelete={() => {
                  handleDelete(item.id)
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
    </div>
  )
}

export default Patients
