import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/ArticleDetails'
import { useParams } from 'react-router-dom'

import s from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = (props: ArticleDetailsPageProps) => {
  const {
    className,
  } = props

  let { id: articleId } = useParams<{id: string}>()

  if ($PROJECT === 'storybook') {
    articleId = '1'
  }

  return (
    <div className={ classNames(s.articleDetailsPage, [ className ]) }>
      <ArticleDetails articleId={ articleId } />
    </div>
  )
}

export default memo(ArticleDetailsPage)
