import { StateSchema } from 'app/providers/StoreProvider'

export const getArticlesIsLoading = (state: StateSchema) => state.articlesPage?.isLoading
export const getArticlesErrorMessage = (state: StateSchema) => state.articlesPage?.errorMessage
export const getArticlesView = (state: StateSchema) => state.articlesPage?.view
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 4
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore
