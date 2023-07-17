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
  size?: ButtonSize
  square?: boolean
  disabled?: boolean
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
    theme = ButtonTheme.PRIMARY,
    size,
    square,
    disabled = false,
    ...otherProps
  } = props

  const addClass = [ s[theme], className, s[size] ]

  return (
    <button
      className={ classNames(s.button, addClass, { [s.square]: square, [s.disabled ]: disabled }) }
      disabled={ disabled }
      { ...otherProps }
    >
      { children }
    </button>
  )
}
