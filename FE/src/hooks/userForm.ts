import { useState, ChangeEvent } from 'react'

export const useForm = (initialState: object) => {
  const [state, setState] = useState(initialState)

  return {
    state,
    setState,
    bind: {
      value: state,
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.value
        })
      }
    },
    reset: () => setState(initialState)
  }
}
