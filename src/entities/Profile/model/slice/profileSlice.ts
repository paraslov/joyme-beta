import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/Profile'
import { fetchProfileData } from 'entities/Profile'

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  errorMessage: undefined,
  readonly: true,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state, _) => {
        state.errorMessage = undefined
        state.isLoading = true
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.data = action.payload
        state.isLoading = false
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.errorMessage = action.payload
      })
  }
})

// Action creators are generated for each case reducer function
export const { actions: profileActions, reducer: profileReducer } = profileSlice
