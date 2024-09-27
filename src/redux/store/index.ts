import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '@/redux/reducer';
import rootSaga from '@/redux/saga';
// import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = __DEV__ ? [reduxLogger] : [];

const middleWares = applyMiddleware(sagaMiddleware, ...loggerMiddleware);

const generateStore = () => {
  const store = createStore(rootReducer, middleWares);
  sagaMiddleware.run(rootSaga);
  return { store };
};

export default generateStore;
