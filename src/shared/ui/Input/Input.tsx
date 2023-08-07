import React, { ChangeEvent, InputHTMLAttributes, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import s from './Input.module.scss'

type HTMLInput = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInput {
  className?: string
  value?: string
  label?: string
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    label,
    ...otherProps
  } = props

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={ classNames(s.inputWrapper, [ className ]) }>
      { label
        ? <div className={ s.placeholder }>
          { label }:
        </div>
        : null
      }

      <input
        className={ s.input }
        type={ type }
        value={ value }
        onChange={ onChangeHandler }
        { ...otherProps }
      />
    </div>
  )
})
