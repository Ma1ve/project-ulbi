import { DeepPartial } from '@/shared/config/types/DeepPartial';
import { ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { Country, Currency } from '@/shared/const/common';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ValidateProfileError } from '../consts/consts';

const data = { name: 'asdfs', lastname: 'asfasdfasfd', age: 33, currency: Currency.EUR, country: Country.Belarus, city: 'Moscow', username: 'user', id: '1' };

describe('profileSlice', () => {
  test('test readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(profileReducer(state, profileActions.setReadonly(true))).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({ readonly: true, validateSchema: undefined, data, form: data });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '123' } };

    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '123456' }))).toEqual({
      data,
      form: {
        ...data,
        username: '123456',
      },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: false, validateErrors: [ValidateProfileError.SERVER_ERROR] };
    //@ts-ignore
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: true };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '', '1'))).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      data,
      form: data,
    });
  });
});
