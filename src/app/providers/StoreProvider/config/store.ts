import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { authReducer } from 'features/AuthByUsername'

export const createStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    auth: authReducer,
  }

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: $_IS_DEV,
    preloadedState: initialState,
  })
}