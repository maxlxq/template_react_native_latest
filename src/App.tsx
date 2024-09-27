// In App.js in a new project

import * as React from 'react';
import { useColorScheme } from 'react-native';
// import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from '@/router/base';
import generateStore from './redux/store';
import { Provider } from 'react-redux';
// import SplashScreen from 'react-native-splash-screen';
import { DarkTheme, DefaultTheme } from './constants/theme';

const { store } = generateStore();

const App = () => {
  const colorScheme = useColorScheme();
  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 2000);
  // }, []);

  return (
    <Provider store={store}>
      <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
