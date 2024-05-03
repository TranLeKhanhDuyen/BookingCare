import logo from '@assets/logo-v3.png'
import supportIcon from '@assets/icons/ic-support.svg'
import { ItemLink, SearchBar } from '@components'
import { Heading, Text, THeadingVariant } from '@components/common'
import './Header.css'

export interface IHeaderProps {
  items: {
    variant: THeadingVariant
    heading: string
    text: string
  }[]
  icon?: string
}

const Header = ({ icon = supportIcon, items }: IHeaderProps) => {
  return (
    <header className='header'>
      <div className='container header-container'>
        <ItemLink image={logo} width='200' height='43' path='/' />
        <nav className='navbar'>
          {items.map((item, index) => (
            <div className='navbar-item' key={index}>
              <Heading variant={item.variant} content={item.heading} />
              <Text content={item.text} />
            </div>
          ))}
        </nav>
        <SearchBar />
        <ItemLink
          type='icon'
          width='30'
          height='30'
          image={icon}
          alt='Support'
        />
      </div>
    </header>
  )
}

export default Header
