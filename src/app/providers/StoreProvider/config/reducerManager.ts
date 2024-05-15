import { AnyAction, combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { MountedReducers, reducerManager, StateSchema, StateSchemaKey } from './StateSchema';
import { DeepPartial } from '@/shared/config/types/DeepPartial';

//ReducersMapObject<StateSchema> тип который есть у корнего нашего редьюсера
export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): reducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  // ключи для удаления названия редьюсеров
  let keysToRemove: StateSchemaKey[] = [];

  const mountedReducers: MountedReducers = {};

  return {
    getReducerMap: () => reducers,

    getMountedReducers: () => mountedReducers,

    // Эта функция по сути и есть reducer принимает в себя state и action
    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      // @ts-ignore
      return combinedReducer(state, action);
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;
      mountedReducers[key] = true;

      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      mountedReducers[key] = false;

      combinedReducer = combineReducers(reducers);
    },
  };
}
