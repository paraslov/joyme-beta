import React, { useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import { Select } from 'shared/ui/Select/Select'
import { Currency } from 'entities/CurrencySelect'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  readOnly?: boolean
  onChange?: (value: Currency) => void
}

const currencyOptions = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.TEN, content: Currency.TEN },
  { value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect: React.FC<CurrencySelectProps> = (props: CurrencySelectProps) => {
  const {
    className,
    value,
    readOnly,
    onChange,
  } = props

  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string | number) => {
    onChange?.(value as Currency)
  }, [ onChange ])

  return (
    <div className={ classNames('', [ className ]) }>
      <Select
        label={ t('common.pickCurrency') }
        options={ currencyOptions }
        value={ value }
        readOnly={ readOnly }
        onChange={ onChangeHandler }
      />
    </div>
  )
}
