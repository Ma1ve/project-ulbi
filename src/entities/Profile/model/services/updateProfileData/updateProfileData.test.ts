import axios from 'axios';
import { TestAsyncThunk } from '@/shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { Country, Currency } from '@/shared/const/common';
import { fetchProfileData } from '../fetchProfileData/fetchProfileData';
import { ValidateProfileError } from '../../consts/consts';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

const data = { name: 'asdfs', lastname: 'asfasdfasfd', age: 33, currency: Currency.EUR, country: Country.Belarus, city: 'Moscow', username: 'user' };

describe('updateProfileData.test.ts', () => {
  test('success', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ data }));

    const thunk = new TestAsyncThunk(fetchProfileData, {
      profile: {
        form: data,
      },
    });

    const res = await thunk.callThunk('1');

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('fulfilled');
    expect(res.payload).toBe(data);
  });

  test('reject', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(fetchProfileData, {
      profile: {
        form: data,
      },
    });

    const res = await thunk.callThunk('1');

    expect(res.meta.requestStatus).toBe('rejected');
    expect(res.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData, {
      profile: {
        form: { ...data, lastname: '' },
      },
    });

    const res = await thunk.callThunk('1');

    expect(res.meta.requestStatus).toBe('rejected');
    expect(res.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });
});
