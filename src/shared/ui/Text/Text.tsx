import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import s from './Text.module.scss'

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export const Text: React.FC<TextProps> = (props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
  } = props

  return (
    <div className={ classNames(s.textWrapper, [ className, s[theme] ]) }>
      { title ? <p className={ s.title }> { title } </p> : null }
      { text ? <p className={ s.text }> { text } </p> : null }
    </div>
  )
}
