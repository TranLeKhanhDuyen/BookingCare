import { TItemLinkType } from '@components/ItemLink/ItemLink'
import { IItemHeaderProps } from '@components/ListHeader/ListHeader'

const headerTexts: Record<TItemLinkType, string> = {
  banner: '',
  service: 'Service',
  specialist: 'Chuyên khoa',
  facilities: 'Cơ sở y tế',
  doctor: 'Bác sĩ',
  handbook: 'Cẩm nang',
  icon: '',
  footer: '',
  media: 'Media'
}

const LIST_HEADER: Record<TItemLinkType, IItemHeaderProps[]> = Object.keys(
  headerTexts
).reduce(
  (acc, key) => {
    acc[key as TItemLinkType] = [{ content: headerTexts[key as TItemLinkType] }]
    return acc
  },
  {} as Record<TItemLinkType, IItemHeaderProps[]>
)
export default LIST_HEADER
