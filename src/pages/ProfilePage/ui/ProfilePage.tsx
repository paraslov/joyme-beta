import React, { useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import s from './ProfilePage.module.scss'
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/useDynamicModuleLoader'
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading, getProfileReadonly, profileActions,
  ProfileCard,
  profileReducer
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { Preloader } from 'shared/ui/Preloader/Preloader'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

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

  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  const profileData = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const errorMessage = useSelector(getProfileError)
  const readOnly = useSelector(getProfileReadonly)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [ dispatch ])

  const onChangeFirstName = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ firstName: value }))
  }, [ dispatch ])

  const onChangeLastName = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ lastName: value }))
  }, [ dispatch ])

  if (isLoading) {
    return <div className={ classNames(s.profilePage, [ className, s.isLoading ]) }>
      <Preloader />
    </div>
  }

  if (errorMessage) {
    return <div className={ classNames(s.profilePage, [ className, s.errorMessage ]) }>
      <Text title={ t('profileError') } text={ errorMessage } textAlign={ TextAlign.CENTER } />
    </div>
  }

  return (
    <div className={ classNames(s.profilePage, [ className ]) }>
      <ProfilePageHeader />
      <ProfileCard
        profileData={ profileData }
        isLoading={ isLoading }
        readOnly={ readOnly }
        errorMessage={ errorMessage }
        onChangeFirstName={ onChangeFirstName }
        onChangeLastName={ onChangeLastName }
      />
    </div>
  )
}

export default ProfilePage
