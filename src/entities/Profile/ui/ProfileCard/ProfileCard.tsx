import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selectors/getProfileData'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading'
import { getProfileError } from '../../model/selectors/getProfileError'

import s from './ProfileCard.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Preloader } from 'shared/ui/Preloader/Preloader'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard: React.FC<ProfileCardProps> = (props: ProfileCardProps) => {
  const {
    className,
  } = props

  const profileData = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const errorMessage = useSelector(getProfileError)

  const { t } = useTranslation('profile')

  return (
    <div className={ classNames(s.profileCard, [ className ]) }>
      {
        isLoading ? <Preloader size={ '50px' } /> : null
      }

      <div className={ s.header }>
        <Text title={ t('title') } />

        <Button className={ s.editBtn } theme={ ButtonTheme.OUTLINE }>
          { t('editBtn') }
        </Button>
      </div>
      { /* todo: add styles*/ }
      <div className={ s.profileData }>
        <Input
          value={ profileData?.firstName }
          placeholder={ t('enterYourFirstName') }
          label={ t('enterYourFirstName') }
        />
        <Input
          value={ profileData?.lastName }
          placeholder={ t('enterYourLastName') }
          label={ t('enterYourLastName') }
        />
      </div>
    </div>
  )
}
