import { createReducer } from '@/utils/reduxHelper';
import Immutable from 'immutable';

import { LOGIN, LOGOUT } from '@/redux/action/login';

export const INITIAL_STATE = Immutable.Map({
  isLogin: false,
  user: null,
  error: null,
});

export const login = createReducer(INITIAL_STATE, {
  [LOGIN.SUCCESS]: (state: any) => state.merge({ isLogin: true }),
  [LOGOUT.SUCCESS]: (state: any) =>
    state.merge({
      isLogin: false,
      user: null,
      error: null,
    }),
  [LOGIN.FAILED]: (state: any, { error }: Record<string, any>) =>
    state.merge({ error }),
  [LOGOUT.FAILED]: (state: any, { error }: Record<string, any>) =>
    state.merge({ error }),
});
