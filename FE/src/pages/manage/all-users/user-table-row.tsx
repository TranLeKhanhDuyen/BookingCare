import Avatar from '@components/Avatar'
import TableCell from '@components/Table/TableCell'
import TableRow from '@components/Table/TableRow'
import IconButton from '@components/common/Button/IconButton'
import { User } from '@services/models/user'
import { UserRole } from '@services/models/user-role'
import { fDate } from '@utils/time-formatter'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export interface UserTableRowProps {
  user: User
  onEdit: VoidFunction
  onDelete: VoidFunction
}

const UserTableRow: FC<UserTableRowProps> = ({ user, onEdit, onDelete }) => {
  const navigate = useNavigate()
  return (
    <TableRow hover key={user.id}>
      <TableCell style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={user.avatar} style={{ marginRight: 16 }} />
        <p style={{ fontWeight: 'bold' }}>
          {user.firstName} {user.lastName}
        </p>
      </TableCell>
      <TableCell>{user.title}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user?.dob ? fDate(user!.dob) : '_'}</TableCell>
      <TableCell>{user.gender}</TableCell>
      <TableCell>{user.phoneNumber}</TableCell>
      <TableCell>{user.address}</TableCell>
      <TableCell textAlign='center'>{user.role}</TableCell>
      <TableCell textAlign='center'>
        {user.role === UserRole.DOCTOR && (
          <IconButton
            onClick={() => {
              navigate(`/manage/doctors/${user.id}/appointments`)
            }}
            style={{ marginRight: 8 }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20px'
              height='20px'
              viewBox='0 0 36 36'
            >
              <path
                fill='currentColor'
                d='M12 16.14h-.87a8.67 8.67 0 0 0-6.43 2.52l-.24.28v8.28h4.08v-4.7l.55-.62l.25-.29a11 11 0 0 1 4.71-2.86A6.59 6.59 0 0 1 12 16.14'
                className='clr-i-solid clr-i-solid-path-1'
              ></path>
              <path
                fill='currentColor'
                d='M31.34 18.63a8.67 8.67 0 0 0-6.43-2.52a10.47 10.47 0 0 0-1.09.06a6.59 6.59 0 0 1-2 2.45a10.91 10.91 0 0 1 5 3l.25.28l.54.62v4.71h3.94v-8.32Z'
                className='clr-i-solid clr-i-solid-path-2'
              ></path>
              <path
                fill='currentColor'
                d='M11.1 14.19h.31a6.45 6.45 0 0 1 3.11-6.29a4.09 4.09 0 1 0-3.42 6.33Z'
                className='clr-i-solid clr-i-solid-path-3'
              ></path>
              <path
                fill='currentColor'
                d='M24.43 13.44a6.54 6.54 0 0 1 0 .69a4.09 4.09 0 0 0 .58.05h.19A4.09 4.09 0 1 0 21.47 8a6.53 6.53 0 0 1 2.96 5.44'
                className='clr-i-solid clr-i-solid-path-4'
              ></path>
              <circle
                cx={17.87}
                cy={13.45}
                r={4.47}
                fill='currentColor'
                className='clr-i-solid clr-i-solid-path-5'
              ></circle>
              <path
                fill='currentColor'
                d='M18.11 20.3A9.69 9.69 0 0 0 11 23l-.25.28v6.33a1.57 1.57 0 0 0 1.6 1.54h11.49a1.57 1.57 0 0 0 1.6-1.54V23.3l-.24-.3a9.58 9.58 0 0 0-7.09-2.7'
                className='clr-i-solid clr-i-solid-path-6'
              ></path>
              <path fill='none' d='M0 0h36v36H0z'></path>
            </svg>
          </IconButton>
        )}
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

export default UserTableRow
