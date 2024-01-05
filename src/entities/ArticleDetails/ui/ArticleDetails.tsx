import React, { memo, useEffect } from 'react'
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
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

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
    if (articleId) {
      dispatch(fetchArticleDetails(articleId))
    }
  }, [ articleId, dispatch ])

  if (!articleId) {
    return (<div className={ classNames(s.articleDetails, [ className ]) }>
      { t('articleNotFound') }
    </div>)
  }

  if (isLoading) {
    return (<div className={ classNames(s.articleDetails, [ className ]) }>
      <Skeleton className={ s.avatar } width={ '100px' } height={ '100px' } borderRadius={ '50%' } />
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
      { errorMessage }
      { t('title') }
    </div>
  )
})
