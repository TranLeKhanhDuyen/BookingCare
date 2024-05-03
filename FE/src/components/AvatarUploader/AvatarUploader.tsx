import { Image } from '@components/common'
import React, { useState } from 'react'

interface AvatarUploadProps {
  onAvatarSelect: (avatar: File) => void
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({ onAvatarSelect }) => {
  const [selectedAvatar, setSelectedAvatar] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const avatarFile = files[0]
      setSelectedAvatar(avatarFile)

      const reader = new FileReader()
      reader.onload = () => {
        setImageUrl(reader.result as string)
      }
      reader.readAsDataURL(avatarFile)

      onAvatarSelect(avatarFile)
    }
  }

  return (
    <div>
      <input
        type='file'
        accept='image/*'
        onChange={handleAvatarChange}
        id='avatarInput'
      />
      {imageUrl && (
        <Image
          src={imageUrl}
          alt='Avatar preview'
          width='50px'
          height='50px'
          style={{ objectFit: 'cover' }}
        />
      )}
    </div>
  )
}

export default AvatarUpload
