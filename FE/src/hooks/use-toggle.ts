import { useEffect, useState } from 'react'

export const useToggle = (init = false) => {
  const [isOn, setIsOn] = useState(init)

  useEffect(() => {
    setIsOn(init)
  }, [init])

  return [isOn, () => setIsOn((prev) => !prev)] as const
}
