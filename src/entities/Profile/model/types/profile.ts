import { Country, Currency } from '@/shared/const/common';
import { ValidateProfileError } from '../consts/consts';

export interface Profile {
  id?: string;
  name?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading?: boolean;
  error?: string | undefined;
  readonly?: boolean;
  validateErrors?: ValidateProfileError[];
}
