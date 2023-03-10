import React, { ButtonHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Button.module.scss'

export enum ButtonTheme {
  PRIMARY = 'primary',
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    square,
    theme = ButtonTheme.PRIMARY,
    size,
    ...otherProps
  } = props

  const addClass = [ s[theme], className, s[size] ]

  return (
    <button
      className={ classNames(s.button, addClass, { [s.square]: square }) }
      { ...otherProps }
    >
      { children }
    </button>
  )
}
