import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonly test: ', () => {
  test('returns profile readonly', () => {
    const state: DeepPartial<StateSchema> = { profile: {
      readonly: true
    } }
    const profileIsLoading = getProfileReadonly(state as StateSchema)

    expect(profileIsLoading).toBe(true)
  })

  test('returns default state', () => {
    const state: DeepPartial<StateSchema> = {}
    const profileIsLoading = getProfileReadonly(state as StateSchema)

    expect(profileIsLoading).toBe(undefined)
  })
})
