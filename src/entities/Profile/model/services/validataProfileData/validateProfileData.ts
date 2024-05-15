import { ValidateProfileError } from '../../consts/consts';
import { Profile } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.DATA_ERROR];
  }
  const { name, lastname, age, country } = profile;

  const errors: ValidateProfileError[] = [];

  if (!name || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
