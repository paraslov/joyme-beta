import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { fetchProfileData } from './fetchProfileData'
import { Currency } from 'entities/CurrencySelect'
import { Country } from 'entities/CountrySelect'

const data = {
  firstName: 'Vasya',
  lastName: 'Pupkin',
  username: 'Uromiru',
  age: '33',
  currency: Currency.RUB,
  country: Country.KZ,
  city: 'Voronejjj',
}

describe('fetchProfileData.test: ', () => {
  test('success profile fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: { ...data } }))
    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toStrictEqual({ ...data })
  })

  test('failed profile fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
