import { StateSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsIsLoading = (state: StateSchema) => state.article?.isLoading
export const getArticleDetailsErrorMessage = (state: StateSchema) => state.article?.errorMessage
export const getArticleDetailsArticle = (state: StateSchema) => state.article?.article
