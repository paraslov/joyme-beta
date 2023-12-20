import { StateSchema } from 'app/providers/StoreProvider'
import { getAuthState } from './getAuthState'

describe('getAuthState test: ', () => {
  test('returns authState', () => {
    const state: DeepPartial<StateSchema> = { authForm: {
      username: 'user',
      password: 'pass',
      errorMessage: 'error',
      isLoading: true,
    } }
    const authState = getAuthState(state as StateSchema)

    expect(authState).toStrictEqual({
      username: 'user',
      password: 'pass',
      errorMessage: 'error',
      isLoading: true,
    })
  })

  test('returns default state', () => {
    const state: DeepPartial<StateSchema> = {}
    const authState = getAuthState(state as StateSchema)

    expect(authState).toStrictEqual({
      username: '',
      password: '',
      errorMessage: '',
      isLoading: false
    })
  })
})
