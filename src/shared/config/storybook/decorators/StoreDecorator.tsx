import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { authReducer } from 'features/AuthByUsername/model/slice/authSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  authForm: authReducer,
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={ state } asyncReducers={ { ...defaultAsyncReducers, ...asyncReducers } } >
    <StoryComponent />
  </StoreProvider>
)
