import { FormEventHandler, ReactNode } from 'react'
import {
  FieldValues,
  FormProvider as RHFormProvider,
  UseFormReturn
} from 'react-hook-form'

export interface FormProviderProps<T extends FieldValues> {
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement>
  methods: UseFormReturn<T>
}

export const FormProvider = <T extends FieldValues>({
  children,
  onSubmit,
  methods
}: FormProviderProps<T>) => {
  return (
    <RHFormProvider {...methods}>
      <form onSubmit={onSubmit} encType='multipart/form-data'>
        {children}
      </form>
    </RHFormProvider>
  )
}
