import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { fetchArticleDetails } from './fetchArticleDetails'
import { articleDetailsMock } from '../mock/articleDetailsMock'

const data = articleDetailsMock

describe('fetchArticleDetails test: ', () => {
  test('success article details fetch', async () => {
    const thunk = new TestAsyncThunk(fetchArticleDetails)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: { ...data } }))
    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toStrictEqual({ ...data })
  })

  test('failed profile fetch', async () => {
    const thunk = new TestAsyncThunk(fetchArticleDetails)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('Some error occurred')
  })
})
