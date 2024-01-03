import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import s from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = (props: ArticleDetailsPageProps) => {
  const {
    className,
  } = props

  const { t } = useTranslation('articleDetails')

  return (
    <div className={ classNames(s.articleDetailsPage, [ className ]) }>
      { t('title') }
    </div>
  )
}

export default memo(ArticleDetailsPage)
