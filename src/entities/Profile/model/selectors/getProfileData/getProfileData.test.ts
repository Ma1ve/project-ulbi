import { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileData } from './getProfileData';
import { Country, Currency } from '@/shared/const/common';
type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

describe('getProfileData', () => {
  test('should return error', () => {
    const data = { name: 'asdfs', lastname: 'asfasdfasfd', age: 33, currency: Currency.EUR, country: Country.Belarus, city: 'Moscow', username: 'user' };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data: data,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
