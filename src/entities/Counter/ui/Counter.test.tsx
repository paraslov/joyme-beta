import { screen } from '@testing-library/react'
import { Counter } from './Counter'
import { componentRender } from 'shared/lib/componentRender/componentRender'
import userEvent from '@testing-library/user-event'

describe('Counter', () => {
  test('Counter rendered: ', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10')
  })

  test('Counter increment: ', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    userEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('counter-value')).toHaveTextContent('11')
  })

  test('Counter decrement: ', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    userEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('counter-value')).toHaveTextContent('9')
  })
})
