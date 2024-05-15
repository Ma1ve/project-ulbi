// describe('loginByUsername.test.ts', () => {
//   test('', () => {
//     expect().toEqual()
//   })

// });

import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { StateSchema } from '@/app/providers/StoreProvider';
import { AppDispatch } from '@/app/providers/StoreProvider/config/store';
import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/config/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('loginByUsername.test.ts', () => {
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

  test('success', async () => {
    const userValue = { username: '123', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    // thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const res = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('fulfilled');
    expect(res.payload).toBe(userValue);
  });
  test('reject', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const res = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('rejected');
    expect(res.payload).toBe('error');
  });
});
