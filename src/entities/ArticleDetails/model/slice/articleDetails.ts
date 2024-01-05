import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleSchema } from '../types/ArticleSchema'
import { fetchArticleDetails } from '../services/fetchArticleDetails'
import { Article } from '../types/Article'

const initialState: ArticleSchema  = {
  isLoading: false,
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleDetails.pending, (state) => {
        state.isLoading = true
        state.errorMessage = undefined
      })
      .addCase(fetchArticleDetails.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false
        state.article = action.payload
      })
      .addCase(fetchArticleDetails.rejected, (state, action) => {
        state.isLoading = false
        state.errorMessage = action.payload
      })
  }
})

export const { actions: articleDetailsActions, reducer: articleDetailsReducer } = articleDetailsSlice
