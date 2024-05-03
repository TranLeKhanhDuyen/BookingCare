import Router from '@router'
import { useAuthStore } from '@store/auth-store'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const { isInitialized, initialize } = useAuthStore()

  useEffect(() => {
    if (!isInitialized) initialize()
  }, [])

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
