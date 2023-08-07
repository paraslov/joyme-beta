import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { CURRENT_LANGUAGE, EN_LANG, RU_LANG } from 'shared/config/i18/consts'

import s from './LanguageSwitcher.module.scss'

interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = memo((props: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation()
  const { className } = props

  const toggleLanguage = () => {
    const currentLanguage = i18n.language === EN_LANG ? RU_LANG : EN_LANG

    i18n.changeLanguage(currentLanguage)
    localStorage.setItem(CURRENT_LANGUAGE, currentLanguage)
  }

  return (
    <div className={ classNames(s.languageSwitcher, [ className ]) }>
      <Button
        theme={ ButtonTheme.CLEAR }
        onClick={ toggleLanguage }
      >
        { t('language') }
      </Button>
    </div>
  )
})
