import classNames from 'classnames/bind'
import { CSSProperties, ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import styles from './table.module.css'

const className = classNames.bind(styles)

export interface TableCellProps extends ComponentPropsWithoutRef<'td'> {
  children?: ReactNode
  elType?: 'td' | 'th'
  textAlign?: CSSProperties['textAlign']
}

const TableCell: FC<TableCellProps> = (props) => {
  const { children, elType, textAlign, ...others } = props
  const Comp = elType ?? 'td'

  return (
    <Comp className={className(Comp)} style={{ textAlign }} {...others}>
      {children}
    </Comp>
  )
}

export default TableCell
