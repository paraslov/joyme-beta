import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User, UserSchema } from '../types/User'
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage'

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY)

      if (user) {
        state.authData = JSON.parse(user)
      }
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
    }
  },
})

// Action creators are generated for each case reducer function
export const { actions: userActions, reducer: userReducer } = userSlice