import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createStore } from '../config/store'
import { StateSchema } from '../config/StateSchema'
import { ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: React.FC<StoreProviderProps> = (props: StoreProviderProps) => {
  const {
    children,
    initialState,
    asyncReducers,
  } = props

  const store = createStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
  )

  return (
    <Provider store={ store }>
      { children }
    </Provider>
  )
}
