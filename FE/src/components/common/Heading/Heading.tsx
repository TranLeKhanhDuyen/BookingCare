import './Heading.css'

export type THeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface IHeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  variant?: THeadingVariant
  content: string
}

const Heading = ({
  variant = 'h2',
  content,
  className,
  ...props
}: IHeadingProps) => {
  const HeadingTag = variant

  return (
    <HeadingTag
      className={`heading heading-${variant} heading-${className}`}
      {...props}
    >
      {content}
    </HeadingTag>
  )
}

export default Heading
