import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';

// Screens
import Home from './Home';
import Owner from './Owner';
import Compte from './CompteSigned';
import AccountScreen from './CompteSigned';
// Screen names


function Container() {
  const homeName = "Location";
const ownerName = "Propriétaire";
const compteName = "Compte";

const Tab = createBottomTabNavigator();
const route=useRoute();
const user_id=route.params.user_id;
const fullName=route.params.fullName;

console.log("user_id récupéré :", user_id);

  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = 'search';
          } else if (rn === ownerName) {
            iconName = "car";
          } else if (rn === compteName) {
            iconName = 'user';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#5E77AA',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          paddingBottom: 10,
          fontSize: 10
        },
        tabBarStyle: {
          padding: 10,
          height: 70
        },
        headerShown: false
      })}
    >
      <Tab.Screen name={ownerName} component={Owner} initialParams={{user_id:user_id}} />
      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={compteName} component={AccountScreen} initialParams={{user_id:user_id, fullName:fullName}} />
    </Tab.Navigator>
  );
}

export default Container;
