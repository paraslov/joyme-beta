import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'i18next'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { CommentDto } from 'entities/Comment'

export const fetchArticleDetailsComments = createAsyncThunk<CommentDto[], string | undefined, ThunkConfig<string>>(
  'articleDetails/fetchArticleDetailsComments',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      if (!articleId) {
        throw new Error()
      }

      const response = await extra.api.get<CommentDto[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        }
      })

      if(!response.data) {
        throw new Error()
      }

      return response.data
    } catch (err) {
      return rejectWithValue(
        i18n.t('errors.serverErrorMessageComments', '', { ns: 'articleDetails' }) || 'Some error occurred'
      )
    }
  }
)
