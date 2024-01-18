import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'i18next'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/ArticleDetails'

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
        }
      })

      if(!response.data) {
        throw new Error('No data')
      }

      return response.data
    } catch (err) {
      return rejectWithValue(
        i18n.t('errors.fetchArticlesList', 'Some error occurred', { ns: 'articles' })
      )
    }
  }
)
