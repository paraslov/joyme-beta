import React, { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticlesPageFilters.module.scss'
import { ArticlesPageViewSelector } from 'features/ArticlesPageViewSelector'
import { useSelector } from 'react-redux'
import { ArticleListViewType, ArticleSortField } from 'entities/ArticleDetails'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { articlesPageActions } from '../../model/slice/articlesPage'
import { getArticlesPageOrder, getArticlesPageSort, getArticlesView } from '../../model/selectors/articlesPage'
import { useTranslation } from 'react-i18next'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import { ArticlesSortSelector } from 'features/ArticlesSortSelector'
import { SortOrder } from 'shared/types'

export const ArticlesPageFilters = memo(() => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const sortBy = useSelector(getArticlesPageSort)
  const sortOrder = useSelector(getArticlesPageOrder)

  const viewType = useSelector(getArticlesView)

  const onViewChange = useCallback((view: ArticleListViewType) => {
    dispatch(articlesPageActions.setView(view))
  }, [ dispatch ])

  const onSortByChange = useCallback((sortBy: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(sortBy))
  }, [ dispatch ])

  const onSortOrderChange = useCallback((sortOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(sortOrder))
  }, [ dispatch ])

  return (
    <div className={ classNames(s.articlesPageFilters, [], {}) }>
      <div className={ s.sortWrapper }>
        <ArticlesSortSelector
          sortBy={ sortBy }
          sortOrder={ sortOrder }
          onSortByChange={ onSortByChange }
          onOrderChange={ onSortOrderChange }
        />

        <ArticlesPageViewSelector view={ viewType } onViewChange={ onViewChange } />
      </div>

      <Card className={ s.search }>
        <Input placeholder={ t('search') } />
      </Card>
    </div>
  )
})
