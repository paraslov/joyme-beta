import { Country, Currency } from 'shared/consts/common'

export interface Profile {
  'firstName': string
  'lastName': string
  'age': string
  'currency': Currency
  'country': Country
  'city': string
  'username': string
  'avatar': string
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean
  errorMessage?: string
  readonly: boolean
}
