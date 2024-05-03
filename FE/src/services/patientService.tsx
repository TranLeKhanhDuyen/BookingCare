import axiosInstance from '@axios'

export const getAllPatient = async (params: any) => {
  return axiosInstance.get(`/api/patient`, { params })
}
export const getDetailPatient = async (id: string, params: any) => {
  return axiosInstance.get(`/api/patient/${id}`, { params })
}

export const createPatient = (payload: any) => {
  return axiosInstance.post('/api/patient', {
    ...payload
  })
}
export const updatePatient = (id: string, payload: any) => {
  return axiosInstance.put(`/api/patient/${id}`, {
    ...payload
  })
}

export const deletePatient = (id: number) => {
  return axiosInstance.delete('/api/patient', {
    data: {
      id
    }
  })
}
