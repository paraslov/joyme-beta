import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Preloader } from 'shared/ui/Preloader/Preloader'
import { Profile } from '../../model/types/Profile'

import s from './ProfileCard.module.scss'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { CurrencySelect } from 'entities/CurrencySelect/ui/CurrencySelect'
import { Currency } from 'entities/CurrencySelect'
import { Country, CountrySelect } from 'entities/CountrySelect'
import { useSelector } from 'react-redux'
import { getProfileErrors } from 'entities/Profile'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface ProfileCardProps {
  profileData?: Profile
  className?: string
  isLoading?: boolean
  readOnly?: boolean
  errorMessage?: string
  onChangeFirstName?: (value: string) => void
  onChangeLastName?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeUsername?: (value: string) => void
  onChangeAvatar?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeCurrency?: (value: Currency) => void
  onChangeCountry?: (value: Country) => void
}

export const ProfileCard: React.FC<ProfileCardProps> = (props: ProfileCardProps) => {
  const {
    className,
    profileData,
    isLoading,
    readOnly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCity,
    onChangeCurrency,
    onChangeCountry,
  } = props

  const { t } = useTranslation('profile')

  const errors = useSelector(getProfileErrors)

  return (
    <div className={ classNames(s.profileCard, [ className ]) }>
      {
        isLoading ? <Preloader size={ '50px' } /> : null
      }

      <div className={ s.profileData }>
        <Avatar src={ profileData?.avatar } />
        <Input
          value={ profileData?.username }
          placeholder={ t('enterYourUsername') }
          label={ t('enterYourUsername') }
          readOnly={ readOnly }
          onChange={ onChangeUsername }
        />
        <Input
          value={ profileData?.firstName }
          placeholder={ t('enterYourFirstName') }
          label={ t('enterYourFirstName') }
          readOnly={ readOnly }
          onChange={ onChangeFirstName }
        />
        <Input
          value={ profileData?.lastName }
          placeholder={ t('enterYourLastName') }
          label={ t('enterYourLastName') }
          readOnly={ readOnly }
          onChange={ onChangeLastName }
        />
        <Input
          value={ profileData?.age }
          placeholder={ t('enterYourAge') }
          label={ t('enterYourAge') }
          readOnly={ readOnly }
          onChange={ onChangeAge }
        />
        <Input
          value={ profileData?.city }
          placeholder={ t('enterYourCity') }
          label={ t('enterYourCity') }
          readOnly={ readOnly }
          onChange={ onChangeCity }
        />
        <CurrencySelect value={ profileData?.currency } readOnly={ readOnly } onChange={ onChangeCurrency } />
        <CountrySelect value={ profileData?.country } readOnly={ readOnly } onChange={ onChangeCountry } />
        { !readOnly ? <Input
          value={ profileData?.avatar }
          placeholder={ t('enterYourAvatar') }
          label={ t('enterYourAvatar') }
          readOnly={ readOnly }
          onChange={ onChangeAvatar }
        /> : null }

        { errors?.length
          ? errors.map((err) => <Text theme={ TextTheme.ERROR } text={ t(`errors.${err}`) } key={ err } /> )
          : null
        }
      </div>
    </div>
  )
}
