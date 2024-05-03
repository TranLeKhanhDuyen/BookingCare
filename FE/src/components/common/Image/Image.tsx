import './Image.css'

export type TImageVariant = 'circle' | 'square'

export interface IImageProps extends React.HTMLProps<HTMLImageElement> {
  src: string
  variant?: TImageVariant
}

const Image = ({ src, variant, size, ...props }: IImageProps) => (
  <img className={`img img-${variant}`} src={src} {...props} />
)

export default Image
