import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddCommentSchema } from '../types/addComment'

const initialState: AddCommentSchema  = {
  text: '',
  isLoading: false,
}

export const addCommentSlice = createSlice({
  name: 'addComment',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    }
  },
})

export const { actions: addCommentActions, reducer: addCommentReducer } = addCommentSlice
