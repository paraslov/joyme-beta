import React, { memo, useCallback } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { authActions, authReducer } from '../../model/slice/authSlice'
import { getAuthState } from '../../model/selectors/getAuthState'
import { authByUsername } from '../../model/services/authByUsername/authByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

import s from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
  onSuccess?: () => void
}

const initialReducers: ReducersList = {
  authForm: authReducer
}

const LoginForm = memo((props: LoginFormProps) => {
  const {
    className,
    onSuccess,
  } = props

  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const {
    username = '',
    password = '',
    errorMessage = '',
    isLoading = false
  } = useSelector(getAuthState)

  const onChangeUsername = useCallback((username: string) => {
    dispatch(authActions.setUsername(username))
  }, [ dispatch ])

  const onChangePassword = useCallback((password: string) => {
    dispatch(authActions.setPassword(password))
  }, [ dispatch ])

  const onLoginBtnClick = useCallback(async () => {
    const result = await dispatch(authByUsername({ username, password }))

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.()
    }
  }, [ dispatch, password, username, onSuccess ])

  return (
    <DynamicModuleLoader reducers={ initialReducers }>
      <div className={ classNames(s.loginForm, [ className ]) }>
        <Text title={ t('auth.title') } />

        { errorMessage ? <Text text={ errorMessage } theme={ TextTheme.ERROR }>{ errorMessage }</Text> : null }

        <Input
          className={ s.loginInput }
          autoFocus
          label={ t('auth.email') }
          value={ username }
          onChange={ onChangeUsername }
        />

        <Input
          className={ s.loginInput }
          label={ t('auth.password') }
          value={ password }
          onChange={ onChangePassword }
        />

        <Button
          theme={ ButtonTheme.OUTLINE }
          disabled={ isLoading }
          onClick={ onLoginBtnClick }
        >
          { t('common.login') }
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
