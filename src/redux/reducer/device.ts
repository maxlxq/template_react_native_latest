/*
 * @Author: shizhi
 * @Date: 2023-06-07 14:09:23
 * @LastEditors: shizhi
 * @LastEditTime: 2024-10-24 18:05:27
 * @Description: 设备行为
 */
import { createReducer } from '@/utils/reduxHelper';
import Immutable from 'immutable';

import { APPEARANCE_CHANGE, USE_SYSTEM_CHANGE } from '@/redux/action/device';
import { appearanceType } from '@/interface/device';

export const INITIAL_STATE = Immutable.Map({
  colorScheme: 'light',
  isSystemTheme: false,
});

export const device = createReducer(INITIAL_STATE, {
  [APPEARANCE_CHANGE.SUCCESS]: (state: any, { colorScheme }: { colorScheme: appearanceType }) =>
    state.update('colorScheme', () => colorScheme),
  [USE_SYSTEM_CHANGE.SUCCESS]: (state: any) => state.update('isSystemTheme', (v: boolean) => !v),
  [APPEARANCE_CHANGE.FAILED]: (state: any, { error }: Record<string, any>) =>
    state.update('error', () => error),
  [USE_SYSTEM_CHANGE.FAILED]: (state: any, { error }: Record<string, any>) =>
    state.update('error', () => error),
});
