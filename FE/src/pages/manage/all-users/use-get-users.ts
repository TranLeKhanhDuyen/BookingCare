import { User } from '@services/models/user'
import { IPagination } from '@services/responses/pagination'
import { userService } from '@services/userService'
import { useEffect, useState } from 'react'

interface UseGetUsersParams {
  page: number
  limit: number
}

export const useGetUsers = ({ page, limit }: UseGetUsersParams) => {
  const [data, setData] = useState<Array<User>>([])
  const [reLoadData, setReLoadData] = useState(false)
  const [pagination, setPagination] = useState<IPagination>({
    total: 1,
    limit,
    lastPage: 1,
    currentPage: page
  })

  const getDoctors = async () => {
    try {
      const { items, pagination } = await userService.getDoctors({
        page,
        limit
      })
      setData(items)
      setPagination(pagination)
      setReLoadData(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getDoctors()
  }, [page, limit, reLoadData])

  return { data, pagination, setReLoadData }
}
