import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, userActions } from 'entities/User'
import i18n from 'i18next'
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage'
import { ThunkConfig } from 'app/providers/StoreProvider'


interface AuthByUsernameProps {
  username: string
  password: string
}

export const authByUsername = createAsyncThunk<User, AuthByUsernameProps, ThunkConfig<string>>(
  'auth/authByUsername',
  async ({ username, password }, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI
    try {
      const response = await extra.api.post<User>('/login', {
        username,
        password,
      })

      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (err) {
      return rejectWithValue(i18n.t('auth.errorMessage'))
    }
  }
)
