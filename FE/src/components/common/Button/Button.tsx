import './Button.css'

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  variant?: TButtonVariant
  additionalClass?: string
}

export type TButtonVariant = 'primary' | 'secondary'

const Button = ({
  title = 'Xem thêm',
  variant = 'primary',
  additionalClass,
  ...props
}: IButtonProps) => (
  <button className={`btn btn-${variant} btn-${additionalClass}`} {...props}>
    {title}
  </button>
)

export default Button
