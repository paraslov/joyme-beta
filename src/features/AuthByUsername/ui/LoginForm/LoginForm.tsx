import React, { memo, useCallback } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../model/slice/authSlice'
import { getAuthState } from '../../model/selectors/getAuthState'
import { authByUsername } from '../../model/services/authByUsername/authByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'

import s from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
}

const LoginForm: React.FC<LoginFormProps> = memo((props: LoginFormProps) => {
  const {
    className,
  } = props

  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { username, password, errorMessage, isLoading } = useSelector(getAuthState)

  const onChangeUsername = useCallback((username: string) => {
    dispatch(authActions.setUsername(username))
  }, [ dispatch ])

  const onChangePassword = useCallback((password: string) => {
    dispatch(authActions.setPassword(password))
  }, [ dispatch ])

  const onLoginBtnClick = useCallback(() => {
    dispatch(authByUsername({ username, password }))
  }, [ dispatch, password, username ])

  return (
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
  )
})

export default LoginForm
