import classNames from 'classnames/bind'
import { ComponentPropsWithRef, FC, ReactNode } from 'react'
import styles from './table.module.css'

const className = classNames.bind(styles)

export interface TableBodyProps extends ComponentPropsWithRef<'tbody'> {
  children: ReactNode
}

const TableBody: FC<TableBodyProps> = ({ children, ...rest }) => {
  return (
    <tbody className={className('tbody')} {...rest}>
      {children}
    </tbody>
  )
}

export default TableBody
