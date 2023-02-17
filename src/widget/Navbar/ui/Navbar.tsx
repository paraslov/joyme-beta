import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widget/ThemeSwitcher'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routes/routes'

import s from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <div className={ classNames(s.navbar, [ className ]) }>
      <ThemeSwitcher className={ s.themeToggler } />

      <div className={ s.links }>
        <AppLink theme={ AppLinkTheme.PRIMARY } to={ RoutePath.main }>{ t('topBar.main') }</AppLink>
        <AppLink theme={ AppLinkTheme.PRIMARY } to={ RoutePath.about }>{ t('topBar.about') }</AppLink>
      </div>
    </div>
  )
}
