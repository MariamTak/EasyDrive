import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../ecrans/login';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import RegisterScreen from '../ecrans/register';
import CarDetailsScreen from '../ecrans/description';
import BouttonTabs from '../ecrans/tabs';
import Splash from '../ecrans/Splash';
import GetStarted from '../ecrans/GetStarted';
import RegistrationScreen from '../ecrans/immatriculation';
import Modelvoiture from '../ecrans/modelvoiture';
import Kilometragevoiture from '../ecrans/kilometrage';
import Detailsvoiture from '../ecrans/detailsvoiture';
import Portesiegevoiture from '../ecrans/portesiegevoitur';
import Optionvoiture from '../ecrans/optionvoiture';
import Annoncevoiture from '../ecrans/annoncevoiture';
import Questionagence from '../ecrans/questionagence';
import Telephone from '../ecrans/Telephone';
import Lieu from '../ecrans/Lieu';
import Prixlocation from '../ecrans/prixlocation';
import Prixjour from '../ecrans/Prix_jour';
import Finaliser from '../ecrans/finaliser';
import Demande from '../ecrans/demande';
import Location from '../ecrans/location';
import Photovoiture from '../ecrans/photos';
import Gererannonce from '../ecrans/gererannonce';
import Voitureindisponnible from '../ecrans/voitureindisponnible';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <GestureHandlerRootView>

    <NavigationContainer>
    <Stack.Navigator initialRouteName='Modelvoiture' screenOptions={false}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown : false}} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown : false}} />
      <Stack.Screen name="CarDetailsScreen" component={CarDetailsScreen} options={{headerShown : false}} />
      <Stack.Screen name="BouttonTabs" component={BouttonTabs} options={{headerShown : false}} />
      <Stack.Screen name="Splash" component={Splash} options={{headerShown : false}} />
      <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown : false}} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{headerShown : false}} />
      <Stack.Screen name="Modelvoiture" component={Modelvoiture} options={{headerShown : false}} />
      <Stack.Screen name="Kilometragevoiture" component={Kilometragevoiture} options={{headerShown : false}} />
      <Stack.Screen name="Detailsvoiture" component={Detailsvoiture} options={{headerShown : false}} />
      <Stack.Screen name="Portesiegevoiture" component={Portesiegevoiture} options={{headerShown : false}} />
      <Stack.Screen name="Optionvoiture" component={Optionvoiture} options={{headerShown : false}} />
      <Stack.Screen name="Annoncevoiture" component={Annoncevoiture} options={{headerShown : false}} />
      <Stack.Screen name="Questionagence" component={Questionagence} options={{headerShown : false}} />
      <Stack.Screen name="Telephone" component={Telephone} options={{headerShown : false}} />
      <Stack.Screen name="Lieu" component={Lieu} options={{headerShown : false}} />
      <Stack.Screen name="Prixlocation" component={Prixlocation} options={{headerShown : false}} />
      <Stack.Screen name="Prixjour" component={Prixjour} options={{headerShown : false}} />
      <Stack.Screen name="Finaliser" component={Finaliser} options={{headerShown : false}} />
      <Stack.Screen name="Demande" component={Demande} options={{headerShown : false}} />
      <Stack.Screen name="Location" component={Location} options={{headerShown : false}} />
      <Stack.Screen name="Photovoiture" component={Photovoiture} options={{headerShown : false}} />
      <Stack.Screen name="Gererannonce" component={Gererannonce} options={{headerShown : false}} />
      <Stack.Screen name="Voitureindisponnible" component={Voitureindisponnible} options={{headerShown : false}} />



    </Stack.Navigator>
  </NavigationContainer>
  </GestureHandlerRootView>
);


}

export default Routes;