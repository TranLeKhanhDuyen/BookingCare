import { useState } from 'react'
import searchIcon from '@assets/icons/ic-search.svg'
import { Image, Input } from '@components/common'
import './SearchBar.css'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  const handleSearchChange = (value: string) => {
    setSearchValue(value)
  }

  return (
    <div className='search-container'>
      <Image
        width='15'
        height='15'
        src={searchIcon}
        alt='Search Icon'
        type='square'
      />
      <Input
        placeholder='Nhập từ khóa ... '
        value={searchValue}
        onChangeValue={handleSearchChange}
        additionalClass='search'
      />
    </div>
  )
}

export default SearchBar
