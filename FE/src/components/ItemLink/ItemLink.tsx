import { Link } from 'react-router-dom'
import placeholderImage from '@assets/facilities/cho-ray.jpg'
import {
  Heading,
  IHeadingProps,
  Image,
  ITextProps,
  Text,
  TImageVariant
} from '@components/common'
import './ItemLink.css'

export type TItemLinkType =
  | 'banner'
  | 'service'
  | 'specialist'
  | 'facilities'
  | 'doctor'
  | 'handbook'
  | 'media'
  | 'icon'
  | 'footer'

export interface IItemLinkProps {
  type?: TItemLinkType
  headingProps?: IHeadingProps
  textProps?: ITextProps
  image?: string
  alt?: string
  width?: string
  height?: string
  typeImage?: TImageVariant
  path?: string
  additionalClass?: string
}

const ItemLink = ({
  type,
  headingProps,
  textProps,
  width,
  height,
  image = placeholderImage,
  path = '',
  typeImage,
  alt,
  additionalClass
}: IItemLinkProps) => {
  return (
    <div className={`itemlink-container`}>
      <Link
        className={`cursor itemlink ${type ? `itemlink-${type}` : ''} ${additionalClass}`}
        to={path}
      >
        <Image
          className={`img-${type}`}
          width={width}
          height={height}
          src={image}
          alt={`Image for ${alt}`}
          variant={typeImage}
        />
        {headingProps && <Heading {...headingProps} />}
        {textProps && <Text {...textProps} />}
      </Link>
    </div>
  )
}

export default ItemLink
