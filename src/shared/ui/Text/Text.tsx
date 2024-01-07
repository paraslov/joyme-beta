import React, { memo, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import s from './Text.module.scss'

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  children?: ReactNode
  textAlign?: TextAlign
  textSize?: TextSize
}

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'text-left',
  RIGHT = 'text-right',
  CENTER = 'text-center',
}

export enum TextSize {
  SMALL = 'text-small',
  MEDIUM = 'text-medium',
  LARGE = 'text-large',
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    textAlign = TextAlign.LEFT,
    textSize = TextSize.MEDIUM,
  } = props

  return (
    <div className={ classNames(s.textWrapper, [ className, s[theme], s[textAlign], s[textSize] ]) }>
      { title ? <p className={ s.title }> { title } </p> : null }
      { text ? <p className={ s.text }> { text } </p> : null }
    </div>
  )
})
