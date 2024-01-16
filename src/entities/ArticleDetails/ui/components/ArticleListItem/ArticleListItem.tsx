import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Article, ArticleListViewType } from '../../../model/types/Article'
import Eye from 'shared/assets/icons/eye.svg'

import s from './ArticleListItem.module.scss'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import { Card } from 'shared/ui/Card/Card'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleListViewType
}

export const ArticleListItem: React.FC<ArticleListItemProps> = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view,
  } = props

  if (view === ArticleListViewType.TABLE) {
    return <div className={ classNames(s.articleListItem, [ className, s[view] ]) }>
      <Card>
        <div className={ s.imageWrapper }>
          <img className={ s.img } alt={ article.title } src={ article.img } />
          <Text className={ s.date } text={ article.createdAt } textSize={ TextSize.SMALL } />
        </div>

        <div className={ s.info }>
          <Text className={ s.types } text={ article.type.join(', ') } textSize={ TextSize.SMALL } />
          <Text className={ s.views } text={ String(article.views) } />
          <Icon Svg={ Eye } />
        </div>

        <Text className={ s.title } text={ article.title } />
      </Card>
    </div>
  }

  return (
    <div className={ classNames(s.articleListItem, [ className, view ]) }>
      { article.title }
    </div>
  )
})
