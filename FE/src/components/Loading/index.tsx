import classNames from 'classnames/bind'
import styles from './loading.module.css'

const className = classNames.bind(styles)

const Loading = () => {
  return (
    <div className={className('loading-container')}>
      <div className={className('loading-divider')} />
    </div>
  )
}

export default Loading
