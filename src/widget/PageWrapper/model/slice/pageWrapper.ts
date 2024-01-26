import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PageWrapperSchema } from 'widget/PageWrapper/model/types/PageWrapperSchema'

const initialState: PageWrapperSchema  = {
  scroll: {}
}

export const pageWrapperSlice = createSlice({
  name: 'pageWrapper',
  initialState,
  reducers: {
    setScroll: (state, { payload }: PayloadAction<{path: string, scrollPosition: number}>) => {
      state.scroll[payload.path] = payload.scrollPosition
    }
  },
})

export const { actions: pageWrapperActions, reducer: pageWrapperReducer } = pageWrapperSlice
