import { Header, ItemLink } from '@components'
import { Heading } from '@components/common'
import { LIST_LINKS, LIST_NAV } from '@mockdata'

const FacilitiesPage = () => {
  return (
    <>
      <Header items={LIST_NAV[0].items} />
      <Heading
        content='DANH SÁCH CƠ SỞ Y TẾ'
        className='heading-facilities'
        variant='h1'
        style={{ textAlign: 'center', margin: '30px 0' }}
      />
      <div className='container list-link' style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
        {LIST_LINKS.facilities.map(({ image, headingProps, path }) => (
          <ItemLink
            image={image}
            headingProps={headingProps}
            path={path}
            type='facilities'
          />
        ))}
      </div>
    </>
  )
}

export default FacilitiesPage
