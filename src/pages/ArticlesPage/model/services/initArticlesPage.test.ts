import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { fetchArticlesList } from './fetchArticlesList'
import { articleDetailsMock } from 'entities/ArticleDetails'
import { initArticlesPage } from './initArticlesPage'

jest.mock('./fetchArticlesList')

describe('initArticlesPage.ts.test: ', () => {
  test('initArticlesPage success', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        limit: 5,
        hasMore: true,
        isLoading: false,
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlesList).toBeCalledWith({ page: 1 })
  })

  test('initArticlesPage not called as already has articles', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [ 1 ],
        entities: {
          '1': {
            ...articleDetailsMock,
          }
        },
        limit: 5,
        hasMore: false,
        isLoading: false,
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toBeCalled()
  })
})

