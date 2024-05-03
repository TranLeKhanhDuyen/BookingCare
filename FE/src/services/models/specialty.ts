import { BaseModel } from './base-model'

export interface Specialty extends BaseModel {
  name: string
  description?: string
  image?: string
}
