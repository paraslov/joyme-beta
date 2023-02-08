import React from 'react'
import s from './ThemeToggler.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/light.svg'
import DarkIcon from 'shared/assets/icons/dark.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface ThemeTogglerProps {
  className?: string
}

export const ThemeToggler: React.FC<ThemeTogglerProps> = ({className}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(s.themeToggler, [className])}>
      <Button
        onClick={toggleTheme}
        theme={ButtonTheme.CLEAR}
      >
        {theme === Theme.DARK ? <LightIcon width={30} height={30} /> : <DarkIcon width={30} height={30} />}
      </Button>
    </div>
  )
}
