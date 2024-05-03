import { Image } from '@components/common'
import deleteIcon from '@assets/icons/ic-delete.svg'
import editIcon from '@assets/icons/ic-edit.svg'
import './Table.css'
import { IUser } from '@mockdata'

export interface ITableProps {
  data: {
    rows: {
      firstname?: string
      lastname?: string
      email?: string
      address?: string
      phoneNumber?: string
      gender?: string
      dob?: string
    }[]
  }
  columnTitles: {
    [key: string]: string
  }
  additionalClass?: string
  onEdit?: (user: IUser) => void
  onDelete?: () => void
}

const Table = ({
  data,
  columnTitles,
  additionalClass,
  onDelete,
  onEdit
}: ITableProps) => {
  return (
    <table className={`table ${additionalClass}`}>
      <thead>
        <tr>
          {Object.keys(columnTitles).map((key, index) => (
            <th
              className='text-bold text-white table-column table-head'
              key={index}
            >
              {columnTitles[key]}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='table-tbody'>
        {data.rows.map((row, rowIndex) => (
          <tr className='table-tr' key={rowIndex}>
            {Object.keys(row).map((key, colIndex) => (
              <td className='table-column' key={colIndex}>
                {row.hasOwnProperty(key) ? (row as any)[key] : ''}
              </td>
            ))}
            <td className='table-column '>
              <div className='action'>
                <button
                  className='btn-action edit'
                  onClick={() => onEdit && onEdit(row as IUser)}
                >
                  <Image src={editIcon} alt='Edit' width='23px' />
                </button>
                <button
                  className='btn-action delete'
                  onClick={() => onDelete?.()}
                >
                  <Image src={deleteIcon} alt='Delete' width='20px' />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
