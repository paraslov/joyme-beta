import { EntityState } from '@reduxjs/toolkit'
import { Article, ArticleListViewType } from 'entities/ArticleDetails'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  errorMessage?: string
  view: ArticleListViewType
  // pagination
  page: number
  limit?: number
  hasMore: boolean
}
