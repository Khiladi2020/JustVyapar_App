import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import AppNavigator from './app/navigation/AppNavigator'
import AuthNavigator from './app/navigation/AuthNavigator'
import navigationTheme from './app/navigation/navigationTheme'
import WelcomeScreen from './app/screens/WelcomeScreen'

const App = ()=> {
  return(
    <NavigationContainer theme={navigationTheme}>
      {/*<AuthNavigator />*/}
      <AppNavigator />
    </NavigationContainer>
  )
}

export default App;
