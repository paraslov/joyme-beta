import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

import s from './SidebarItem.module.scss'
import { SidebarItemType } from 'widget/Sidebar/model/types/sidebar'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed?: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const {
    item,
    collapsed,
  } = props

  const { t } = useTranslation()

  return (
    <div className={ classNames(s.sidebarItem, []) }>
      <AppLink className={ s.link } theme={ AppLinkTheme.PRIMARY } to={ item.route }>
        <item.Icon className={ s.linkIcon } />
        { !collapsed && t(item.text) }
      </AppLink>
    </div>
  )
})
