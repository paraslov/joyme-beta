import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { articlesPageActions, getArticles } from '../slice/articlesPage'
import { fetchArticlesList } from './fetchArticlesList'

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const articles = getArticles.selectAll(getState())
    console.log('@> articles: ', articles)

    if (!articles?.length) {
      dispatch(articlesPageActions.initState())
      dispatch(fetchArticlesList({ page: 1 }))
    }
  }
)
