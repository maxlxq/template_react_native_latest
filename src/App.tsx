// In App.js in a new project

import * as React from 'react';
// import { useEffect } from 'react';
import Router from '@/router/base';
import generateStore from './redux/store';
import { Provider } from 'react-redux';
// import SplashScreen from 'react-native-splash-screen';

const { store } = generateStore();

const App = () => {

  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 2000);
  // }, []);

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
