import { CounterSchema } from 'entities/Counter'
import { UserSchema } from 'entities/User'
import { AuthSchema } from 'features/AuthByUsername'
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { ProfileSchema } from 'entities/Profile'
import { AxiosInstance } from 'axios'
import { ArticleSchema } from 'entities/ArticleDetails'
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage'
import { AddCommentSchema } from 'features/AddComment'
import { ArticlesPageSchema } from 'pages/ArticlesPage'

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,

  // async reducers
  authForm?: AuthSchema,
  profile?: ProfileSchema,
  article?: ArticleSchema,
  articlesPage?: ArticlesPageSchema,
  articleDetailsComments?: ArticleDetailsCommentsSchema,
  addComments?: AddCommentSchema,
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  state: StateSchema
  rejectValue: T
  extra: ThunkExtraArg
}
