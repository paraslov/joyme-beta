import { StateSchema } from 'app/providers/StoreProvider'

export const getArticlesIsLoading = (state: StateSchema) => state.articlesPage?.isLoading
export const getArticlesErrorMessage = (state: StateSchema) => state.articlesPage?.errorMessage
export const getArticlesView = (state: StateSchema) => state.articlesPage?.view
