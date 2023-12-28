import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'

describe('getProfileError test: ', () => {
  test('returns profile error message', () => {
    const state: DeepPartial<StateSchema> = { profile: {
      errorMessage: 'Some error occurred'
    } }
    const profileErrorMessage = getProfileError(state as StateSchema)

    expect(profileErrorMessage).toBe('Some error occurred')
  })

  test('returns default state', () => {
    const state: DeepPartial<StateSchema> = {}
    const profileErrorMessage = getProfileError(state as StateSchema)

    expect(profileErrorMessage).toBe(undefined)
  })
})
