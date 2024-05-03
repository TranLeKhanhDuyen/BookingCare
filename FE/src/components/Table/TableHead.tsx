import classNames from 'classnames/bind'
import { ComponentPropsWithRef, FC, ReactNode } from 'react'
import styles from './table.module.css'

const className = classNames.bind(styles)

export interface TableHeadProps extends ComponentPropsWithRef<'thead'> {
  children: ReactNode
}

const TableHead: FC<TableHeadProps> = ({ children, ...rest }) => {
  return (
    <thead className={className('thead')} {...rest}>
      {children}
    </thead>
  )
}

export default TableHead

interface XTableProps extends ComponentPropsWithRef<'table'> {
  children: ReactNode
}

export const XTable: FC<XTableProps> = ({ children, ...rest }) => {
  return (
    <table className={className('table')} {...rest}>
      {children}
    </table>
  )
}
