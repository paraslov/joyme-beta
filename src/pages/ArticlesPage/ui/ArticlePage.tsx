import React, { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { ArticleList, ArticleListViewType } from 'entities/ArticleDetails'
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/useDynamicModuleLoader'
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slice/articlesPage'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { getArticlesErrorMessage, getArticlesIsLoading, getArticlesView } from '../model/selectors/articlesPage'
import { ArticlesPageViewSelector } from 'features/ArticlesPageViewSelector'
import { PageWrapper } from 'widget/PageWrapper'
import { fetchNextArticlesPack } from '../model/services/fetchNextArticlesPack'
import { initArticlesPage } from '../model/services/initArticlesPage'

interface ArticlePageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

const ArticlePage: React.FC<ArticlePageProps> = (props: ArticlePageProps) => {
  const {
    className,
  } = props

  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesIsLoading)
  const errorMessage = useSelector(getArticlesErrorMessage)
  const viewType = useSelector(getArticlesView)

  useDynamicModuleLoader({ reducers })
  useInitialEffect(() => {
    dispatch(initArticlesPage())
  })

  const loadNextArticlesPart = useCallback(() => {
    dispatch(fetchNextArticlesPack())
  }, [ dispatch ])

  const onViewChange = useCallback((view: ArticleListViewType) => {
    dispatch(articlesPageActions.setView(view))
  }, [ dispatch ])

  return (
    <PageWrapper
      onScrollEnd={ loadNextArticlesPart }
      className={ classNames('', [ className ]) }
      shouldSaveScrollPosition
    >
      <ArticlesPageViewSelector view={ viewType } onViewChange={ onViewChange } />
      <ArticleList articles={ articles } isLoading={ isLoading } viewType={ viewType } />
    </PageWrapper>
  )
}

export default memo(ArticlePage)
