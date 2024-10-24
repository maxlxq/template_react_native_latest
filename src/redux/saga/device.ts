/*
 * @Author: shizhi
 * @Date: 2023-06-07 14:10:55
 * @LastEditors: shizhi
 * @LastEditTime: 2024-10-24 17:28:21
 * @Description: 设备行为
 */
import { put, fork, takeLatest, all } from 'redux-saga/effects';

import { APPEARANCE_CHANGE, USE_SYSTEM_CHANGE } from '@/redux/action/device';
import { appearanceEnum, appearanceType } from '@/interface/device';

const appearanceChange = function* appearanceChange(state: {
  colorScheme: appearanceType;
}) {
  try {
    const { colorScheme = appearanceEnum.light } = state;
    yield put({ type: APPEARANCE_CHANGE.SUCCESS, colorScheme });
  } catch (error) {
    yield put({ type: APPEARANCE_CHANGE.FAILED, error });
  }
};

const useSystemChange = function* useSystemChange() {
  try {
    yield put({ type: USE_SYSTEM_CHANGE.SUCCESS });
  } catch (error) {
    yield put({ type: USE_SYSTEM_CHANGE.FAILED, error });
  }
};

const watchAppearanceChange = function* watchDecrease() {
  yield takeLatest(APPEARANCE_CHANGE.REQUEST, appearanceChange);
};

const watchUseSystemChange = function* watchUseSystemChange() {
  yield takeLatest(USE_SYSTEM_CHANGE.REQUEST, useSystemChange);
};

export default function* homeSaga() {
  yield all([fork(watchAppearanceChange), fork(watchUseSystemChange)]);
}
