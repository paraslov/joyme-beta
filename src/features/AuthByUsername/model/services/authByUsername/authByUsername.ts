import { createAsyncThunk } from '@reduxjs/toolkit'
import { User } from 'entities/User'
import axios from 'axios'

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

      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue('error')
    }
  }
)
