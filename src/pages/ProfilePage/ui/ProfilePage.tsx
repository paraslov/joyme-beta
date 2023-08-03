import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import s from './ProfilePage.module.scss'

export interface ProfilePageProps {
  className?: string
}

const ProfilePage: React.FC<ProfilePageProps> = (props: ProfilePageProps) => {
  const {
    className,
  } = props

  const { t } = useTranslation()

  return (
    <div className={ classNames(s.profilePage, [ className ]) }>
      { t('Profile page') }
    </div>
  )
}

export default ProfilePage
