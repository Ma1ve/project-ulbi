import { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileError } from './getProfileError';
import { Country, Currency } from '@/shared/const/common';
type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

describe('getProfileData', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: '123',
      },
    };

    expect(getProfileError(state as StateSchema)).toEqual('123');
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
