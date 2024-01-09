import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/ArticleDetails'
import { useParams } from 'react-router-dom'

import s from './ArticleDetailsPage.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentList } from 'entities/Comment'
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/useDynamicModuleLoader'
import { useSelector } from 'react-redux'
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsComments'
import {
  getArticleDetailsCommentsErrorMessage,
  getArticleDetailsCommentsIsLoading,
} from '../model/selectors/articleDetailsCommentsSelectors'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchArticleDetailsComments } from '../model/services/fetchArticleDetailsComments'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = (props: ArticleDetailsPageProps) => {
  const {
    className,
  } = props

  useDynamicModuleLoader({ reducers, removeAfterUnmount: true })

  const { t } = useTranslation('articleDetails')
  let { id: articleId } = useParams<{id: string}>()
  const dispatch = useAppDispatch()

  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading)
  const commentsErrorMessage = useSelector(getArticleDetailsCommentsErrorMessage)

  useInitialEffect(() => {
    dispatch(fetchArticleDetailsComments(articleId))
  })

  if ($PROJECT === 'storybook') {
    articleId = '1'
  }

  return (
    <div className={ classNames(s.articleDetailsPage, [ className ]) }>
      <ArticleDetails articleId={ articleId } />

      <Text className={ s.commentTitle } title={ t('comments') } />

      { !commentsErrorMessage
        ? <CommentList comments={ comments } isLoading={ commentsIsLoading }/>
        : <Text text={ commentsErrorMessage } />
      }
    </div>
  )
}

export default memo(ArticleDetailsPage)
