import { Appointment } from '@services/models/appointment'
import { GetListParams } from '@services/requests/get-list-request'
import { IPagination } from '@services/responses/pagination'
import { userService } from '@services/userService'
import { useEffect, useState } from 'react'

export const useGetAppointmentsSchedule = ({
  page,
  limit
}: Required<GetListParams>) => {
  const [data, setData] = useState<Array<Appointment>>([])
  const [pagination, setPagination] = useState<IPagination>({
    total: 1,
    limit,
    lastPage: 1,
    currentPage: page
  })

  const getDoctors = async () => {
    try {
      const { items, pagination } =
        await userService.getDoctorAppointmentsSchedule({
          page,
          limit
        })
      setData(items)
      setPagination(pagination)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getDoctors()
  }, [page, limit])

  return { data, pagination }
}
