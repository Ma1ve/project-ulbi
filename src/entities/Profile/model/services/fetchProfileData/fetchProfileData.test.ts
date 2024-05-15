import axios from 'axios';
import { fetchProfileData } from './fetchProfileData';

import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { Country, Currency } from '@/shared/const/common';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

const data = { name: 'asdfs', lastname: 'asfasdfasfd', age: 33, currency: Currency.EUR, country: Country.Belarus, city: 'Moscow', username: 'user' };

describe('fetchProfileData.test.ts', () => {
  // let dispatch: AppDispatch;
  // let getState: () => StateSchema;
  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });
  // test('success', async () => {
  //   const userValue = { username: '123', id: '1' };
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
  //   const action = loginByUsername({ username: '123', password: '123' });
  //   const res = await action(dispatch, getState, undefined);
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(res.meta.requestStatus).toBe('fulfilled');
  //   expect(res.payload).toBe(userValue);
  // });
  // test('reject', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //   const action = loginByUsername({ username: '123', password: '123' });
  //   const res = await action(dispatch, getState, undefined);
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(res.meta.requestStatus).toBe('rejected');
  //   expect(res.payload).toBe('error');
  // });

  // test('success', async () => {
  //   mockedAxios.put.mockReturnValue(Promise.resolve({ data: data }));

  //   const thunk = new TestAsyncThunk(fetchProfileData);
  //   const res = await thunk.callThunk('1');
  //   expect(mockedAxios.put).toHaveBeenCalled();
  //   expect(res.meta.requestStatus).toBe('fulfilled');
  //   expect(res.payload).toBe(data);
  // });

  test('success', async () => {
    // Устанавливаем заглушку для mockedAxios.put
    mockedAxios.put.mockResolvedValueOnce({ data });

    const thunk = new TestAsyncThunk(fetchProfileData);
    const res = await thunk.callThunk('1');

    // Проверяем, что mockedAxios.put был вызван
    expect(mockedAxios.put).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('fulfilled');
    expect(res.payload).toBe(data);
  });

  test('reject', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(fetchProfileData);
    const res = await thunk.callThunk('1');

    expect(res.meta.requestStatus).toBe('rejected');
  });
});
