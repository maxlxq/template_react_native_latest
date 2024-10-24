import { put, fork, takeLatest, all } from 'redux-saga/effects';

import { INCREASE, DECREASE, SET_COUNT } from '@/redux/action/home';

const setCount = function* setCount(state: { count: number }) {
  try {
    const { count } = state;
    yield put({ type: SET_COUNT.SUCCESS, count });
  } catch (error) {
    yield put({ type: SET_COUNT.FAILED, error });
  }
};

const increase = function* increase() {
  try {
    yield put({ type: INCREASE.SUCCESS });
  } catch (error) {
    yield put({ type: INCREASE.FAILED, error });
  }
};

const decrease = function* decrease() {
  try {
    yield put({ type: DECREASE.SUCCESS });
  } catch (error) {
    yield put({ type: DECREASE.FAILED, error });
  }
};

const watchSetCount = function* watchSetCount() {
  yield takeLatest(SET_COUNT.REQUEST, setCount);
};

const watchIncrease = function* watchIncrease() {
  yield takeLatest(INCREASE.REQUEST, increase);
};

const watchDecrease = function* watchDecrease() {
  yield takeLatest(DECREASE.REQUEST, decrease);
};

export default function* homeSaga() {
  yield all([fork(watchSetCount), fork(watchIncrease), fork(watchDecrease)]);
}
