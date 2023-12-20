import { StateSchema } from 'app/providers/StoreProvider'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue.test: ', () => {
  test('returns counter value', () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 10 } }
    const counterValue = getCounterValue(state as StateSchema)

    expect(counterValue).toBe(10)
  })
})

