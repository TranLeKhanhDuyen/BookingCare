import classNames from 'classnames/bind'
import { ComponentPropsWithRef } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import styles from './text-field.module.css'

const className = classNames.bind(styles)

export interface RHFTextFieldProps extends ComponentPropsWithRef<'select'> {
  name: string
  label?: string
}

export const RHFSelect = ({
  name,
  label,
  children,
  ...other
}: RHFTextFieldProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={className('field-container')}>
          {label && (
            <label className={className('field-label')} htmlFor={name}>
              {label}
            </label>
          )}
          <div className={className('text-field')}>
            <select
              {...field}
              {...other}
              className={className('base-input', {
                'base-input-state-error': !!error?.message,
                'base-input-state-default': !error?.message
              })}
            >
              {children}
            </select>
          </div>
          {!!error?.message && (
            <p
              className={className('helper-text', {
                'helper-text-state-error': !!error?.message
              })}
            >
              {error?.message}
            </p>
          )}
        </div>
      )}
    />
  )
}
