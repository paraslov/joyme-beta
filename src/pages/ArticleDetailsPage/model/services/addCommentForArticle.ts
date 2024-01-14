import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'i18next'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { CommentDto } from 'entities/Comment'
import { getUserAuthData } from 'entities/User'
import { getArticleDetailsArticle } from 'entities/ArticleDetails/model/selectors/articleDetailsSelectors'
import { fetchArticleDetailsComments } from './fetchArticleDetailsComments'

export const addCommentForArticle = createAsyncThunk<CommentDto[], string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI
    try {

      const authData = getUserAuthData(getState())
      const article = getArticleDetailsArticle(getState())

      if (!authData || !text || !article) {
        return rejectWithValue('No data')
      }

      const response = await extra.api.post<CommentDto[]>('/comments', {
        articleId: article.id,
        userId: authData.id,
        text,
      })

      if(!response.data) {
        throw new Error()
      }

      dispatch(fetchArticleDetailsComments(article.id))

      return response.data
    } catch (err) {
      return rejectWithValue(
        i18n.t('errors.serverErrorMessageComments', '', { ns: 'articleDetails' }) || 'Some error occurred'
      )
    }
  }
)
