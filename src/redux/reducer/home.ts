import { createReducer } from '@/utils/reduxHelper';
import Immutable from 'immutable';

import { INCREASE, DECREASE } from '@/redux/action/home';

export const INITIAL_STATE = Immutable.Map({
  count: 1,
  error: null,
});

export const home = createReducer(INITIAL_STATE, {
  [INCREASE.SUCCESS]: (state: any) => state.merge({ count: state.count + 1 }),
  [DECREASE.SUCCESS]: (state: any) => state.merge({ count: state.count - 1 }),
  [INCREASE.FAILED]: (state: any, { error }: Record<string, any>) =>
    state.merge({ error }),
  [DECREASE.FAILED]: (state: any, { error }: Record<string, any>) =>
    state.merge({ error }),
});
