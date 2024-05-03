import Input, { IInputProps } from '../Input/Input'

interface InputFieldProps extends IInputProps {
  label?: string
}

const InputField = ({ label, ...props }: InputFieldProps) => {
  return (
    <div className={`input-field input-field-${props.additionalClass}`}>
      <label>{label}</label>
      <input {...props} />
    </div>
  )
}

export default InputField
