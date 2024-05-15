import { Country, Currency } from '@/shared/const/common';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../consts/consts';

jest.mock('axios');

const data = { name: 'asdfs', lastname: 'asfasdfasfd', age: 33, currency: Currency.EUR, country: Country.Belarus, city: 'Moscow', username: 'user' };

describe('validateProfileData.test.ts', () => {
  test('success', async () => {
    const res = validateProfileData(data);

    expect(res).toEqual([]);
  });
  test('without first and last name', async () => {
    const res = validateProfileData({ ...data, name: '', lastname: '' });

    expect(res).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
  test('incorrect age', async () => {
    const res = validateProfileData({ ...data, age: undefined });

    expect(res).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('incorrect country', async () => {
    const res = validateProfileData({ ...data, country: undefined });

    expect(res).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('incorrect all', async () => {
    const res = validateProfileData({});

    expect(res).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY]);
  });
});
