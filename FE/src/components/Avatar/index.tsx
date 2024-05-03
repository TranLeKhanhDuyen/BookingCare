import { ComponentPropsWithRef, FC } from 'react'

interface AvatarProps extends ComponentPropsWithRef<'img'> {
  src?: string
  alt?: string
  size?: number
}

const Avatar: FC<AvatarProps> = ({ src, alt, size = 50, ...props }) => {
  return (
    <img
      src={src || '/assets/images/default-avatar.avif'}
      alt={alt}
      {...props}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        objectFit: 'cover',
        ...(props.style ?? {})
      }}
    />
  )
}

export default Avatar
