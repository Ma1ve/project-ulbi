import { Profile, ValidateProfileError } from '@/entities/Profile';

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading?: boolean;
  error?: string | undefined;
  readonly?: boolean;
  validateErrors?: ValidateProfileError[];
}
