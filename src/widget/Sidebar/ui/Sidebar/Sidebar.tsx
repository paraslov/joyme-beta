import React, { memo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonSize } from 'shared/ui/Button/Button'
import { LanguageSwitcher } from 'widget/LanguageSwitcher'
import { SidebarItem } from '../SidebarItem/SidebarItem'

import s from './Sidebar.module.scss'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [ collapsed, setCollapsed ] = useState(false)
  const SidebarItemsList = useSelector(getSidebarItems)

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
        size={ ButtonSize.XL }
      >
        { collapsed ? '>' : '<' }
      </Button>
      { /*<_BugButton />*/ }
      <div className={ s.links }>
        {
          SidebarItemsList.map((item) => {
            return <SidebarItem key={ item.route } item={ item } collapsed={ collapsed } />
          })
        }
      </div>

      <div className={ s.switchers }>
        <LanguageSwitcher />
      </div>
    </div>
  )
})
