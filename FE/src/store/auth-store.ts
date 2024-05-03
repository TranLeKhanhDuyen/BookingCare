import axiosInstance from '@axios'
import { ACCESS_STORAGE_KEY } from '@services/authService'
import { User } from '@services/models/user'
import { userService } from '@services/userService'
import { create } from 'zustand'

interface AuthState {
  isAuthenticated: boolean
  isInitialized: boolean
  user?: User
  initialize(): Promise<void>
  signOut(): void
}

export const useAuthStore = create<AuthState>()((set) => ({
  isInitialized: false,
  isAuthenticated: false,
  async initialize() {
    const accessToken = localStorage.getItem(ACCESS_STORAGE_KEY)
    if (!accessToken) return set({ isInitialized: true })

    try {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`
      const user = await userService.getProfile()
      set({
        isAuthenticated: true,
        user,
        isInitialized: true
      })
    } catch {
      set({ isInitialized: true })
    }
  },
  signOut() {
    localStorage.removeItem(ACCESS_STORAGE_KEY)
    delete axiosInstance.defaults.headers.common.Authorization
    set({ isAuthenticated: false, user: undefined })
  }
}))
