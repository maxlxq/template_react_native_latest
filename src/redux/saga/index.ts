import { all } from 'redux-saga/effects';
import homeSaga from './home';
import loginSaga from './login';
import device from './device';

export default function* rootSaga() {
  yield all([homeSaga(), loginSaga(), device()]);
}
