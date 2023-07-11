import React, { memo, useCallback } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../model/slice/authSlice'
import { getAuthState } from '../../model/selectors/getAuthState'
import { authByUsername } from '../../model/services/authByUsername/authByUsername'

import s from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm: React.FC<LoginFormProps> = memo((props: LoginFormProps) => {
  const {
    className,
  } = props

  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { username, password } = useSelector(getAuthState)

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

      <Button onClick={ onLoginBtnClick }>
        { t('common.login') }
      </Button>
    </div>
  )
})
