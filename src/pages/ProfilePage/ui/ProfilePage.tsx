import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import s from './ProfilePage.module.scss'
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/useDynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

export interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage: React.FC<ProfilePageProps> = (props: ProfilePageProps) => {
  const {
    className,
  } = props

  const { t } = useTranslation()

  useDynamicModuleLoader({ reducers, removeAfterUnmount: true })

  return (
    <div className={ classNames(s.profilePage, [ className ]) }>
      { t('Profile page') }
    </div>
  )
}

export default ProfilePage
