import { User } from '@services/models/user'
import { getAllPatient } from '@services/patientService'
import { IPagination } from '@services/responses/pagination'
import { useEffect, useState } from 'react'

interface IUseGetPatients {
  page: number
  limit: number
}

export const useGetPatients = ({
  page,
  limit
}: IUseGetPatients) => {
  const [data, setData] = useState<Array<User>>([])
  const [reLoadData, setReLoadData] = useState(false)
  const [pagination, setPagination] = useState<IPagination>({
    total: 1,
    limit,
    lastPage: 1,
    currentPage: page
  })

  const getPatient = async () => {
    try {
      const { items, pagination }: any = await getAllPatient({
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
    getPatient()
  }, [page, limit, reLoadData])

  return { data, pagination, setReLoadData }
}
