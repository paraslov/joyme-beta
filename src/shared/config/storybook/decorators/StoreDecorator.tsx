import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { authReducer } from 'features/AuthByUsername/model/slice/authSlice'
import { profileReducer } from 'entities/Profile'
import { ReducersList } from 'shared/lib/DynamicModuleLoader/useDynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
  authForm: authReducer,
  profile: profileReducer,
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={ state } asyncReducers={ { ...defaultAsyncReducers, ...asyncReducers } } >
    <StoryComponent />
  </StoreProvider>
)
