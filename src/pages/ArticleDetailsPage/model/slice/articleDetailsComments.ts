import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CommentDto } from 'entities/Comment'
import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'
import { fetchArticleDetailsComments } from '../services/fetchArticleDetailsComments'

const articleCommentsAdapter = createEntityAdapter<CommentDto>({
  selectId: (articleComment) => articleComment.id,
})

export const getArticleComments = articleCommentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || articleCommentsAdapter.getInitialState()
)

export const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: articleCommentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    errorMessage: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleDetailsComments.pending, (state) => {
        state.isLoading = true
        state.errorMessage = undefined
      })
      .addCase(fetchArticleDetailsComments.fulfilled, (state, action: PayloadAction<CommentDto[]>) => {
        state.isLoading = false
        articleCommentsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticleDetailsComments.rejected, (state, action) => {
        state.isLoading = false
        state.errorMessage = action.payload
      })
  }
})

export const {
  actions: articleDetailsCommentsActions,
  reducer: articleDetailsCommentsReducer
} = articleDetailsCommentsSlice
