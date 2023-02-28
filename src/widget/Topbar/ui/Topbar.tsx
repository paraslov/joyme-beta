import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widget/ThemeSwitcher'
import { useTranslation } from 'react-i18next'

import s from './Topbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Topbar: React.FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <div className={ classNames(s.topbar, [ className ]) }>
      <ThemeSwitcher className={ s.themeToggler } />

      <div className={ s.appName }>
        { t('JoyMe Studios') }
      </div>
    </div>
  )
}
