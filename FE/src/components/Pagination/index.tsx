import { FC } from 'react'
import IconButton from '@components/common/Button/IconButton'

export interface PaginationProps {
  page: number
  totalPage: number
  onPageChange(page: number): void
}

const Pagination: FC<PaginationProps> = ({ page, totalPage, onPageChange }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <p>
        {page} of {totalPage}
      </p>
      <div>
        <IconButton
          style={{ marginRight: 8 }}
          onClick={() => {
            if (page === 1) return
            onPageChange(page - 1)
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={20}
            height={20}
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41a1 1 0 0 1-.72.29'
            />
          </svg>
        </IconButton>
        <IconButton
          onClick={() => {
            if (page === totalPage) return
            onPageChange(page + 1)
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={20}
            height={20}
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M10.5 17a1 1 0 0 1-.71-.29a1 1 0 0 1 0-1.42L13.1 12L9.92 8.69a1 1 0 0 1 0-1.41a1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32'
            />
          </svg>
        </IconButton>
      </div>
    </div>
  )
}

export default Pagination
