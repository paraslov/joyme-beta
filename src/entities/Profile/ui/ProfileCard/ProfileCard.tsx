import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Preloader } from 'shared/ui/Preloader/Preloader'
import { Profile } from '../../model/types/Profile'

import s from './ProfileCard.module.scss'

interface ProfileCardProps {
  profileData?: Profile
  className?: string
  isLoading?: boolean
  readOnly?: boolean
  errorMessage?: string
  onChangeFirstName?: (value: string) => void
  onChangeLastName?: (value: string) => void
}

export const ProfileCard: React.FC<ProfileCardProps> = (props: ProfileCardProps) => {
  const {
    className,
    profileData,
    isLoading,
    readOnly,
    errorMessage,
    onChangeFirstName,
    onChangeLastName,
  } = props

  const { t } = useTranslation('profile')

  return (
    <div className={ classNames(s.profileCard, [ className ]) }>
      {
        isLoading ? <Preloader size={ '50px' } /> : null
      }

      <div className={ s.profileData }>
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
      </div>
    </div>
  )
}
