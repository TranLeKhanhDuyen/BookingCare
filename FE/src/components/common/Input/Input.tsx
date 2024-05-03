import { ChangeEvent } from 'react'
import './Input.css'

export interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  additionalClass?: string
  onChangeValue?: (value: string) => void
  required?: boolean
}

const Input = ({ additionalClass, onChangeValue, ...props }: IInputProps) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeValue?.(event.target.value)
  }

  return (
    <input
      className={`input input-${additionalClass}`}
      onChange={handleOnChange}
      {...props}
    />
  )
}

export default Input
