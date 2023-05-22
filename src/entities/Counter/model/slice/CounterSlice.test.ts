import { CounterSchema } from '../types/CounterSchema'
import { counterReducer } from './CounterSlice'
import { counterActions } from './CounterSlice'

describe('CounterSlice.test: ', () => {
  test('increment action test', () => {
    const state: CounterSchema = { value: 10 }

    expect(counterReducer(state, counterActions.increment())).toStrictEqual({ value: 11 })
  })

  test('decrement action test', () => {
    const state: CounterSchema = { value: 10 }

    expect(counterReducer(state, counterActions.decrement())).toStrictEqual({ value: 9 })
  })

  test('increment by amount action test', () => {
    const state: CounterSchema = { value: 10 }

    expect(counterReducer(state, counterActions.incrementByAmount(5))).toStrictEqual({ value: 15 })
  })
})

