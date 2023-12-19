import { createSlice } from '@reduxjs/toolkit'
import { ProfileSchema } from '../types/Profile'

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
export const { actions: profileActions, reducer: profileReducer } = profileSlice