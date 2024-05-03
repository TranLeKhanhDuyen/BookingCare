import './EmbedVideo.css'

export interface IEmbedVideoProps extends React.HTMLProps<HTMLIFrameElement> {
  onClick?: () => void
  link: string
}

const EmbedVideo = ({ onClick, link, ...props }: IEmbedVideoProps) => (
  <div className='embed-video-container' onClick={onClick}>
    <iframe className='video-embed' src={link} {...props}></iframe>
  </div>
)

export default EmbedVideo
