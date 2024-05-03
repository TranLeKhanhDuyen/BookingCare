import axios from '../axios'

// const httpsFile = axios.create({
//   baseURL: 'http://localhost:9000',
//   withCredentials: false
// })

// httpsFile.interceptors.request.use((config: any) => {
//   config.headers['Content-Type'] = 'multipart/form-data'
//   return config
// })

// httpsFile.interceptors.response.use(
//   (response: any) => {
//     return response
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

const processData = (data: any, formData: any, parentKey?: string) => {
  Object.keys(data).forEach((key) => {
    if (data.hasOwnProperty(key)) {
      const value = data[key]
      const fieldName = parentKey ? `${parentKey}.${key}` : key
      if (value != null) {
        if (Array.isArray(value)) {
          value.forEach((item, index) => {
            if (item != null) {
              if (typeof item === 'string' || item instanceof File) {
                formData.append(`${fieldName}`, item)
              } else if (typeof item === 'object') {
                processData(item, formData, `${fieldName}[${index}]`)
              }
            }
          })
        } else if (typeof value === 'string' || value instanceof File) {
          formData.append(`${fieldName}`, value)
        } else if (typeof value === 'object') {
          processData(value, formData, fieldName)
        } else {
          formData.append(fieldName, value)
        }
      }
    }
  })
}

export const createUsers = async (payload: any) => {
  const rs = await axios.post('/api/v1/users/create-new-user', payload,{
    // headers: {
    //   'Content-Type': 'multipart/form-data'
    // }
  })
  return rs.data
}

export const editUsers = async (id: string, payload: any) => {
  const rs = await axios.post(`/api/edit-user/${id}`, payload)
  return rs.data
}
export const getDetailUsers = async (id: string) => {
  const res = await axios.get(`/api/users/id`)
  return res.data
}

export const deleteUsers = (userId: number) => {
  return axios.delete('/api/delete-user', {
    data: {
      id: userId
    }
  })
}
