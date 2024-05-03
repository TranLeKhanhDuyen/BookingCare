import { BASE_URL } from '@config'
import axios, { AxiosInstance } from 'axios'

const createAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: 'http://localhost:9000',
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: false
  })

  instance.interceptors.response.use((response) => {
    return response.data
  })

  return instance
}

const axiosInstance: AxiosInstance = createAxiosInstance(BASE_URL)

export default axiosInstance
