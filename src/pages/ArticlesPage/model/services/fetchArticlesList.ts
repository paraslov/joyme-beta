import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'i18next'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/ArticleDetails'
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/articlesPage'

interface FetchArticlesListParams {
  page: number
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListParams, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (props, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const { page } = props
    const limit = getArticlesPageLimit(getState())

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
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
