import classNames from 'classnames/bind'
import { ComponentPropsWithRef, FC, ReactNode } from 'react'
import styles from './icon-button.module.css'

const className = classNames.bind(styles)

export type Colors = 'default' | 'success' | 'error' | 'warning' | 'information'

export interface IconButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
  color?: Colors
}

const IconButton: FC<IconButtonProps> = ({
  children,
  color = 'default',
  ...rest
}) => {
  return (
    <button className={className('icon-btn', `icon-${color}-color`)} {...rest}>
      <span className={className('icon')}>{children}</span>
    </button>
  )
}

export default IconButton
