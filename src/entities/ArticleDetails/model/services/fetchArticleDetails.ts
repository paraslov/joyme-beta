import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'i18next'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from '../types/Article'

export const fetchArticleDetails = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleDetails',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`)

      if(!response.data) {
        throw new Error()
      }

      return response.data
    } catch (err) {
      return rejectWithValue(i18n.t('errors.serverErrorMessage', '', { ns: 'articleDetails' }))
    }
  }
)
