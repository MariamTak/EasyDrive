import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Inscription from '../inscription';
const Tab = createMaterialBottomTabNavigator();

const BouttonTabs = () => {
    return (
        <Tab.Navigator
          initialRouteName="Inscriptionhome"
          activeColor="#e91e63"
          barStyle={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen
            name="Inscriptionhome"
            component={Inscription}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Inscriptionupdate"
            component={Inscription}
            options={{
              tabBarLabel: 'Updates',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Inscriptionaccount"
            component={Inscription}
            options={{
              tabBarLabel: 'Inscription',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );
}

export default BouttonTabs;