import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import s from './Icon.module.scss'

interface IconProps {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  className?: string
  width?: string
  height?: string
  isPathStroke?: boolean
}

export const Icon: React.FC<IconProps> = memo((props: IconProps) => {
  const {
    className,
    width = '24px',
    height = '24px',
    Svg,
    isPathStroke,
  } = props

  return (
    <Svg
      width={ width }
      height={ height }
      className={ classNames(s.icon, [ className ], { [s.strokeColor]: isPathStroke }) }
    />
  )
})
