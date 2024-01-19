import React, { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { ArticleList, ArticleListViewType } from 'entities/ArticleDetails'
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/useDynamicModuleLoader'
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slice/articlesPage'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList'
import { useSelector } from 'react-redux'
import { getArticlesErrorMessage, getArticlesIsLoading, getArticlesView } from '../model/selectors/articlesPage'
import { ArticlesPageViewSelector } from 'features/ArticlesPageViewSelector'
import { PageWrapper } from 'widget/PageWrapper/PageWrapper'
import { fetchNextArticlesPack } from 'pages/ArticlesPage/model/services/fetchNextArticlesPack'

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

  useDynamicModuleLoader({ reducers, removeAfterUnmount: true })
  useInitialEffect(() => {
    dispatch(articlesPageActions.initState())
    dispatch(fetchArticlesList({ page: 1 }))
  })

  const loadNextArticlesPart = useCallback(() => {
    dispatch(fetchNextArticlesPack())
  }, [ dispatch ])

  const onViewChange = useCallback((view: ArticleListViewType) => {
    dispatch(articlesPageActions.setView(view))
  }, [ dispatch ])

  return (
    <PageWrapper onScrollEnd={ loadNextArticlesPart } className={ classNames('', [ className ]) }>
      <ArticlesPageViewSelector view={ viewType } onViewChange={ onViewChange } />
      <ArticleList articles={ articles } isLoading={ isLoading } viewType={ viewType } />
    </PageWrapper>
  )
}

export default memo(ArticlePage)
