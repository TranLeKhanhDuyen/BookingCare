import { ComponentPropsWithRef } from 'react'
import styles from './text-field.module.css'
import classNames from 'classnames/bind'

const className = classNames.bind(styles)

export interface TextFieldProps extends ComponentPropsWithRef<'input'> {
  label?: string
  helperText?: string
}

export const TextField = ({
  name,
  label,
  helperText,
  ...other
}: TextFieldProps) => {
  return (
    <div className={className('field-container')}>
      {label && (
        <label className={className('field-label')} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={className('text-field')}>
        <input
          {...other}
          className={className('base-input', {
            'base-input-state-error': !!helperText,
            'base-input-state-default': !helperText
          })}
        />
      </div>
      {!!helperText && (
        <p
          className={className('helper-text', {
            'helper-text-state-error': !!helperText
          })}
        >
          {helperText}
        </p>
      )}
    </div>
  )
}
