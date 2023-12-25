import React, { ChangeEvent, memo, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import s from './Select.module.scss'

interface SelectProps {
  className?: string
  options: SelectOptions[]
  value: string | number
  label?: string
  readOnly?: boolean
  onChange?: (value: string | number) => void
}

interface SelectOptions {
  value: string | number
  content: string
}

export const Select: React.FC<SelectProps> = memo((props: SelectProps) => {
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
    onChange?.(event.target.value)
  }

  return (
    <div className={ classNames(s.wrapper, [ className ]) }>
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
})
