import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { ArticleList } from 'entities/ArticleDetails'

interface ArticlePageProps {
  className?: string
}

const ArticlePage: React.FC<ArticlePageProps> = (props: ArticlePageProps) => {
  const {
    className,
  } = props

  return (
    <div className={ classNames('', [ className ]) }>
      <ArticleList />
    </div>
  )
}

export default memo(ArticlePage)
