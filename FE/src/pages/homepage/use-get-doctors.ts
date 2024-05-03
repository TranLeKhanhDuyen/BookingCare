import { User } from '@services/models/user'
import { userService } from '@services/userService'
import { useEffect, useState } from 'react'

export const useGetDoctors = () => {
  const [doctors, setDoctors] = useState<Array<User>>([])

  const getDoctors = async () => {
    try {
      const { items } = await userService.getDoctors({
        page: 1,
        limit: 10
      })
      setDoctors(items)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getDoctors()
  }, [])

  return { doctors }
}
