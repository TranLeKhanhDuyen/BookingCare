import { BaseModel } from './base-model'

export interface Patient extends BaseModel {
  fullName: string
  email?: string
  phoneNumber: string
  dob: Date
}
