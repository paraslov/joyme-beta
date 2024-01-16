import React, { HTMLAttributes, memo, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import s from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactNode
}

export const Card: React.FC<CardProps> = memo((props: CardProps) => {
  const {
    className,
    children,
    ...otherProps
  } = props
  return (
    <div { ...otherProps } className={ classNames(s.card, [ className ]) }>
      { children }
    </div>
  )
})
