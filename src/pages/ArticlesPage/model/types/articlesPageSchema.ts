import { EntityState } from '@reduxjs/toolkit'
import { Article, ArticleListViewType } from 'entities/ArticleDetails'
import { SortOrder } from 'shared/types'
import { ArticleSortField } from 'entities/ArticleDetails'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  errorMessage?: string
  view: ArticleListViewType
  // pagination
  page: number
  limit?: number
  hasMore: boolean

  // sorting
  order: SortOrder
  sort: ArticleSortField
  search: string
  _initiated?: boolean
}
