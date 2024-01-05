import React, { CSSProperties, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import s from './Skeleton.module.scss'

interface SkeletonProps {
  className?: string
  width?: string
  height?: string
  borderRadius?: string
}

export const Skeleton: React.FC<SkeletonProps> = memo((props: SkeletonProps) => {
  const {
    className,
    width = '100px',
    height = '40px',
    borderRadius,
  } = props

  const style: CSSProperties = {
    width,
    height,
    borderRadius,
  }

  return <div
    className={ classNames(s.skeleton, [ className ]) }
    style={ style }
  />
})
