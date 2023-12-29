import { Currency } from 'entities/CurrencySelect'
import { Country } from 'entities/CountrySelect'
import { validateProfile } from './validateProfile'
import { ValidateProfileErrors } from '../../types/ValidateProfileErrors'

const data = {
  firstName: 'Vasya',
  lastName: 'Pupkin',
  username: 'Uromiru',
  age: '33',
  currency: Currency.RUB,
  country: Country.KZ,
  city: 'Voronejjj',
}

describe('validateProfile test: ', () => {
  test('success validate profile', async () => {
    const result = validateProfile(data)

    expect(result).toStrictEqual([])
  })

  test('failed not filled firstname', async () => {
    const result = validateProfile({ ...data, firstName: '' })

    expect(result).toStrictEqual([ ValidateProfileErrors.NOT_FILLED_DATA ])
  })

  test('failed not filled lastname, firstname', async () => {
    const result = validateProfile({ ...data, firstName: '', lastName: '' })

    expect(result).toStrictEqual([ ValidateProfileErrors.NOT_FILLED_DATA ])
  })

  test('failed not filled username', async () => {
    const result = validateProfile({ ...data, username: '' })

    expect(result).toStrictEqual([ ValidateProfileErrors.NOT_FILLED_DATA ])
  })

  test('failed not filled age', async () => {
    const result = validateProfile({ ...data, age: '' })

    expect(result).toStrictEqual([ ValidateProfileErrors.INCORRECT_AGE ])
  })

  test('failed age more than 100', async () => {
    const result = validateProfile({ ...data, age: '135' })

    expect(result).toStrictEqual([ ValidateProfileErrors.INCORRECT_AGE ])
  })

  test('failed age below 1', async () => {
    const result = validateProfile({ ...data, age: '-13' })

    expect(result).toStrictEqual([ ValidateProfileErrors.INCORRECT_AGE ])
  })

  test('failed age below 1', async () => {
    const result = validateProfile()

    expect(result).toStrictEqual([ ValidateProfileErrors.NOT_DATA ])
  })
})
