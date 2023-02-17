import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
  test('Button has text: ', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('Button has class "clear": ', () => {
    render(<Button theme={ ButtonTheme.CLEAR }>Test</Button>)
    expect(screen.getByText('Test')).toHaveClass('clear')
  })
})
