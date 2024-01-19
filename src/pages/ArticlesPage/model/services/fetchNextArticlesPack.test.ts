import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { fetchNextArticlesPack } from './fetchNextArticlesPack'
import { fetchArticlesList } from './fetchArticlesList'

jest.mock('./fetchArticlesList')

describe('fetchNestArticlesPack.test: ', () => {
  test('fetchNestArticlesPack success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPack, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        hasMore: true,
        isLoading: false,
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlesList).toBeCalledWith({ page: 3 })
  })

  test('fetchArticlesList not called as hasMore false', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPack, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        hasMore: false,
        isLoading: false,
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toBeCalled()
  })

  test('fetchArticlesList not called as isLoading true', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPack, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        hasMore: false,
        isLoading: true,
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toBeCalled()
  })
})

