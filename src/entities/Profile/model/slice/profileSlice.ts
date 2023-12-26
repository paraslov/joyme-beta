import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/Profile'
import { fetchProfileData } from 'entities/Profile'
import { saveProfileData } from 'entities/Profile/model/services/saveProfileData/saveProfileData'

const initialState: ProfileSchema = {
  data: undefined,
  formData: undefined,
  isLoading: false,
  errorMessage: undefined,
  readonly: true,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    cancelEdit: (state) => {
      state.readonly = true
      state.formData = state.data
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state, _) => {
        state.errorMessage = undefined
        state.isLoading = true
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.data = action.payload
        state.formData = action.payload
        state.isLoading = false
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.errorMessage = action.payload
      })
      .addCase(saveProfileData.pending, (state, _) => {
        state.errorMessage = undefined
        state.isLoading = true
      })
      .addCase(saveProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.data = action.payload
        state.isLoading = false
        state.readonly = true
      })
      .addCase(saveProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.errorMessage = action.payload
      })
  }
})

// Action creators are generated for each case reducer function
export const { actions: profileActions, reducer: profileReducer } = profileSlice
