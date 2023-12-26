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

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    textAlign = TextAlign.LEFT,
  } = props

  return (
    <div className={ classNames(s.textWrapper, [ className, s[theme], s[textAlign] ]) }>
      { title ? <p className={ s.title }> { title } </p> : null }
      { text ? <p className={ s.text }> { text } </p> : null }
    </div>
  )
})
