import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import s from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorProps {
  className?: string
}

export const PageError: React.FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={ classNames(s.pageError, [ className ]) }>
      <p className={ s.errorText }>{ t('errors.pageError') }</p>
      <Button onClick={ reloadPage }>
        { t('common.refreshPage') }
      </Button>
    </div>
  )
}
