import { StateSchema } from 'app/providers/StoreProvider'

export const getScrollPositions = (state: StateSchema) => state.pageWrapper.scroll
