import { createReducer } from '@/utils/reduxHelper';
import Immutable from 'immutable';

import { INCREASE, DECREASE, SET_COUNT } from '@/redux/action/home';
import { LOGOUT } from '@/redux/action/login';

export const INITIAL_STATE = Immutable.Map({
  count: 1,
  error: null,
});

export const home = createReducer(INITIAL_STATE, {
  [SET_COUNT.SUCCESS]: (state: any, { count }: Record<string, number>) => state.update('count', () => count),
  [INCREASE.SUCCESS]: (state: any) => state.update('count', (c: number) => c + 1),
  [DECREASE.SUCCESS]: (state: any) => state.update('count', (c: number) => c - 1),
  [INCREASE.FAILED]: (state: any, { error }: Record<string, any>) =>
    state.update('error', error),
  [DECREASE.FAILED]: (state: any, { error }: Record<string, any>) =>
    state.update('error', error),
  [SET_COUNT.FAILED]: (state: any, { error }: Record<string, any>) => state.update('error', error),
  [LOGOUT.SUCCESS]: (state: any) =>
    state.merge(INITIAL_STATE),
});
