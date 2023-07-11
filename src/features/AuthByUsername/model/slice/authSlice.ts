import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthSchema } from '../types/AuthSchema'
import { authByUsername } from '../services/authByUsername/authByUsername'

const initialState: AuthSchema = {
  username: '',
  password: '',
  isLoading: false,
}

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authByUsername.pending, (state, action) => {
        state.errorMessage = undefined
        state.isLoading = true
      })
      .addCase(authByUsername.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(authByUsername.rejected, (state, action) => {
        state.isLoading = false
        state.errorMessage = action.payload
      })
  }
})

// Action creators are generated for each case reducer function
export const { actions: authActions, reducer: authReducer } = authSlice
