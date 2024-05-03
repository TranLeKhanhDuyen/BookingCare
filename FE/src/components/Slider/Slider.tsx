import { useEffect, useState } from 'react'
import Slider from 'react-slick'
// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ItemLink, {
  IItemLinkProps,
  TItemLinkType
} from '@components/ItemLink/ItemLink'
import { TImageVariant } from '@components/common/Image/Image'

export interface ISliderProps {
  items: IItemLinkProps[]
  types: TItemLinkType
  typeImage?: TImageVariant
  width?: string
  height?: string
}

const CustomSlider = ({
  types,
  items,
  typeImage,
  width,
  height
}: ISliderProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4
  }

  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    if (types === 'banner') {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        )
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [types, items, typeImage])

  const renderSliderItems = () => {
    if (types === 'banner') {
      return (
        <div className='slider-items'>
          <ItemLink {...items[currentIndex]} />
        </div>
      )
    } else {
      return (
        <Slider {...settings} className={`slider slider-${types}`}>
          {items.map((item) => (
            <ItemLink {...item} width={width} height={height} />
          ))}
        </Slider>
      )
    }
  }

  return <div className='container slider-container'>{renderSliderItems()}</div>
}

export default CustomSlider
