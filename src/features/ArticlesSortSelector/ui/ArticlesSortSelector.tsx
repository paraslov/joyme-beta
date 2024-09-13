import React, { memo, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Select } from 'shared/ui/Select/Select'
import { useTranslation } from 'react-i18next'
import s from './ArticlesSortSelector.module.scss'
import { ArticleSortField } from 'entities/ArticleDetails'
import { SortOrder } from 'shared/types'

type ArticlesSortSelectorProps = {
  className?: string
  sortBy: ArticleSortField
  sortOrder: SortOrder
  onSortByChange: (sortBy: ArticleSortField) => void
  onOrderChange: (sortOrder: SortOrder) => void
}

export const ArticlesSortSelector = memo((props: ArticlesSortSelectorProps) => {
  const { sortBy, sortOrder, onSortByChange, onOrderChange } = props
  const { t } = useTranslation('articles')

  const sortDirectionOptions = useMemo(() => [
    {
      value: 'asc',
      content: t('sorting.ascendant')
    },
    {
      value: 'desc',
      content: t('sorting.descendant')
    },
  ], [ t ])

  const sortFieldOptions = useMemo(() => [
    {
      value: ArticleSortField.CREATED_AT,
      content: t('sorting.createdAt')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('sorting.title')
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('sorting.views')
    },
  ], [ t ])

  return (
    <div className={ classNames(s.articlesSortSelector, [], {}) }>
      <Select
        label={ t('sorting.sortBy') }
        options={ sortFieldOptions }
        value={ sortBy }
        onChange={ onSortByChange as any }
      />

      <Select
        label={ t('sorting.direction') }
        options={ sortDirectionOptions }
        value={ sortOrder }
        onChange={ onOrderChange as any }
      />
    </div>
  )
})
