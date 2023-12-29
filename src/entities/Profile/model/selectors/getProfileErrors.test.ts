import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileErrors } from './getProfileErrors'
import { ValidateProfileErrors } from '../types/ValidateProfileErrors'

describe('getProfileErrors test: ', () => {
  test('returns profile validation errors', () => {
    const state: DeepPartial<StateSchema> = { profile: {
      errors: [ ValidateProfileErrors.INCORRECT_AGE, ValidateProfileErrors.NOT_FILLED_DATA ]
    } }
    const profileValidationErrors = getProfileErrors(state as StateSchema)

    expect(profileValidationErrors)
      .toStrictEqual([ ValidateProfileErrors.INCORRECT_AGE, ValidateProfileErrors.NOT_FILLED_DATA ])
  })

  test('returns default state', () => {
    const state: DeepPartial<StateSchema> = {}
    const profileValidationErrors = getProfileErrors(state as StateSchema)

    expect(profileValidationErrors).toBe(undefined)
  })
})
