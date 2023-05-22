import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/CounterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface CounterProps {
  className?: string
}

export const Counter: React.FC<CounterProps> = (props: CounterProps) => {
  const {
    className,
  } = props

  const { t } = useTranslation()
  const counterValue = useSelector(getCounterValue)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <div data-testid="counter-value">{ counterValue }</div>

      <Button data-testid="decrement-btn" theme={ ButtonTheme.OUTLINE } onClick={ decrement }>
        { t('decrement') }
      </Button>

      <Button data-testid="increment-btn" theme={ ButtonTheme.OUTLINE } onClick={ increment }>
        { t('increment') }
      </Button>
    </div>
  )
}
