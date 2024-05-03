import { SelectHTMLAttributes } from 'react'
import './Options.css'

interface IOptionsProps extends SelectHTMLAttributes<HTMLSelectElement> {
  items: {
    id?: string
    value: string
  }[]
  defaultValue?: string
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const OptionList = ({
  items,
  onChange,
  defaultValue,
  ...props
}: IOptionsProps) => (
  <select
    className='cursor select'
    onChange={onChange}
    {...props}
    defaultValue={defaultValue}
  >
    {items.map((option) => (
      <option key={option.id} value={option.value}>
        {option.value}
      </option>
    ))}
  </select>
)

export default OptionList
