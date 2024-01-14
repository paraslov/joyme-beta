import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { addCommentForArticle } from './addCommentForArticle'

const data = { addComments: { text: 'some comment occurred 123' }, article: { article: { id: '1' } }, user: { authData: { id: 1 } }  }

describe('addCommentForArticle.test: ', () => {
  test('success addCommentForArticle save', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, { ...data })
    thunk.api.post.mockReturnValue(Promise.resolve({ data: { text: 'some comment text', id: '1' } }))
    const result = await thunk.callThunk('some comment text')

    expect(thunk.api.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toStrictEqual({ text: 'some comment text', id: '1' })
  })

  test('failed addCommentForArticle save: server error', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, { ...data })
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('some comment text')

    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toStrictEqual('Some error occurred')
  })

  test('failed addCommentForArticle save: no data', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, { ...data, article: {} })
    thunk.api.post.mockReturnValue(Promise.resolve({ data: { } }))
    const result = await thunk.callThunk('some comment text')

    expect(thunk.api.post).toHaveBeenCalledTimes(0)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toStrictEqual('No data')
  })
})
