import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileIsLoading } from './getProfileIsLoading'

describe('getProfileIsLoading test: ', () => {
  test('returns profile isLoading', () => {
    const state: DeepPartial<StateSchema> = { profile: {
      isLoading: true
    } }
    const profileIsLoading = getProfileIsLoading(state as StateSchema)

    expect(profileIsLoading).toBe(true)
  })

  test('returns default state', () => {
    const state: DeepPartial<StateSchema> = {}
    const profileIsLoading = getProfileIsLoading(state as StateSchema)

    expect(profileIsLoading).toBe(undefined)
  })
})
