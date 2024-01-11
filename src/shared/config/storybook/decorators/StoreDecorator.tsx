import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { authReducer } from 'features/AuthByUsername/model/slice/authSlice'
import { profileReducer } from 'entities/Profile'
import { ReducersList } from 'shared/lib/DynamicModuleLoader/useDynamicModuleLoader'
import { articleDetailsReducer } from 'entities/ArticleDetails/model/slice/articleDetails'
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsComments'
import { addCommentReducer } from 'features/AddComment/model/slice/addComment'

const defaultAsyncReducers: ReducersList = {
  authForm: authReducer,
  profile: profileReducer,
  article: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
  addComments: addCommentReducer,
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={ state } asyncReducers={ { ...defaultAsyncReducers, ...asyncReducers } } >
    <StoryComponent />
  </StoreProvider>
)
