import React, { useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/useDynamicModuleLoader'
import {
  fetchProfileData,
  getProfileError,
  getProfileFormData,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { Preloader } from 'shared/ui/Preloader/Preloader'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/CurrencySelect'
import { Country } from 'entities/CountrySelect'

import s from './ProfilePage.module.scss'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useNavigate, useParams } from 'react-router-dom'
import { getUserAuthData } from 'entities/User'
import { RoutePath } from 'shared/config/routes/routes'
import { PageWrapper } from 'widget/PageWrapper'

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
  const { profileId } = useParams<{ profileId: string }>()
  const authData = useSelector(getUserAuthData)
  const navigate = useNavigate()

  const profileData = useSelector(getProfileFormData)
  const isLoading = useSelector(getProfileIsLoading)
  const errorMessage = useSelector(getProfileError)
  const readOnly = useSelector(getProfileReadonly)

  const canEdit = authData?.id === profileId

  useInitialEffect(() => {
    if (profileId === '0' && authData?.id) {
      navigate(`${RoutePath.profile}/${authData.id}`)

      return
    }

    if (profileId) {
      dispatch(fetchProfileData(profileId))
    }
  })

  const onChangeFirstName = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ firstName: value }))
  }, [ dispatch ])

  const onChangeLastName = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ lastName: value }))
  }, [ dispatch ])

  const onChangeAge = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ age: value }))
  }, [ dispatch ])

  const onChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ username: value }))
  }, [ dispatch ])

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }))
  }, [ dispatch ])

  const onChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ city: value }))
  }, [ dispatch ])

  const onChangeCurrency = useCallback((value: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }))
  }, [ dispatch ])

  const onChangeCountry = useCallback((value: Country) => {
    dispatch(profileActions.updateProfile({ country: value }))
  }, [ dispatch ])

  if (isLoading) {
    return <PageWrapper className={ classNames(s.profilePage, [ className, s.isLoading ]) }>
      <Preloader />
    </PageWrapper>
  }

  if (errorMessage) {
    return <PageWrapper className={ classNames(s.profilePage, [ className, s.errorMessage ]) }>
      <Text title={ t('profileError') } text={ errorMessage } textAlign={ TextAlign.CENTER } />
    </PageWrapper>
  }

  return (
    <PageWrapper className={ classNames(s.profilePage, [ className ]) }>
      <ProfilePageHeader canEdit={ canEdit } />

      <ProfileCard
        profileData={ profileData }
        isLoading={ isLoading }
        readOnly={ readOnly }
        errorMessage={ errorMessage }
        onChangeFirstName={ onChangeFirstName }
        onChangeLastName={ onChangeLastName }
        onChangeAge={ onChangeAge }
        onChangeUsername={ onChangeUsername }
        onChangeAvatar={ onChangeAvatar }
        onChangeCity={ onChangeCity }
        onChangeCurrency={ onChangeCurrency }
        onChangeCountry={ onChangeCountry }
      />
    </PageWrapper>
  )
}

export default ProfilePage
