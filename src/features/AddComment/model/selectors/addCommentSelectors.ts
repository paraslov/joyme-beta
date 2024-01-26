import { StateSchema } from 'app/providers/StoreProvider'

export const getAddCommentText = (state: StateSchema) => state.addComments?.text ?? ''
export const getAddCommentErrorMessage = (state: StateSchema) => state.addComments?.errorMessage
export const getAddCommentIsLoading = (state: StateSchema) => state.addComments?.isLoading
