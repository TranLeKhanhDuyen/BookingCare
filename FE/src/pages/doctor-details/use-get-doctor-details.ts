import { User } from '@services/models/user'
import { userService } from '@services/userService'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const useGetDoctorDetails = () => {
  const { id } = useParams()
  const [doctorDetails, setDoctorDetails] = useState<User>()

  const getDoctorDetails = async () => {
    try {
      const doctorDetails = await userService.getDoctorDetails(parseInt(id!))
      setDoctorDetails(doctorDetails)
    } catch (error) {}
  }

  useEffect(() => {
    getDoctorDetails()
  }, [id])

  return { doctorDetails }
}
