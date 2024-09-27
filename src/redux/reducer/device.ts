/*
 * @Author: shizhi
 * @Date: 2023-06-07 14:09:23
 * @LastEditors: shizhi
 * @LastEditTime: 2024-09-27 16:18:01
 * @Description: 设备行为
 */
import { createReducer } from '@/utils/reduxHelper';
import Immutable from 'immutable';

import { APPEARANCE_CHANGE } from '@/redux/action/device';

export const INITIAL_STATE = Immutable.Map({
  colorScheme: 'light',
});

export const device = createReducer(INITIAL_STATE, {
  [APPEARANCE_CHANGE.SUCCESS]: (state: any) =>
    state.merge({ colorScheme: state.colorScheme }),
  [APPEARANCE_CHANGE.FAILED]: (state: any, { error }: Record<string, any>) =>
    state.merge({ error }),
});
