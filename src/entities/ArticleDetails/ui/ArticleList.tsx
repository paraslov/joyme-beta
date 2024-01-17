import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import s from './ArticleList.module.scss'
import { Article, ArticleListViewType } from '../model/types/Article'
import { ArticleListItem } from './components/ArticleListItem/ArticleListItem'
import { Text } from 'shared/ui/Text/Text'
import { articleDetailsMock } from 'entities/ArticleDetails/model/mock/articleDetailsMock'

interface ArticleListProps {
  className?: string
  articles?: Article[]
  isLoading?: boolean
  viewType?: ArticleListViewType
}

// 23.30

export const ArticleList: React.FC<ArticleListProps> = memo((props: ArticleListProps) => {
  const {
    className,
    articles = Array(16).fill(0).map((item, i) => ({ ...articleDetailsMock, id: String(i) })),
    isLoading,
    viewType = ArticleListViewType.TABLE,
  } = props

  const { t } = useTranslation('articleDetails')

  const renderArticle = (article: Article) => {
    return <ArticleListItem className={ s.articleCard } article={ article } view={ viewType } key={ article.id } />
  }
  return (
    <div className={ classNames(s.articleList, [ className, s[viewType] ]) }>
      { articles.length > 0
        ? articles.map(renderArticle)
        : <Text text={ t('noArticles') } />
      }
    </div>
  )
})
