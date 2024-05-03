import { ListHeader } from '@components'
import Avatar from '@components/Avatar'
import { Heading, Text } from '@components/common'
import classNames from 'classnames/bind'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import styles from './doctors.module.css'
import { useGetDoctors } from './use-get-doctors'

const className = classNames.bind(styles)

export interface DoctorsProps {}

const Doctors: FC<DoctorsProps> = () => {
  const navigate = useNavigate()
  const { doctors } = useGetDoctors()

  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 813,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className='container slider-container'>
      <div className='slider-doctor'>
        <ListHeader content='Doctor' type='doctor' />
        <Slider {...settings} className={`slider slider-doctor`}>
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className={className('doctor-content')}
              onClick={() => {
                navigate(`/doctors/${doctor.id}`)
              }}
            >
              <Avatar size={218} src={doctor.avatar} alt={doctor.firstName} />
              {doctor.title && (
                <Heading
                  content={doctor.title}
                  className={className('doctor-title')}
                />
              )}
              {doctor.specialty && (
                <Text
                  content={doctor!.specialty.name}
                  className={className('doctor-specialty')}
                />
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Doctors
