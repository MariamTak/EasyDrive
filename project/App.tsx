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
import Modelvoiture from './android/app/src/screens/modelvoiture';
import RegistrationScreen from './android/app/src/screens/immatriculation';
import Kilometragevoiture from './android/app/src/screens/kilometrage';
import Detailsvoiture from './android/app/src/screens/detailsvoiture';
import Portesiegevoiture from './android/app/src/screens/portesiegevoiture';
import Questionagence from './android/app/src/screens/questionagence';
import Telephone from './android/app/src/screens/Telephone';
import Lieu from './android/app/src/screens/Lieu';
import Prixlocation from './android/app/src/screens/prixlocation';
import Prixjour from './android/app/src/screens/Prix_jour';
import Annoncevoiture from './android/app/src/screens/annoncevoiture';
import Photovoiture from './android/app/src/screens/photos';
import Voitureindisponible from './android/app/src/screens/voitureindisponible';
import SuccessPage from './android/app/src/screens/SuccessPage';
import MesVoitures from './android/app/src/screens/Mesvoitures/Mesvoitures';
import Gererannonce from './android/app/src/screens/gererannonce';
import Home from './android/app/src/screens/Navigation/Home';
const Stack = createStackNavigator();




function App(): React.JSX.Element {

  return (
<><NavigationContainer><Stack.Navigator>
<Stack.Screen name='Splash' component={Splash} options={{headerShown : false}}/>
<Stack.Screen name='GetStarted' component={GetStarted} options={{headerShown : false}}/>
<Stack.Screen name='SignUp' component={SignUp} options={{headerShown : false}}/>
<Stack.Screen name='LogIn' component={LogIn} options={{headerShown : false}}/>

<Stack.Screen name="Container" component={Container} options={{headerShown : false}}/>
<Stack.Screen name="Modelvoiture" component={Modelvoiture} options={{headerShown : false}} />
<Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{headerShown : false}} />
<Stack.Screen name="Kilometragevoiture" component={Kilometragevoiture} options={{headerShown : false}} />
<Stack.Screen name="Detailsvoiture" component={Detailsvoiture} options={{headerShown : false}} />
<Stack.Screen name="Portesiegevoiture" component={Portesiegevoiture} options={{headerShown : false}} />
<Stack.Screen name="Questionagence" component={Questionagence} options={{headerShown : false}} />
<Stack.Screen name="Telephone" component={Telephone} options={{headerShown : false}} />
<Stack.Screen name="Lieu" component={Lieu} options={{headerShown : false}} />
<Stack.Screen name="Prixlocation" component={Prixlocation} options={{headerShown : false}} />
<Stack.Screen name="Prixjour" component={Prixjour} options={{headerShown : false}} />
<Stack.Screen name="Voitureindisponible" component={Voitureindisponible} options={{headerShown : false}} />
<Stack.Screen name="Annoncevoiture" component={Annoncevoiture} options={{headerShown : false}} />
<Stack.Screen name="Photovoiture" component={Photovoiture} options={{headerShown : false}} />
<Stack.Screen name="SuccessPage" component={SuccessPage} options={{headerShown : false}} />
<Stack.Screen name="MesVoitures" component={MesVoitures} options={{headerShown : false}} />
<Stack.Screen name="Gererannonce" component={Gererannonce} options={{headerShown : false}} />
<Stack.Screen name="Home" component={Home} options={{headerShown : false}} />



</Stack.Navigator>
</NavigationContainer>
</>
);
}


export default App;
