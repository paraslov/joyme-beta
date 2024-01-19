import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { articlesPageActions } from '../slice/articlesPage'
import { fetchArticlesList } from './fetchArticlesList'
import { getArticlesIsLoading, getArticlesPageHasMore, getArticlesPageNum } from '../selectors/articlesPage'

export const fetchNextArticlesPack = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNestArticlesPack',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const hasMoreArticles = getArticlesPageHasMore(getState())
    const isLoading = getArticlesIsLoading(getState())
    const page = getArticlesPageNum(getState())

    if (hasMoreArticles && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1))
      dispatch(fetchArticlesList({ page: page + 1 }))
    }
  }
)
