import React, { useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import s from './ProfilePage.module.scss'
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/useDynamicModuleLoader'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

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

  useDynamicModuleLoader({ reducers, removeAfterUnmount: true })

  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [ dispatch ])

  return (
    <div className={ classNames(s.profilePage, [ className ]) }>
      <ProfileCard />
    </div>
  )
}

export default ProfilePage
