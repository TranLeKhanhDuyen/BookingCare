import supportIcon from '@assets/icons/ic-support.svg'
import {
  CustomSlider,
  EmbedVideo,
  Header,
  ItemLink,
  ListHeader
} from '@components'
import { Heading, Text } from '@components/common'
import { LIST_HEADER, LIST_LINKS, LIST_NAV } from '@mockdata'
import Doctors from './doctors'
import './home.css'

const HomePage = () => {
  return (
    <>
      <Header items={LIST_NAV[0].items} icon={supportIcon} />
      <div className='background'>
        <CustomSlider items={LIST_LINKS.banner} types='banner' />
      </div>
      <main className='main-homepage'>
        <div className='container'>
          <Heading
            variant='h2'
            content='Dịch vụ toàn diện'
            className='container'
          />
        </div>
        <div className='container list-link'>
          {LIST_LINKS.service.map(({ image, headingProps }) => (
            <ItemLink
              image={image}
              headingProps={headingProps}
              type='service'
            />
          ))}
        </div>
        <ListHeader
          content={LIST_HEADER.specialist[0].content}
          type='specialist'
          linkTo='/specialist'
        />
        <CustomSlider items={LIST_LINKS.specialist} types='specialist' />
        <ListHeader
          content={LIST_HEADER.facilities[0].content}
          type='facilities'
          linkTo='/facilities'
        />
        <CustomSlider items={LIST_LINKS.facilities} types='facilities' />
        <ListHeader
          content={LIST_HEADER.doctor[0].content}
          type='facilities'
          linkTo='/facilities'
        />
        <Doctors />
        <div className='slider-handbook'>
          <ListHeader
            content={LIST_HEADER.handbook[0].content}
            type='handbook'
            linkTo='/handbook'
          />
          <CustomSlider items={LIST_LINKS.handbook} types='handbook' />
        </div>

        <div className='media'>
          <div className='container heading-media'>
            <Heading
              variant='h2'
              content='Truyền thông nói về BookingCare'
              className='media'
            />
          </div>
          <div className='container media-container'>
            <div className='embed-video'>
              <EmbedVideo
                link='https://www.youtube.com/embed/FyDQljKtWnI?si=mg6VMSm1mRjSxFhg'
                alt='vtv1'
              />
            </div>
            <div className='list-media'>
              {LIST_LINKS.media.map((item) => (
                <ItemLink
                  image={item.image}
                  headingProps={item.headingProps}
                  textProps={item.textProps}
                  type={item.type}
                  path={item.path}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className='footer'>
        <div className=' container footer-container'>
          <div className='copy-right'>
            <Text content='@BookingCare 2024' />
          </div>
          <div className='contact'>
            {LIST_LINKS.footer.map((item) => (
              <ItemLink
                image={item.image}
                width='30'
                height='30'
                path={item.path}
                type={item.type}
              />
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}

export default HomePage
