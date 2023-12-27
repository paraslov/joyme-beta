import { Profile } from '../../types/Profile'
import { ValidateProfileErrors } from 'entities/Profile/model/types/ValidateProfileErrors'

export const validateProfile = (profile?: Profile) => {
  if (!profile) {
    return [ ValidateProfileErrors.NOT_DATA ]
  }
  const errors: ValidateProfileErrors[] = []
  const { firstName, lastName, age, username } = profile
  const numberAge = Number(age || 0)

  if (!firstName || !lastName || !username) {
    errors.push(ValidateProfileErrors.NOT_FILLED_DATA)
  }

  if (!age || !Number.isInteger(numberAge) || numberAge > 100 || numberAge < 1) {
    errors.push(ValidateProfileErrors.INCORRECT_AGE)
  }

  return errors
}
