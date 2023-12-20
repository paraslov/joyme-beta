import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { authByUsername } from './authByUsername'
import { userActions } from 'entities/User'

describe('authByUsername.test: ', () => {
  // let dispatch: Dispatch
  // let getState: () => StateSchema
  //
  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })
  //
  // test('success auth', async () => {
  //   const responseValue = { username: 'user1', id: 1 }
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: responseValue }))
  //   const action = authByUsername({ username: 'myLogin', password: 'myPass' })
  //   const result = await action(dispatch, getState, undefined)
  //   console.log(result)
  //
  //   expect(dispatch).toBeCalledWith(userActions.setAuthData(responseValue))
  //   expect(dispatch).toBeCalledTimes(3)
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('fulfilled')
  //   expect(result.payload).toStrictEqual(responseValue)
  // })
  //
  // test('failed auth', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
  //   const action = authByUsername({ username: 'myLogin', password: 'myPass' })
  //   const result = await action(dispatch, getState, undefined)
  //   console.log(result)
  //
  //   expect(dispatch).toBeCalledTimes(2)
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('rejected')
  // })

  test('success auth', async () => {
    const responseValue = { username: 'user1', id: 1 }

    const thunk = new TestAsyncThunk(authByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: responseValue }))
    const result = await thunk.callThunk({ username: 'myLogin', password: 'myPass' })

    expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(responseValue))
    expect(thunk.dispatch).toBeCalledTimes(3)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toStrictEqual(responseValue)
  })

  test('failed auth', async () => {
    const thunk = new TestAsyncThunk(authByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk({ username: 'myLogin', password: 'myPass' })

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
