import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from '../../types/Profile'
import { getProfileFormData } from '../../selectors/getProfileFormData'
import { validateProfile } from '../validateProfile/validateProfile'
import { ValidateProfileErrors } from '../../types/ValidateProfileErrors'

export const saveProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileErrors[]>>(
  'profile/saveProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    try {
      const formData = getProfileFormData(getState())
      const validationErrors = validateProfile(formData)

      if (validationErrors.length) {
        return rejectWithValue(validationErrors)
      }

      const response = await extra.api.put<Profile>('/profile', formData)

      return response.data
    } catch (err) {
      return rejectWithValue([ ValidateProfileErrors.SERVER_ERROR ])
    }
  }
)
