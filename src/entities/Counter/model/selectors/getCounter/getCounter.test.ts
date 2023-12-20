import { StateSchema } from 'app/providers/StoreProvider'
import { getCounter } from './getCounter'

describe('getCounter test: ', () => {
  test('returns counter', () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 10 } }
    const counter = getCounter(state as StateSchema)

    expect(counter).toStrictEqual({ value: 10 })
  })
})
