import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Button.module.scss'

export enum ButtonTheme {
  PRIMARY = 'primary',
  CLEAR = 'clear',
  OUTLINE = 'outline',
  WARNING = 'warning',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  size?: ButtonSize
  square?: boolean
  disabled?: boolean
  children?: ReactNode
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.PRIMARY,
    size = ButtonSize.L,
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
})
