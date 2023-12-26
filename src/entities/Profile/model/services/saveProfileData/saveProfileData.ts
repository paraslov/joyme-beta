import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'i18next'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from '../../types/Profile'
import { getProfileFormData } from '../../selectors/getProfileFormData'

export const saveProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/saveProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    try {
      const formData = getProfileFormData(getState())

      const response = await extra.api.put<Profile>('/profile', formData)

      return response.data
    } catch (err) {
      return rejectWithValue(i18n.t('profile.errorMessage'))
    }
  }
)
