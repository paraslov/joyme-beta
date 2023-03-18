import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createStore } from '../config/store'
import { StateSchema } from '../config/StateSchema'
import { DeepPartial } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: React.FC<StoreProviderProps> = (props: StoreProviderProps) => {
  const {
    children,
    initialState,
  } = props

  const store = createStore(initialState as StateSchema)

  return (
    <Provider store={ store }>
      { children }
    </Provider>
  )
}
