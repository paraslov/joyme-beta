import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { LanguageSwitcher } from 'widget/LanguageSwitcher'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routes/routes'
import { useTranslation } from 'react-i18next'
import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

import s from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation()
  const [ collapsed, setCollapsed ] = useState(false)

  const onToggleCollapsed = () => {
    setCollapsed(prevState => !prevState)
  }

  return (
    <div
      data-testid="sidebar"
      className={ classNames(s.sidebar, [ className ], { [s.collapsed]: collapsed }) }
    >
      <Button
        className={ s.collapsedBtn }
        data-testid="sidebar-toggle"
        onClick={ onToggleCollapsed }
        square
        size={ ButtonSize.L }
        theme={ ButtonTheme.OUTLINE }
      >
        { collapsed ? '>' : '<' }
      </Button>
      { /*<_BugButton />*/ }
      <div className={ s.links }>
        <AppLink className={ s.link } theme={ AppLinkTheme.PRIMARY } to={ RoutePath.main }>
          <HomeIcon className={ s.linkIcon } />
          { !collapsed && t('topBar.main') }
        </AppLink>
        <AppLink className={ s.link } theme={ AppLinkTheme.PRIMARY } to={ RoutePath.about }>
          <AboutIcon className={ s.linkIcon } />
          { !collapsed && t('topBar.about') }
        </AppLink>
      </div>

      <div className={ s.switchers }>
        <LanguageSwitcher />
      </div>
    </div>
  )
}
