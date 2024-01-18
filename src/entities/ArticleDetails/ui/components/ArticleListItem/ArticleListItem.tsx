import React, { memo, useCallback, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Article, ArticleBlockType, ArticleListViewType, ArticleTextBlockDto } from '../../../model/types/Article'
import Eye from 'shared/assets/icons/eye.svg'

import s from './ArticleListItem.module.scss'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import { Card } from 'shared/ui/Card/Card'
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { ArticleTextBlock } from 'entities/ArticleDetails/ui/components/ArticleTextBlock/ArticleTextBlock'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routes/routes'

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

  const { t } = useTranslation('articleDetails')
  const navigate = useNavigate()

  const onArticleClick = useCallback(() => {
    navigate(`${RoutePath.article_details}/${article.id}`)
  }, [ article.id, navigate ])

  const textBlock = useMemo(() => {
    return article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlockDto
  }, [ article.blocks ])

  if (view === ArticleListViewType.TABLE) {
    return <div className={ classNames(s.articleListItem, [ className, s[view] ]) }>
      <Card onClick={ onArticleClick }>
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
    <div className={ classNames(s.articleListItem, [ className, s[view] ]) }>
      <Card>
        <div className={ s.header }>
          <Avatar src={ article.user?.avatar } alt={ article.title } size={ AvatarSize.SMALL } />
          <Text className={ s.username } text={ article.user?.username } textSize={ TextSize.SMALL } />
          <Text className={ s.date } text={ article.createdAt } textSize={ TextSize.SMALL } />
        </div>

        <Text className={ s.title } title={ article.title } />
        <Text className={ s.tags } text={ article.type.join(', ') } textSize={ TextSize.SMALL }/>

        <div className={ s.imageWrapper }>
          <img className={ s.img } src={ article.img } alt={ article.title }/>
        </div>

        <div className={ s.articleTextBlock }>
          { textBlock ? <ArticleTextBlock block={ textBlock } /> : null }
        </div>

        <div className={ s.footer }>
          <Button theme={ ButtonTheme.OUTLINE } onClick={ onArticleClick }>
            { t('btns.readMore') }
          </Button>
          <Text className={ s.views } text={ String(article.views) } />
          <Icon Svg={ Eye } />
        </div>
      </Card>
    </div>
  )
})
