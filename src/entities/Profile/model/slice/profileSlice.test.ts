import { profileActions, profileReducer } from './profileSlice'
import { ProfileSchema } from '../types/Profile'
import { ValidateProfileErrors } from '../types/ValidateProfileErrors'
import { Currency } from 'entities/CurrencySelect'
import { Country } from 'entities/CountrySelect'
import { saveProfileData } from '../services/saveProfileData/saveProfileData'
import { fetchProfileData } from 'entities/Profile'

describe('==> profileSlice.test: ', () => {
  test('=> set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true }
    const newState = profileReducer(state as ProfileSchema, profileActions.setReadonly(false))

    expect(newState).toStrictEqual({ readonly: false })
  })

  test('=> cancel edit action', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: {
        firstName: 'Vasya',
        lastName: 'Pupkin',
        username: 'Uromiru',
        age: '33',
        currency: Currency.RUB,
        country: Country.KZ,
        city: 'Voronejjj',
      },
      formData: {
        firstName: 'Vasya123',
        lastName: 'Pupkin123',
        username: 'Uromiru',
        age: '37',
        currency: Currency.USD,
        country: Country.KZ,
        city: 'Voronejjj',
      },
      readonly: false,
      errors: [ ValidateProfileErrors.NOT_FILLED_DATA ],
    }
    const newState = profileReducer(state as ProfileSchema, profileActions.cancelEdit())

    expect(newState.formData).toStrictEqual(state.data)
    expect(newState.readonly).toBe(true)
    expect(newState.errors).toBe(undefined)
  })

  test('=> update profile action', () => {
    const state: DeepPartial<ProfileSchema> = {
      formData: {
        firstName: 'Vasya',
        lastName: 'Pupkin',
        username: 'Uromiru',
        age: '33',
        currency: Currency.USD,
        country: Country.KZ,
        city: 'Voronejjj',
      },
    }
    const newState = profileReducer(state as ProfileSchema, profileActions.updateProfile({
      firstName: 'Sergio',
      lastName: 'Balani',
      username: 'JoyMe',
      age: '38',
      currency: Currency.EUR,
      country: Country.CY,
      city: 'Limassol',
    }))

    expect(newState.formData).toStrictEqual({
      firstName: 'Sergio',
      lastName: 'Balani',
      username: 'JoyMe',
      age: '38',
      currency: Currency.EUR,
      country: Country.CY,
      city: 'Limassol',
    })
  })

  test('=> save profile pending state', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      errorMessage: 'Error',
      errors: [ ValidateProfileErrors.NOT_DATA ]
    }
    const newState = profileReducer(state as ProfileSchema, saveProfileData.pending)

    expect(newState).toStrictEqual({ isLoading: true, errorMessage: undefined, errors: undefined })
  })

  test('=> fetch profile rejected state', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      errorMessage: undefined,
    }
    const newState = profileReducer(
      state as ProfileSchema,
      fetchProfileData.rejected(new Error('Error occurred'), '', '1', 'Error occurred')
    )

    expect(newState).toStrictEqual({ isLoading: false, errorMessage: 'Error occurred' })
  })

  test('=> fetch profile fulfilled state', () => {
    const data = {
      firstName: 'Vasya',
      lastName: 'Pupkin',
      username: 'Uromiru',
      age: '33',
      currency: Currency.USD,
      country: Country.KZ,
      city: 'Voronejjj',
    }
    const state: DeepPartial<ProfileSchema> = {
      formData: undefined,
      data: undefined,
      isLoading: true,
    }
    const newState = profileReducer(
      state as ProfileSchema,
      fetchProfileData.fulfilled(data, '1', '1')
    )

    expect(newState).toStrictEqual({ formData: data, data, isLoading: false })
  })
})
