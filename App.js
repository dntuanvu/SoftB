import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';

import MainNavigator from './navigation/MainNavigator';
import ReduxThunk from 'redux-thunk';
import authReducers from './store/reducers/auth';
import placeReducers from './store/reducers/place';
import userReducers from './store/reducers/users';

import { init } from './helper/db'

init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch(err => {
    console.log('Initializing db failed.');
    console.log(err);
});

const rootReducer = combineReducers({
  auth: authReducers,
  places: placeReducers,
  users: userReducers
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

useScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )
}
