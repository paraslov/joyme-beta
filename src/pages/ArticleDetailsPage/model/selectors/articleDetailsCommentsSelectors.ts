import { StateSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading
export const getArticleDetailsCommentsErrorMessage = (state: StateSchema) => state.articleDetailsComments?.errorMessage
