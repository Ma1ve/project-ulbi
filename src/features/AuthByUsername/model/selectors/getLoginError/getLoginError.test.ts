import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginError } from './getLoginError';
type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

describe('getLoginError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    };

    expect(getLoginError(state as StateSchema)).toEqual('error');
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
