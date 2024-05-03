import { BaseModel } from './base-model'

export interface Clinic extends BaseModel {
  name: string
  description?: string
  phone?: string
  address: string
  image?: string
  openingTime: string
  closingTime: string
  doctorId: number,
  fee: number
}
