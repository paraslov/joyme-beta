import { Country } from 'entities/CountrySelect'
import { Currency } from 'entities/CurrencySelect'

export interface Profile {
  firstName?: string
  lastName?: string
  age?: string
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile
  formData?: Profile
  isLoading: boolean
  errorMessage?: string
  readonly: boolean
}
