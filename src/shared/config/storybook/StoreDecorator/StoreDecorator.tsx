// import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { profileReducer } from '@/entities/Profile';
import { DeepPartial } from '../../types/DeepPartial';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginReducer } from '@/features/AuthByUsername/testing';

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) => (StoryComponent: StoryFn) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
