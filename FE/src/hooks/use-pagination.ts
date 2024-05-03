import { useState } from 'react'

export const usePagination = (defaultLimit = 10) => {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(defaultLimit)

  return {
    page,
    limit,
    onPageChange: setPage,
    onLimitChange: setLimit
  }
}
