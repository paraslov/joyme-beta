import preloader from './assets/preloader.gif'
import { CSSProperties } from 'react'

type PreloaderPropsType = {
  /**
   * css position left of preloader
   */
  left?: string
  /**
   * css position top of preloader
   */
  top?: string
  /**
   * size of preloader in pixels
   */
  size?: string
}

export function Preloader(props: PreloaderPropsType) {
  const preloaderStyle: CSSProperties = {
    width: props.size ? props.size : '100px',
    height: props.size ? props.size : '100px',
    position: 'absolute',
    left: props.left ? props.left : '40px',
    top: props.top ? props.top : '40px'
  }

  return (
    <div>
      <img style={ preloaderStyle } src={ preloader } alt=""/>
    </div>
  )
}
