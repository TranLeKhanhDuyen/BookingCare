import classNames from 'classnames/bind'
import { ComponentPropsWithRef, FC, ReactNode } from 'react'
import styles from './table.module.css'

const className = classNames.bind(styles)

export interface TableRowProps extends ComponentPropsWithRef<'tr'> {
  children: ReactNode
  hover?: boolean
}

const TableRow: FC<TableRowProps> = (props) => {
  const { children, hover, ...rest } = props

  return (
    <tr
      className={className('tr', {
        hover: hover
      })}
      {...rest}
    >
      {children}
    </tr>
  )
}

export default TableRow
