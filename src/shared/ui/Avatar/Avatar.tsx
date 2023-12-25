import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import s from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: string
}

export enum AvatarSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  const {
    className,
    src,
    alt,
    size = AvatarSize.MEDIUM,
  } = props

  return (
    <img className={ classNames(s.avatar, [ className, s[size] ]) } src={ src } alt={ alt } />
  )
}
