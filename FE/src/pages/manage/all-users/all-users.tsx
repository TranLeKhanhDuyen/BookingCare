import { UserForm } from '@components'
import { Heading, Input } from '@components/common'
import { useState } from 'react'

import Card from '@components/Card'
import Pagination from '@components/Pagination'
import TableBody from '@components/Table/TableBody'
import TableCell from '@components/Table/TableCell'
import TableHead, { XTable } from '@components/Table/TableHead'
import TableRow from '@components/Table/TableRow'
import { usePagination } from '@hooks/use-pagination'
import { User } from '@services/models/user'
import { deleteUsers, editUsers } from '@services/usersService'
import './all-users.css'
import { useGetUsers } from './use-get-users'
import UserTableRow from './user-table-row'

const AllUsers = () => {
  const { page, limit, onPageChange } = usePagination()
  const { data, pagination, setReLoadData } = useGetUsers({ page, limit })

  const [showEditForm, setShowEditForm] = useState({
    open: false,
    user: {} as any
  })

  const handleEdit = (user: User) => {
    setShowEditForm({
      open: true,
      user
    })
  }

  const handleDelete = (userId: number) => {
    deleteUsers(userId).then(() => {
      setReLoadData(true)
    })
  }

  const handleCloseForm = () => {
    setShowEditForm({
      open: false,
      user: {}
    })
  }

  const handleSubmit = (formData: any) => {
    editUsers(showEditForm?.user?.id!, formData).then(() => {
      handleCloseForm()
      setReLoadData(true)
    })
  }

  return (
    <div className=' container user-manage-container'>
      <Heading
        variant='h1'
        content='TẤT CẢ NGƯỜI DÙNG'
        className='text-3xl text-turquoise'
        style={{
          margin: '30px 0',
          textAlign: 'center',
          color: 'var(--turquoise-color)',
          fontSize: 'var(--font-3xl)'
        }}
      />
      {showEditForm.open && (
        <div className='overlay'>
          <div className='form-container'>
            <Heading
              className='user-form'
              variant='h2'
              content='CẬP NHẬT THÔNG TIN'
            />
            <UserForm
              onSubmit={handleSubmit}
              onClose={handleCloseForm}
              mode='update'
              heading='Cập nhật thông tin'
              dataEdit={showEditForm.user}
            />
          </div>
        </div>
      )}

      <Input />

      <Card style={{ overflowX: 'auto' }}>
        <XTable
          style={{
            width: '100%',
            borderBottom: 'solid 1px gray'
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell elType='th'>Name</TableCell>
              <TableCell elType='th'>Job Title</TableCell>
              <TableCell elType='th'>Email</TableCell>
              <TableCell elType='th'>Dob</TableCell>
              <TableCell elType='th'>Gender</TableCell>
              <TableCell elType='th'>Phone number</TableCell>
              <TableCell elType='th'>Address</TableCell>
              <TableCell elType='th' textAlign='center'>
                Role
              </TableCell>
              <TableCell elType='th' />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <UserTableRow
                key={user.id}
                user={user}
                onEdit={() => {
                  handleEdit(user)
                }}
                onDelete={() => {
                  handleDelete(user.id)
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

export default AllUsers
