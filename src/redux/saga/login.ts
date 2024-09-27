import { put, fork, takeLatest, all } from 'redux-saga/effects';

import { LOGIN, LOGOUT } from '@/redux/action/login';

const login = function* login() {
  try {
    yield put({ type: LOGIN.SUCCESS });
  } catch (error) {
    yield put({ type: LOGIN.FAILED, error });
  }
};

const logout = function* logout() {
  try {
    yield put({ type: LOGOUT.SUCCESS });
  } catch (error) {
    yield put({ type: LOGOUT.FAILED, error });
  }
};

const watchLogin = function* watchLogin() {
  yield takeLatest(LOGIN.REQUEST, login);
};

const watchLogout = function* watchLogout() {
  yield takeLatest(LOGOUT.REQUEST, logout);
};

export default function* homeSaga() {
  yield all([fork(watchLogin), fork(watchLogout)]);
}
