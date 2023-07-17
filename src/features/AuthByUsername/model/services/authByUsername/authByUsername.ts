import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, userActions } from 'entities/User'
import axios from 'axios'
import i18n from 'i18next'
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage'

interface AuthByUsernameProps {
  username: string
  password: string
}

export const authByUsername = createAsyncThunk<User, AuthByUsernameProps, { rejectValue: string }>(
  'auth/authByUsername',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', {
        username,
        password,
      })

      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
      thunkAPI.dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue(i18n.t('auth.errorMessage'))
    }
  }
)
