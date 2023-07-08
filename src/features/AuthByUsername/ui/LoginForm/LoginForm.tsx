import React from 'react'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import s from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  const {
    className,
  } = props

  const { t } = useTranslation()

  return (
    <div className={ classNames(s.loginForm, [ className ]) }>
      <Input className={ s.loginInput } autoFocus label={ t('auth.email') } />
      <Input className={ s.loginInput }  label={ t('auth.password') } />
      <Button>
        { t('common.login') }
      </Button>
    </div>
  )
}
