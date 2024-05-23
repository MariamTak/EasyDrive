import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../ecrans/login';
import RegisterScreen from '../ecrans/register';
import CarDetailsScreen from '../ecrans/description';
import BouttonTabs from '../ecrans/tabs';
import Splash from '../ecrans/Splash';
import GetStarted from '../ecrans/GetStarted';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash' screenOptions={false}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown : false}} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown : false}} />
      <Stack.Screen name="CarDetailsScreen" component={CarDetailsScreen} options={{headerShown : false}} />
      <Stack.Screen name="BouttonTabs" component={BouttonTabs} options={{headerShown : false}} />
      <Stack.Screen name="Splash" component={Splash} options={{headerShown : false}} />
      <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown : false}} />

    </Stack.Navigator>
  </NavigationContainer>
);
}

export default Routes;