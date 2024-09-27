/*
 * @Author: shizhi
 * @Date: 2023-06-07 14:10:55
 * @LastEditors: shizhi
 * @LastEditTime: 2023-06-07 14:49:49
 * @Description: 设备行为
 */
import { put, fork, takeLatest, all } from 'redux-saga/effects';

import { APPEARANCE_CHANGE } from '@/redux/action/device';

const appearanceChange = function* appearanceChange(state: {
  colorScheme: string;
}) {
  try {
    const { colorScheme = 'light' } = state;
    console.log('colorScheme:', colorScheme);
    yield put({ type: APPEARANCE_CHANGE.SUCCESS, colorScheme });
  } catch (error) {
    yield put({ type: APPEARANCE_CHANGE.FAILED, error });
  }
};

const watchAppearanceChange = function* watchDecrease() {
  yield takeLatest(APPEARANCE_CHANGE.REQUEST, appearanceChange);
};

export default function* homeSaga() {
  yield all([fork(watchAppearanceChange)]);
}
