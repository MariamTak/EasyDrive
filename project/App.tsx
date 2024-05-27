/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Splash from './android/app/src/screens/splash';
import type {PropsWithChildren} from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { firebase } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import GetStarted from './android/app/src/screens/GetStarted';
import SignUp from './android/app/src/screens/SignUp';
import LogIn from './android/app/src/screens/LogIn';
import Container from './android/app/src/screens/Navigation/Container';
const Stack = createStackNavigator();




function App(): React.JSX.Element {

  return (
<><NavigationContainer><Stack.Navigator>
<Stack.Screen name='Splash' component={Splash} options={{headerShown : false}}/>
<Stack.Screen name='GetStarted' component={GetStarted} options={{headerShown : false}}/>
<Stack.Screen name='SignUp' component={SignUp} options={{headerShown : false}}/>
<Stack.Screen name='LogIn' component={LogIn} options={{headerShown : false}}/>

<Stack.Screen name="Container" component={Container} options={{headerShown : false}}/>

</Stack.Navigator>
</NavigationContainer>
</>
);
}


export default App;
