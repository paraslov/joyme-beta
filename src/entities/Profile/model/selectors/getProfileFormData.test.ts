import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileFormData } from './getProfileFormData'
import { Currency } from 'entities/CurrencySelect'
import { Country } from 'entities/CountrySelect'

const data = {
  id: '1',
  firstName: 'Vasya',
  lastName: 'Pupkin',
  username: 'Uromiru',
  age: '33',
  currency: Currency.RUB,
  country: Country.KZ,
  city: 'Voronejjj',
}

describe('getProfileFormData test: ', () => {
  test('returns profile form data', () => {
    const state: DeepPartial<StateSchema> = { profile: {
      formData: { ...data }
    } }
    const profileFormData = getProfileFormData(state as StateSchema)

    expect(profileFormData).toStrictEqual({ ...data })
  })

  test('returns default state', () => {
    const state: DeepPartial<StateSchema> = {}
    const profileFormData = getProfileFormData(state as StateSchema)

    expect(profileFormData).toBe(undefined)
  })
})
