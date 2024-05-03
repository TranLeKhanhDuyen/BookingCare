import { Controller, useFormContext } from 'react-hook-form'
import  { TextField, TextFieldProps } from './TextField'

interface RHFTextFieldProps extends TextFieldProps {
  name: string
}

export const RHFTextField = ({
  name,
  label,
  ...other
}: RHFTextFieldProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  )
}
