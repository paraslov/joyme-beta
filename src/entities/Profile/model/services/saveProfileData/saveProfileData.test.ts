import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { Currency } from 'entities/CurrencySelect'
import { Country } from 'entities/CountrySelect'
import { saveProfileData } from './saveProfileData'
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

describe('saveProfileData.test: ', () => {
  test('success profile save', async () => {
    const thunk = new TestAsyncThunk(saveProfileData, { profile: { formData: data } })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: { ...data } }))
    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toStrictEqual({ ...data })
  })

  test('failed profile save: server error', async () => {
    const thunk = new TestAsyncThunk(saveProfileData, { profile: { formData: data } })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toStrictEqual([ ValidateProfileErrors.SERVER_ERROR ])
  })

  test('failed profile save: failed validation', async () => {
    const thunk = new TestAsyncThunk(saveProfileData, { profile: { formData: { ...data, username: '' } } })
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toStrictEqual([ ValidateProfileErrors.NOT_FILLED_DATA ])
  })
})
