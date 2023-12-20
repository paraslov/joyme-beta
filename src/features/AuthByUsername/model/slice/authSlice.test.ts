import { AuthSchema } from 'features/AuthByUsername'
import { authActions, authReducer } from './authSlice'

describe('authSlice.test: ', () => {
  test('test set username', () => {
    const state: DeepPartial<AuthSchema> = { username: 'user1' }
    const newState = authReducer(state as AuthSchema, authActions.setUsername('newUserName'))

    expect(newState).toStrictEqual({ username: 'newUserName' })
  })

  test('test set password', () => {
    const state: DeepPartial<AuthSchema> = { password: 'pass1' }
    const newState = authReducer(state as AuthSchema, authActions.setPassword('newPass'))

    expect(newState).toStrictEqual({ password: 'newPass' })
  })
})
