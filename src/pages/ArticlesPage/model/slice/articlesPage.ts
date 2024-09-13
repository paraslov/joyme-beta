import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Article, ArticleListViewType } from 'entities/ArticleDetails'
import { StateSchema } from 'app/providers/StoreProvider'
import { ARTICLE_PAGE_VIEW_TYPE } from 'shared/consts/localStorage'
import { ArticleSortField } from 'entities/ArticleDetails'
import { SortOrder } from 'shared/types'

import { ArticlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList'

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
)

export const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    view: ArticleListViewType.LIST,
    ids: [],
    entities: {},
    page: 1,
    hasMore: true,
    search: '',
    sort: ArticleSortField.CREATED_AT,
    order: 'asc',
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleListViewType>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLE_PAGE_VIEW_TYPE, action.payload)
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLE_PAGE_VIEW_TYPE) as ArticleListViewType
      state.view = view
      state.limit = view === ArticleListViewType.LIST ? 4 : 8
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true
        state.errorMessage = undefined
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        articlesAdapter.addMany(state, action.payload)
        state.hasMore = action.payload.length > 0
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.errorMessage = action.payload
      })
  }
})

export const {
  actions: articlesPageActions,
  reducer: articlesPageReducer
} = articlesPageSlice
