import React, { ChangeEvent, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import s from './Select.module.scss'

interface SelectProps<T extends string> {
  className?: string
  options: SelectOption<T>[]
  value?: T
  label?: string
  readOnly?: boolean
  onChange?: (value: T) => void
}

export interface SelectOption<T extends string> {
  value: T
  content: string
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    options,
    value,
    readOnly,
    label,
    onChange,
  } = props

  const optionsJsx = useMemo(() => {
    return options.map((option, index) => {
      return <option className={ s.option } value={ option.value } key={ index }>{ option.content }</option>
    })
  }, [ options ])

  const currentContent = useMemo(() => {
    return options.find((option) => option.value === value)?.content || ''
  }, [ value, options ])

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as T)
  }

  return (
    <div className={ classNames(s.wrapper, [ className ], { [s.readOnly]: readOnly }) }>
      { label ? (
        <span className={ s.label }>
          { label }
        </span>
      ) : null }

      { readOnly
        ? <div className={ s.readOnlyText }>{ currentContent }</div>
        : <select className={ s.select } value={ value } onChange={ onChangeHandler } disabled={ readOnly }>
          { optionsJsx }
        </select>
      }
    </div>
  )
}
