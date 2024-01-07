import React, { memo, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/useDynamicModuleLoader'
import { articleDetailsReducer } from '../model/slice/articleDetails'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchArticleDetails } from '../model/services/fetchArticleDetails'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsArticle,
  getArticleDetailsErrorMessage,
  getArticleDetailsIsLoading
} from '../model/selectors/articleDetailsSelectors'
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import EyeIcon from '../../../shared/assets/icons/eye.svg'
import TimeIcon from '../../../shared/assets/icons/time.svg'
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar'
import { Icon } from 'shared/ui/Icon/Icon'
import { ArticleBlock, ArticleBlockType } from '../model/types/Article'
import { ArticleTextBlock } from './components/ArticleTextBlock/ArticleTextBlock'
import { ArticleImageBlock } from './components/ArticleImageBlock/ArticleImageBlock'
import { ArticleCodeBlock } from './components/ArticleCodeBlock/ArticleCodeBlock'

import s from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
  articleId?: string
  className?: string
}

const reducers: ReducersList = {
  article: articleDetailsReducer,
}

export const ArticleDetails: React.FC<ArticleDetailsProps> = memo((props: ArticleDetailsProps) => {
  const {
    className,
    articleId,
  } = props

  useDynamicModuleLoader({ reducers, removeAfterUnmount: true })

  const dispatch = useAppDispatch()
  const { t } = useTranslation('articleDetails')
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const errorMessage = useSelector(getArticleDetailsErrorMessage)
  const article = useSelector(getArticleDetailsArticle)

  useEffect(() => {
    if (articleId && $PROJECT !== 'storybook') {
      dispatch(fetchArticleDetails(articleId))
    }
  }, [ articleId, dispatch ])

  const renderArticleBlocks = useCallback((articleBlocks?: ArticleBlock[]) => {
    if (!articleBlocks?.length) return null

    return articleBlocks.map((articleBlock) => {
      if (articleBlock.type === ArticleBlockType.TEXT) {
        return <ArticleTextBlock className={ s.blocks } key={ articleBlock.id } block={ articleBlock } />
      } else if (articleBlock.type === ArticleBlockType.IMAGE) {
        return <ArticleImageBlock className={ s.blocks } key={ articleBlock.id } block={ articleBlock } />
      } else if (articleBlock.type === ArticleBlockType.CODE) {
        return <ArticleCodeBlock className={ s.blocks } key={ articleBlock.id } block={ articleBlock } />
      } else {
        return null
      }
    })
  }, [])

  if (!articleId) {
    return (<div className={ classNames(s.articleDetails, [ className ]) }>
      { t('articleNotFound') }
    </div>)
  }

  if (isLoading) {
    return (<div className={ classNames(s.articleDetails, [ className ]) }>
      <div className={ s.avatar }>
        <Skeleton width={ '100px' } height={ '100px' } borderRadius={ '50%' } />
      </div>
      <Skeleton className={ s.title } width={ '300px' } height={ '32px' } />
      <Skeleton className={ s.blocks } width={ '600px' } height={ '24px' } />
      <Skeleton className={ s.blocks } width={ '100%' } height={ '200px' } />
      <Skeleton className={ s.blocks } width={ '100%' } height={ '200px' } />
    </div>)
  }

  if (errorMessage) {
    return (<div className={ classNames(s.articleDetails, [ className ]) }>
      <Text title={ errorMessage } textAlign={ TextAlign.CENTER } theme={ TextTheme.ERROR } />
    </div>)
  }

  return (
    <div className={ classNames(s.articleDetails, [ className ]) }>
      <div className={ s.avatar }>
        <Avatar src={ article?.img } size={ AvatarSize.MEDIUM } />
      </div>

      <Text title={ article?.title } text={ article?.subtitle } textSize={ TextSize.LARGE } />

      <div className={ s.infoWrapper }>
        <div className={ s.info }>
          <Icon Svg={ EyeIcon } width={ '24px' } height={ '24px' } />
          <Text text={ String(article?.views) } />
        </div>

        <div className={ s.info }>
          <Icon Svg={ TimeIcon } width={ '24px' } height={ '24px' } />
          <Text text={ article?.createdAt } />
        </div>
      </div>

      { renderArticleBlocks(article?.blocks) }
    </div>
  )
})
