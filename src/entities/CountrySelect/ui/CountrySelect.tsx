import React, { useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import { Select } from 'shared/ui/Select/Select'
import { Country } from 'entities/CountrySelect'

interface CountrySelectProps {
  className?: string
  value?: Country
  readOnly?: boolean
  onChange?: (value: Country) => void
}

const countryOptions = [
  { value: Country.RU, content: Country.RU },
  { value: Country.KZ, content: Country.KZ },
  { value: Country.SP, content: Country.SP },
  { value: Country.CY, content: Country.CY },
]

export const CountrySelect: React.FC<CountrySelectProps> = (props: CountrySelectProps) => {
  const {
    className,
    value,
    readOnly,
    onChange,
  } = props

  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string | number) => {
    onChange?.(value as Country)
  }, [ onChange ])

  return (
    <div className={ classNames('', [ className ]) }>
      <Select
        label={ t('common.pickCountry') }
        options={ countryOptions }
        value={ value }
        readOnly={ readOnly }
        onChange={ onChangeHandler }
      />
    </div>
  )
}
