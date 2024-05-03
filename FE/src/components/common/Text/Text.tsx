import './Text.css'

export interface ITextProps extends React.HTMLProps<HTMLParagraphElement> {
  content: string
}

const Text = ({ content, className, ...props }: ITextProps) => (
  <p className={`text ${className}`} {...props}>
    {content}
  </p>
)

export default Text
