import { TItemLinkType } from '@components/ItemLink/ItemLink'
import { Button, Heading } from '@components/common'
import './ListHeader.css'
import { Link } from 'react-router-dom'

type TListHeaderType = TItemLinkType

export interface IItemHeaderProps {
  content: string
  type?: TListHeaderType 
  linkTo?: string
}

const ListHeader = ({ content, type, linkTo }: IItemHeaderProps) => {
  return (
    <div>
      {linkTo && (
        <Link to={linkTo} className={`container item-header-container ${type}`}>
          <Heading variant='h2' content={content} />
          <Button title='Xem thêm' />
        </Link>
      )}
    </div>
  )
}

export default ListHeader
