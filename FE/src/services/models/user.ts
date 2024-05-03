import { BaseModel } from './base-model'
import { Clinic } from './clinic'
import { Gender } from './gender'
import { Specialty } from './specialty'
import { UserRole } from './user-role'

export interface User extends BaseModel {
  firstName: string
  lastName: string
  email: string
  title?: string
  address: string
  phoneNumber: string
  dob?: Date
  role: UserRole
  gender: Gender
  avatar?: string
  specialtyId?: number
  specialty?: Specialty
  clinic?: Clinic
  description?: string
}
