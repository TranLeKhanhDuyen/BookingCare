import { User } from '@services/models/user'

export interface AuthResponse {
  user: User
  accessToken: string
}
