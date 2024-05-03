import classNames from 'classnames/bind'
import { ComponentPropsWithRef, FC, ReactNode } from 'react'
import styles from './card.module.css'

const className = classNames.bind(styles)

export interface CardProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

const Card: FC<CardProps> = ({ children, ...rest }) => {
  return (
    <div className={className('card')} {...rest}>
      {children}
    </div>
  )
}

export default Card
