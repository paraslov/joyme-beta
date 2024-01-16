import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import s from './ArticlePage.module.scss'
import { ArticleList } from 'entities/ArticleDetails'

interface ArticlePageProps {
  className?: string
}

const ArticlePage: React.FC<ArticlePageProps> = (props: ArticlePageProps) => {
  const {
    className,
  } = props

  const { t } = useTranslation('articles')

  return (
    <div className={ classNames(s.articlePage, [ className, s.table ]) }>
      <ArticleList />
    </div>
  )
}

export default memo(ArticlePage)
